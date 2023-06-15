import React, { useState } from 'react';
import Modal from '@/app/components/modal';

const SUCCESS = 'Success! Please confirm your email';
const INVALID_EMAIL = 'Invalid email. Please enter a valid email address.';

const Example = () => {
    const [email, setEmail] = useState('');
    const [additionalInformation, setAdditionalInformation] = useState('');

    const handleSubscribe = async () => {
        if (!validateEmail(email)) {
            setAdditionalInformation(INVALID_EMAIL);
            setEmail('');
            return;
        }

        const requestData = { email };
        console.log(process.env);

        try {
            let response = await fetch('/api/createContact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });

            if (response.ok) {
                const responseData = await response.json();
                if (responseData.success) {
                    setAdditionalInformation(SUCCESS);
                    console.log(SUCCESS);
                } else {
                    setAdditionalInformation(responseData.error);
                    console.log(responseData.error);
                    setEmail('');
                }
            } else {
                const responseData = await response.json();
                setAdditionalInformation(responseData.error);
            }
        } catch (error) {
            console.error(error);
            console.log(error);
            setAdditionalInformation('Internal server error');
        }
    };

    const handleEmailChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setAdditionalInformation('');
        setEmail(event.target.value);
    };

    const validateEmail = (email: string | any[]) => {
        if (email.length < 5) {
            return false;
        }
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email as string);
    };

    return (
        <>
            <div className="conic m-2 ">
                <div className="w-full flex-auto rounded-3xl border-0 bg-white/5">
                    <label htmlFor="email-address" className="sr-only">
                        Email address
                    </label>
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="off"
                        className="flex-auto w-3/4 rounded-l-3xl border-0 bg-transparent pl-4 py-4 pr-5 focus:outline-none text-white text-sm"
                        placeholder="Enter Your email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <button
                        type="submit"
                        className="rounded-3xl w-1/4 px-2 -ml-[1rem] py-2 text-sm bg-white/5 text-white shadow-sm hover:bg-white/10 transform-gpu transition-transform duration-200 ease-in-out hover:scale-95 focus:scale-95 active:scale-95"
                        onClick={handleSubscribe}
                    >
                        Subscribe
                    </button>
                </div>
            </div>
            {additionalInformation && (
                <Modal
                    text={additionalInformation}
                    setAdditionalInformation={setAdditionalInformation} />
            )}
        </>
    );
};

export default Example;
