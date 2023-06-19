import {Card, Title, Text} from "@tremor/react";

const Status = () => (
    <Card className="w-full" decoration="top" decorationColor="green">
        <Title>Status</Title>
        <ol className="flex items-center h-full py-2">
            <li className="relative w-full">
                <div className="flex items-center">
                    <div
                        className="z-10 flex items-center justify-center w-6 h-6 bg-green-600 rounded-full ring-0 ring-white dark:bg-green-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        <svg aria-hidden="true" className="w-4 h-4 text-green-100 dark:text-green-300"
                             fill="currentColor"
                             viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"></path>
                        </svg>
                    </div>
                    <div className="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3">
                    <Text>Verification</Text>
                </div>
            </li>
            <li className="relative w-full">
                <div className=" absolute">
                    <Text>Get BNB</Text>
                </div>
                <div className="flex items-center mb-7">
                    <div
                        className="z-10 flex items-center justify-center w-6 h-6 bg-green-600 rounded-full ring-0 ring-white dark:bg-green-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        <svg aria-hidden="true" className="w-4 h-4 text-green-100 dark:text-green-300"
                             fill="currentColor"
                             viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"></path>
                        </svg>
                    </div>
                    <div className="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
            </li>
            <li className="relative w-full">
                <div className="flex items-center">
                    <div
                        className="z-10 flex items-center justify-center w-6 h-6 bg-green-600 rounded-full ring-0 ring-white dark:bg-green-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        <svg aria-hidden="true" className="w-4 h-4 text-green-100 dark:text-green-300"
                             fill="currentColor"
                             viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"></path>
                        </svg>
                    </div>
                    <div className="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3">
                    <Text>Change on GSC</Text>
                </div>
            </li>
            <li className="relative w-full">
                <div className="flex items-center">
                    <div
                        className="z-10 flex items-center justify-center w-6 h-6 bg-green-600 rounded-full ring-0 ring-white dark:bg-green-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        <svg aria-hidden="true" className="w-4 h-4 text-green-100 dark:text-green-300"
                             fill="currentColor"
                             viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"></path>
                        </svg>
                    </div>
                    <div className="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3">
                    <Text>Buy Pack</Text>
                </div>
            </li>
            <li className="relative w-full">
                <div className="flex items-center">
                    <div
                        className="dark:bg-gray-700 flex h-6 justify-center m-0 p-0 ring-white sm:ring-8 w-6">
                        <div
                            className="flex items-center justify-center border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
                            <div role="status">
                                <svg aria-hidden="true"
                                     className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                     viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="currentColor"/>
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentFill"/>
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>

                </div>
                <div className="mt-3">
                    <Text>Wait</Text>
                </div>
            </li>
            <li className="relative w-full">
                <div className="flex items-center">
                    <div
                        className="z-10 flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full ring-0 ring-white dark:bg-gray-700 sm:ring-8 dark:ring-gray-900 shrink-0">
                        <svg aria-hidden="true" className="w-3 h-3 text-gray-800 dark:text-gray-300" fill="currentColor"
                             viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clipRule="evenodd"></path>
                        </svg>
                    </div>
                </div>
                <div className="mt-3">
                    <Text>Get Money</Text>
                </div>
            </li>
        </ol>


        <ol className="flex items-center w-full">
            <li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
        <span
            className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
            <svg aria-hidden="true" className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300"
                 fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd"
                                                                                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                                                  clipRule="evenodd"></path></svg>
        </span>
            </li>
            <li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
        <span
            className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
            <svg aria-hidden="true" className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300"
                 fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd"
                                                                                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                                                  clipRule="evenodd"></path></svg>
        </span>
            </li>
            <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
        <span
            className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 lg:w-6 lg:h-6 dark:text-gray-100"
                 fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd"
                      d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                      clipRule="evenodd"></path>
            </svg>
        </span>
            </li>
            <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
        <span
            className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 lg:w-6 lg:h-6 dark:text-gray-100"
                 fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd"
                      d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                      clipRule="evenodd"></path>
            </svg>
        </span>
            </li>
            <li className="flex items-center w-full">
        <span
            className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 lg:w-6 lg:h-6 dark:text-gray-100"
                 fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path
                d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                <path fillRule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"></path>
            </svg>
        </span>
            </li>
        </ol>

    </Card>
);

export default Status;
