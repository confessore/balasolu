import { auth } from "../lib/firebaseApp"
import FirebaseAuth from "./FirebaseAuth";
import { uiConfig } from "../firebaseAuthUI.config.js"
import Service from "./Service";
import GlobeAmericasIcon from '@heroicons/react/24/outline/GlobeAmericasIcon';
import CodeBracketIcon from '@heroicons/react/24/outline/CodeBracketIcon';
import CakeIcon from '@heroicons/react/24/outline/CakeIcon';
import CloudIcon from '@heroicons/react/24/outline/CloudIcon';
import Emailer from "./Emailer";
import Candle from "./Candle";


const Anonymous = () => {

    
    return (
        <div className="flex flex-col justify-center items-center m-1 p-1">
            <div className="flex flex-wrap justify-center items-center">
                <Service icon={<GlobeAmericasIcon />} title="go global" highlight="serve in most major nations on the planet" description="when customer service and reliability mean everything, borders mean nothing" />
                <Service icon={<CodeBracketIcon />} title="we'll handle the nerd stuff" highlight="dreams become reality" description="everyone gets to send their kids to college or drive lambos if they're in to that kind of thing; we're not here to judge" />
                <Service icon={<CloudIcon />} title="we're your partner in the clouds" highlight="swift and responsive service availability anywhere your people are" description="redundancy and international stability is ensured with multi-regional replication" />
                <Service icon={<CakeIcon />} title="the cake is not a lie" highlight="scout's honor 🙋‍♂️" description="we throw mad cake parties" />
            </div>
            <Emailer />
            <Candle name={"that's right. we're selling candles"} imgsrc={""} highlight={"100% soy wax"} description={"8oz hand poured all natural soy wax candles"} price={15} />
            <FirebaseAuth className="flex w-auto h-auto m-1 p-1" firebaseAuth={auth} uiConfig={uiConfig()} />
        </div>
    );
}

export default Anonymous