import React, { useState } from 'react';
// import SibApiV3Sdk from 'sib-api-v3-typescript';

const apiKey = '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';

export default function Example() {
    const [email, setEmail] = useState('');

    // const handleSubscribe = async () => {
    //
    //     let apiInstance = new SibApiV3Sdk.ContactsApi()
    //
    //     apiInstance.setApiKey(SibApiV3Sdk.ContactsApiApiKeys.apiKey, apiKey);
    //
    //
    //     const createContact = new SibApiV3Sdk.CreateContact();
    //     createContact.email = email; // Используем значение из состояния email
    //     createContact.listIds = [2];
    //
    //     try {
    //         const data = await apiInstance.createContact(createContact);
    //         console.log('API called successfully. Returned data: ' + JSON.stringify(data));
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };
    //
    // const handleEmailChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    //     setEmail(event.target.value);
    // };

    return (
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
                // onChange={handleEmailChange}
            />
            <button
                type="submit"
                className="absolute rounded-3xl -ml-[6.5rem] mt-2 px-3.5 py-2 text-sm bg-white/5 text-white shadow-sm hover:bg-white/10 transform-gpu transition-transform duration-200 ease-in-out hover:scale-95 focus:scale-95 active:scale-95 "
                // onClick={handleSubscribe}
            >
                Subscribe
            </button>
        </div>
    );
}
