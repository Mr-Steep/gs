import React, {Fragment, useEffect, useRef, useState} from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface ModalProps {
    text: string|React.ReactNode;
    setAdditionalInformation: (React.Dispatch<React.SetStateAction<string>>);
}
const TypingEffect: React.FC<{ text: any }> = ({ text }) => {
    const [displayedText, setDisplayedText] = useState('');
    text = '  ' + text
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < text.length) {
                setDisplayedText(prevText => prevText + text.charAt(index));
                index++;
            } else {
                clearInterval(interval);
            }
        }, 100); // Интервал между добавлением символов

        return () => {
            clearInterval(interval); // Очистка интервала при размонтировании компонента
        };
    }, [text]);

    return <div dangerouslySetInnerHTML={{ __html: displayedText.replace(/\/\\/g, '&#92;').replace(/\//g, '<br>') }} />;
};
export default function Modal({ text, setAdditionalInformation }: ModalProps) {
    const cancelButtonRef = useRef(null);

    return (
        <Transition.Root show={Boolean(text)} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={() => setAdditionalInformation('')}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
                                <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
                                    <div className="w-full">
                                        <div className="m-2 my-10 max-w-[400px] mx-auto">
                                            <div className="mb-8">
                                                <h1 className="mb-4 text-2xl font-mono ">
                                                    <TypingEffect text={text} />
                                                </h1>
                                            </div>
                                            <div className="space-y-4">
                                                <button
                                                    onClick={() => setAdditionalInformation('')}
                                                    className="p-3 mx-2 w-36 bg-black rounded-full text-white font-semibold"
                                                >
                                                    OK
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
