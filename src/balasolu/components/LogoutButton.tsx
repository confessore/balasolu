import React from 'react';
import { auth } from "../lib/firebaseApp";
import { signOut } from "firebase/auth";

const LogoutButton = () => {
    const onClicked = () => {
        signOut(auth).then(() => {
            console.log("{} logged out", auth.name);
          }).catch((error) => {
            console.log(error);
          });
    }

    return (
        <button className="px-4 py-1 m-1 text-sm text-rose-500 
            font-semibold rounded-full border border-rose-400 
            hover:text-white hover:bg-rose-500 hover:border-transparent 
            focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
            onClick={onClicked}>logout
        </button>
    );
}

export default LogoutButton