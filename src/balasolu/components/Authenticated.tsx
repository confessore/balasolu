import { User } from "firebase/auth";
import { collection, doc } from "firebase/firestore";
import { firestore } from "../lib/firebaseApp";
import Image from "next/image"
import Uploader from "./Uploader";
import LogoutButton from "./LogoutButton";
import PaypalSolo from "./PaypalSolo";
import PaypalReducer from "./PaypalReducer";
import Candle from "./Candle";
import VCardSolo from "./ProductSolo";
import ProductSolo from "./ProductSolo";
import TapCards from "./TapCards";
import TapStickers from "./TapStickers";

interface Model {
    user: User;
}

const Authenticated = (props: Model) => {
    
    return (
        <div className="flex flex-col justify-center items-center m-1 p-1">
            <LogoutButton />
            <Uploader user={props.user}  />
            <TapCards imgsrc={""} highlight={"standard size"} description={"durable for carrying and every day sharing"} price={9} uid={props.user.uid} />
            <TapStickers imgsrc={""} highlight={"quarter size"} description={"adhesive and great for calls to action"} price={3} uid={props.user.uid} />
        </div>
    );
}

export default Authenticated