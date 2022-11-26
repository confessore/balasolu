import { User } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { stringify } from "querystring";
import { useState } from "react";
import { firestore } from "../lib/firebaseApp";
import ServiceButton from "./ServiceButton";

type Model = {
  user: User
}

type DocData = {
  vcard: string
}

const Uploader = (props: Model) => {
  const [sent, setSent] = useState(false);
  const [vcard, setVcard] = useState("");

  const uploadToClient = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      if (i.size < 1048576) {
        setVcard(i);
      }
    }
  };

  const uploadToServer = async (event: any) => {
    setSent(true);
    const req = await fetch(("/api/vcard/" + props.user.uid), {
      method: "POST",
      body: vcard
    }).then(async res => {
        if (res.ok) {
          const vcardColRef = collection(firestore, "vcards");
          const vcardDocRef = doc(vcardColRef, props.user.uid as string);
          await setDoc(vcardDocRef, await res.json() as DocData);
        }
      });
  };

  return (
    <>
      {(sent) &&
        <div className="flex flex-col content-center items-center m-1 p-1">
          <h4>vcard was uploaded</h4>
        </div>
      }
      {(!sent) &&
        <div className="flex flex-col content-center items-center m-1 p-1">
          <h4>select vcard for upload</h4>
          <input type="file" accept=".vcf,.vcard" name="vcard" onChange={uploadToClient} className="m-1 p-1" />
          {(vcard) &&
            <button
              className="px-4 py-1 m-1 text-sm text-rose-500 
              font-semibold rounded-full border border-rose-400 
              hover:text-white hover:bg-rose-500 hover:border-transparent 
              focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
              type="submit"
              onClick={uploadToServer}
            >
              upload vcard
            </button>
          }
        </div>
      }
    </>
  );
}

export default Uploader;