import { User } from "firebase/auth";
import { collection, doc } from "firebase/firestore";
import { firestore } from "../lib/firebaseApp";
import Image from "next/image"
import Uploader from "./Uploader";

interface Model {
    user: User;
}

const Authenticated = (props: Model) => {
    
    return (
        <>
            <Uploader user={props.user}  />
        </>
    );
}

export default Authenticated