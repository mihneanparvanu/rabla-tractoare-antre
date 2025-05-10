'use client'
import React, { useState } from 'react';


interface CaptchaProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const CaptchaPopup: React.FC<CaptchaProps> = ({isOpen, onClose, onConfirm }) => {
    const [captchaCode, setCaptchaCode] = useState(Math.random().toString(36).substring(2, 7)); // Example captcha
    const [userInput, setUserInput] = useState('');
    const [message, setMessage] = useState('');


    const handleOpenPopup = () => {
        setMessage(''); 
    };

    const handleClosePopup = () => {
        onClose();
        setUserInput('');
        setMessage('');
    };

    const handleConfirm = () => {
        if (userInput.toLowerCase() === captchaCode.toLowerCase()) {
            handleClosePopup();
            handleRegenerateCode();
            onConfirm();
        } else {
            setMessage('Incorect! Mai încercați.');
        }
    };

    const handleRegenerateCode = () => {
        const newCode = Math.random().toString(36).substring(2, 7);
        setCaptchaCode(newCode);
        setUserInput('');
        setMessage('');
    };

    if (!isOpen) {
        return null
    }

    return (
        <div className="container py-8">
            <div className="fixed top-0 left-0 w-full h-full backdrop-blur-md flex justify-center items-start z-30">
                <div className="bg-white flex flex-col items-center px-20 rounded-md shadow-lg mt-20 p-6 relative">
                    <h2 className="text-xl text-black font-semibold mb-2">Sunteți sigur?</h2>
                    <p className="mb-4 text-black">Confirmați încărcarea cererii?</p>


                    <div className="bg-gray-200 text-black text-center py-2 px-6 mb-2">{captchaCode}</div>

                    <button
                        onClick={handleRegenerateCode}
                        className="bg-secondaryGreen hover:bg-green-900 text-white font-bold py-1 px-4 rounded my-2"
                    >
                        Regenerare cod
                    </button>

                    <label htmlFor="captchaInput" className="block text-gray-700 text-sm font-bold mb-1">
                        Introduceți codul din imagine:
                    </label>
                    <input
                        type="text"
                        id="captchaInput"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                    />
                    <p className='text-red-500 font-semibold mb-2'>{message}</p>
                    <div className="flex flex-col w-full justify-center gap-2">
                        <button
                            onClick={handleClosePopup}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            <svg
                                className="w-4 h-4 inline-block mr-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            Renunță
                        </button>
                        <button
                            onClick={handleConfirm}
                            className="bg-secondaryGreen hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            <svg
                                className="w-4 h-4 inline-block mr-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Confirmă
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CaptchaPopup;