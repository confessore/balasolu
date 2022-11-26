// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
import type { NextApiRequest, NextApiResponse } from 'next'
import { useDocument } from 'react-firebase-hooks/firestore';
import { firestore } from '../../../lib/firebaseApp';
import { createClient } from 'redis'

type DocData = {
  vcard: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>) {
    const { query: { uid }, method } = req;
    const client = createClient({
        socket: {
            host: "redis",
            port: 6379
        }
    });
    try {
        await client.connect();
        const date = new Date();
        const key = (uid as string) + `_${date.getHours()}`;
        switch (method) {
            case 'GET': {
                const value = await client.get(key);
                if (value) {
                    res.setHeader('Content-Type', 'text/x-vcard; charset=utf-8');
                    res.setHeader('Content-Disposition', 'inline; filename="vcard.vcf"');
                    res.status(200).send((JSON.parse(value) as DocData).vcard.replaceAll("_n", "\n"));
                    await client.quit();
                    break;
                }
                const vcardColRef = collection(firestore, "vcards");
                const vcardDocRef = doc(vcardColRef, uid as string);
                const vcardDoc = await getDoc(vcardDocRef);
                const vcardDocData = (vcardDoc.data() as DocData);
                await client.set(key, JSON.stringify(vcardDocData), { EX: 3600 });
                res.setHeader('Content-Type', 'text/x-vcard; charset=utf-8');
                res.setHeader('Content-Disposition', 'inline; filename="vcard.vcf"');
                res.status(200).send(vcardDocData.vcard.replaceAll("_n", "\n"));
                await client.quit();
                break;
            }
            case 'POST': {
                const vcardDocData = { vcard: req.body.replaceAll("\n", "_n") as string };
                const vcardDocDataString = JSON.stringify(vcardDocData);
                await client.set(key, vcardDocDataString, { EX: 3600 });
                res.status(200).send(vcardDocDataString);
                await client.quit();
                break;
            }
            default: {
                res.status(404);
                await client.quit();
                break;
            }
        }
    }
    catch (e) {
        res.status(500);
        await client.quit();
        console.error(e);
    }
}
