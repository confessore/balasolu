import React from 'react';
import { auth } from "../lib/firebaseApp";
import { useAuthState } from "react-firebase-hooks/auth";
import Anonymous from './Anonymous';
import Authenticated from './Authenticated';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
    const [user, loading, error] = useAuthState(auth);

    return (
        <div className="flex flex-col justify-center items-center">
            <Header />
            <div className="justify-center items-center m-1 p-1">
            {(error) &&
                <div>{error.message}</div>
            }
            {(loading) &&
                <div className="text-md">
                    loading...
                </div>
            }
            {(!loading && user) &&
                <Authenticated user={user} />
            }
            {(!loading && !user) &&
                <Anonymous />
            }
            </div>
            <Footer />
        </div>
    )
}

export default Layout