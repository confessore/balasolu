import React, { useState } from 'react';

const Emailer = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [valid, setValid] = useState(false);
    const [disabled, setDisabled] = useState(false);

    const isValid = () => {
        return (name.length !== 0 && email.length !== 0 && message.length !== 0);
    }

    const handleClick = async () => {
        console.log('handling button click`');
        if (isValid()) {
            setDisabled(true);
            const host = window.location.protocol + "//" + window.location.host;
            const url = host + '/api/sendEmail';
            console.log(url);
            await fetch(url, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: name, email: email, subject: 'email from contact form', description: message }),
            });
            setName('');
            setEmail('');
            setMessage('');
        }
        console.log('button click handled');
    }

    return (
        <div className="w-full h-auto md:w-[32rem] rounded-xl justify-center items-center m-1 p-8 bg-zinc-200 dark:bg-zinc-800 bg-opacity-90">
            <div className="justify-between items-center m-1 p-1">
                <div className="text-lg font-medium justify-center items-center m-1 p-1">
                    feel free to send us a message
                </div>
                <div className="m-1 p-1">
                    <div className="m-1 p-1 font-medium text-emerald-500 dark:text-emerald-400">what is your name?</div>
                    <input id="name" type="text" disabled={disabled} value={name} onChange={(e) => { setName(e.target.value); setValid(isValid()); } } />
                </div>
                <div className="m-1 p-1">
                    <div className="m-1 p-1 font-medium text-emerald-500 dark:text-emerald-400">what is your email?</div>
                    <input id="email" type="email" disabled={disabled} value={email} onChange={(e) => { setEmail(e.target.value); setValid(isValid()); } } />
                </div>
                <div className="m-1 p-1">
                    <div className="m-1 p-1 font-medium text-emerald-500 dark:text-emerald-400">how may we assist you?</div>
                    <textarea className="w-full" id="message" rows={4} disabled={disabled} value={message} onChange={(e) => { setMessage(e.target.value); setValid(isValid()); } } />
                </div>
            </div>
            <div>
                <button className="bg-blue-500 hover:bg-blue-700 disabled:bg-blue-300 disabled:hover:bg-blue-300 text-white font-bold py-2 px-4 rounded" disabled={disabled || !valid} onClick={() => handleClick()}>send message</button>
            </div>
        </div>
    );
};

export default Emailer;

export async function getServerSideProps() {
    
}