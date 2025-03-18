function Features() {
    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-[#F9FAFB]">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">Scan&Order - Make Dining Effortless!</h2>
                    <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">Enhance your restaurant's efficiency and customer experience with Scan&Order.</p>
                </div>

                <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
                    <div className="md:p-8 lg:p-14 flex flex-col justify-between">
                        <svg
                            className="w-full h-auto max-w-[48px] mx-auto"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect x="6" y="6" width="12" height="12" stroke="#161616" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <rect x="6" y="30" width="12" height="12" stroke="#161616" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <rect x="30" y="6" width="12" height="12" stroke="#161616" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M30 30H42V42H30V30Z" fill="#FCBF4B" stroke="#161616" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M24 18V24M24 24H18M24 24H30M24 24V30M36 24H42M36 36H24V42" stroke="#161616" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="flex flex-col justify-center items-center justify-end">
                            <h3 className="mt-6 text-xl font-bold text-gray-900 font-pj">QR Code-Based Ordering</h3>
                            <p className="mt-5 text-base text-gray-600 font-pj">No need for physical menus! Customers simply scan a QR code to access the restaurant’s digital menu instantly.</p>
                        </div>
                    </div>

                    <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-between">
                        <svg
                            className="w-full h-auto max-w-[48px] mx-auto"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M28 28H20V46H28V28Z" stroke="#161616" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10 38H2V46H10V38Z" fill="#FCBF4B" stroke="#161616" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M46 18H38V46H46V18Z" fill="#FCBF4B" stroke="#161616" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5 18L15 8L23 16L37 2" stroke="#161616" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M28 2H37V11" stroke="#161616" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="flex flex-col justify-center items-center justify-end">
                            <h3 className="mt-6 text-xl font-bold text-gray-900 font-pj">Digital Menu with Images</h3>
                            <p className="mt-5 text-base text-gray-600 font-pj">Showcase your dishes with high-quality images, descriptions, and pricing to enhance customer engagement.</p>
                        </div>
                    </div>

                    <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-between">
                        <svg
                            className="w-full h-auto max-w-[48px] mx-auto"
                            viewBox="0 0 48 44"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M31.562 19.461C31.051 18.939 30.429 18.539 29.742 18.291C29.056 18.042 28.322 17.952 27.596 18.026C26.869 18.1 26.169 18.336 25.546 18.718C24.924 19.1 24.395 19.617 24 20.231C23.605 19.617 23.076 19.1 22.454 18.718C21.832 18.336 21.131 18.099 20.404 18.025C19.678 17.951 18.944 18.042 18.257 18.29C17.571 18.539 16.949 18.939 16.438 19.461C15.516 20.404 15 21.67 15 22.988C15 24.306 15.516 25.572 16.438 26.515L24 34.2L31.564 26.516C32.485 25.573 33 24.307 33 22.988C32.9997 21.67 32.4835 20.404 31.562 19.461Z"
                                fill="#FCBF4B"
                                stroke="#161616"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M42 42H6C4.939 42 3.922 41.579 3.172 40.828C2.421 40.078 2 39.061 2 38V2H18L23 10H46V38C46 39.061 45.579 40.078 44.828 40.828C44.078 41.579 43.061 42 42 42Z"
                                stroke="#161616"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <div className="flex flex-col justify-center items-center justify-end">
                            <h3 className="mt-6 text-xl font-bold text-gray-900 font-pj">Fast & Contactless Ordering</h3>
                            <p className="mt-5 text-base text-gray-600 font-pj">Eliminate wait times—customers can place orders directly from their smartphones without waiting for a server.</p>
                        </div>
                    </div>

                    <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200">
                        <svg
                            className="w-full h-auto max-w-[48px] mx-auto"
                            viewBox="0 0 42 42"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9.667 25H6C3.239 25 1 27.239 1 30V37C1 39.761 3.239 42 6 42H36C38.761 42 41 39.761 41 37V30C41 27.239 38.761 25 36 25H31.833C30.269 25 29 26.268 29 27.833C29 29.398 27.732 30.667 26.167 30.667H15.333C13.769 30.667 12.5 29.398 12.5 27.833C12.5 26.268 11.232 25 9.667 25Z"
                                fill="#FCBF4B"
                            />
                            <path
                                d="M9 9H33"
                                stroke="#161616"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M9 17H33"
                                stroke="#161616"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M1 25H13V31H29V25H41"
                                stroke="#161616"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M37 1H5C2.791 1 1 2.791 1 5V37C1 39.209 2.791 41 5 41H37C39.209 41 41 39.209 41 37V5C41 2.791 39.209 1 37 1Z"
                                stroke="#161616"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <div className="flex flex-col justify-center items-center justify-end">
                            <h3 className="mt-6 text-xl font-bold text-gray-900 font-pj">Instant Order Notifications</h3>
                            <p className="mt-5 text-base text-gray-600 font-pj">Both customers and staff receive real-time order updates, reducing miscommunication and improving service speed.</p>
                        </div>
                    </div>

                    <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-between md:border-t">
                        <svg
                            className="w-full h-auto max-w-[46px] mx-auto"
                            viewBox="0 0 42 42"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M41 1H1V41H41V1Z"
                                stroke="#161616"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M18 7H7V20H18V7Z"
                                stroke="#161616"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M18 26H7V35H18V26Z"
                                stroke="#161616"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M35 7H24V35H35V7Z"
                                fill="#FCBF4B"
                                stroke="#161616"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <div className="flex flex-col justify-center items-center justify-end">
                            <h3 className="mt-6 text-xl font-bold text-gray-900 font-pj">Easy Customization & Management</h3>
                            <p className="mt-5 text-base text-gray-600 font-pj">Update menu items, prices, and availability in real time without any hassle</p>
                        </div>
                    </div>

                    <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-between md:border-t">
                        <svg
                            className="w-full h-auto max-w-[46px] mx-auto"
                            viewBox="0 0 44 44"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M25 7C34.941 7 43 15.059 43 25C43 34.941 34.941 43 25 43C15.059 43 7 34.941 7 25"
                                stroke="#161616"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M19 1C9.059 1 1 9.059 1 19H19V1Z"
                                fill="#FCBF4B"
                                stroke="#161616"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <div className="flex flex-col justify-center items-center justify-end">
                            <h3 className="mt-6 text-xl font-bold text-gray-900 font-pj">Sales & Order Analytics</h3>
                            <p className="mt-5 text-base text-gray-600 font-pj">Gain insights into customer preferences, best-selling items, and peak ordering times with detailed analytics and reports.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Features
