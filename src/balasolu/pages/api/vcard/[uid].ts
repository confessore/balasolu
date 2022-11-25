// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
import type { NextApiRequest, NextApiResponse } from 'next'
import { useDocument } from 'react-firebase-hooks/firestore';
import { firestore } from '../../../lib/firebaseApp';
import { createClient } from 'redis'

type Doc = {
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
                    res.send((JSON.parse(value) as Doc).vcard.replaceAll("_n", "\n"));
                    await client.quit();
                    break;
                }
                const vcardColRef = collection(firestore, "vcards");
                const vcardDocRef = doc(vcardColRef, uid as string);
                const vcard = await getDoc(vcardDocRef);
                await client.set(key, JSON.stringify((vcard.data() as Doc).vcard), { EX: 3600 });
                res.setHeader('Content-Type', 'text/x-vcard; charset=utf-8');
                res.setHeader('Content-Disposition', 'inline; filename="vcard.vcf"');
                res.send((vcard.data() as Doc).vcard.replaceAll("_n", "\n"));
                await client.quit();
                break;
            }
            case 'POST': {
                const vcardColRef = collection(firestore, "vcards");
                const vcardDocRef = doc(vcardColRef, uid as string);
                const vcard = { vcard: req.body.replaceAll("\n", "_n") as string};
                await setDoc(vcardDocRef, vcard);
                await client.set(key, JSON.stringify(vcard), { EX: 3600 });
                res.send("OK");
                await client.quit();
                break;
            }
            default: {
                await client.quit();
                break;
            }
        }
    }
    catch (e) {
        await client.quit();
        console.error(e);
    }
}
