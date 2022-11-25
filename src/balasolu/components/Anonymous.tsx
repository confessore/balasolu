import { auth } from "../lib/firebaseApp"
import FirebaseAuth from "./FirebaseAuth";
import { uiConfig } from "../firebaseAuthUI.config.js"


const Anonymous = () => {

    
    return (
        <>
            <FirebaseAuth firebaseAuth={auth} uiConfig={uiConfig()} />
        </>
    );
}

export default Anonymous