import { User } from "firebase/auth";
import { collection, doc } from "firebase/firestore";
import { firestore } from "../lib/firebaseApp";
import Image from "next/image"
import Uploader from "./Uploader";
import LogoutButton from "./LogoutButton";

interface Model {
    user: User;
}

const Authenticated = (props: Model) => {
    
    return (
        <>
            <div className="flex flex-col content-center items-center m-1 p-1">
                <LogoutButton />
                <Uploader user={props.user}  />
            </div>
        </>
    );
}

export default Authenticated