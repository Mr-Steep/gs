import React, { useState } from 'react';

const apiKey = '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';
const SUCCESS = 'Success! Please confirm your email';
const INVALID_EMAIL = 'Invalid email. Please enter a valid email address.';

export default function Example() {
    const [email, setEmail] = useState('');
    const [additionalInformation, setAdditionalInformation] = useState('');

    const handleSubscribe = async () => {
        if (!validateEmail(email)) {
            setAdditionalInformation(INVALID_EMAIL);
            return;
        }

        const url = 'https://api.brevo.com/v3/contacts';

        const data = {
            email: email,
            listIds: [2],

        };

        const headers = {
            accept: 'application/json',
            'api-key': apiKey,
            'content-type': 'application/json'
        };

        try {
            fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(data => {
                    if (data.id) {
                        setAdditionalInformation(SUCCESS)
                    }
                    if (data?.message) {
                        setAdditionalInformation(data.message)
                        setEmail('')
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        } catch (error) {
            console.log(error)
        }
    };

    const handleEmailChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setEmail(event.target.value);
    };

    const validateEmail = (email: string) => {
        if(email.length<5){
            return false
        }
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    return (
        <>
            <div className='conic m-2 '>
                <label htmlFor="email-address" className="sr-only">
                    Email address
                </label>
                <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="off"
                    className="w-full flex-auto rounded-3xl border-0 bg-white/5 px-4 py-4 focus:outline-none text-white text-sm "
                    placeholder="Enter Your email"
                    value={email}
                    onChange={handleEmailChange}
                />
                <button
                    type="submit"
                    className="absolute rounded-3xl -ml-[6.5rem] mt-2 px-3.5 py-2 text-sm bg-white/5 text-white shadow-sm hover:bg-white/10 transform-gpu transition-transform duration-200 ease-in-out hover:scale-95 focus:scale-95 active:scale-95 "
                    onClick={handleSubscribe}
                >
                    Subscribe
                </button>
            </div>
            <div className="text-white text-xs ml-4 text-left absolute">
                {additionalInformation}
            </div>
        </>
    );
}
