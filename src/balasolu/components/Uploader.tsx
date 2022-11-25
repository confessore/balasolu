import { User } from "firebase/auth";
import { stringify } from "querystring";
import { useState } from "react";

type Model = {
  user: User
}

const Uploader = (props: Model) => {
  const [vcard, setVcard] = useState("");

  const uploadToClient = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setVcard(i);
    }
  };

  const uploadToServer = async (event: any) => {
    const response = await fetch(("/api/vcard/" + props.user.uid), {
      method: "POST",
      body: vcard
    });
  };

  return (
    <div>
      <div>
        <h4>Select Image</h4>
        <input type="file" name="vcard" onChange={uploadToClient} />
        <button
          className="btn btn-primary"
          type="submit"
          onClick={uploadToServer}
        >
          Send to server
        </button>
      </div>
    </div>
  );
}

export default Uploader;