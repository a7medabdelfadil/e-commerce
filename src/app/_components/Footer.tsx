// ** In the name of Allah ♥️
'use client'
import { usePathname } from 'next/navigation'

const Footer = () => {
    const path = usePathname();

    const showFooter = path.includes('sign-in') || path.includes('sign-up');

    return (
        <div>
        {!showFooter &&
            <footer className="bg-white dark:bg-gray-900">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div
                        className="flex flex-col items-center gap-4 rounded-lg bg-primary p-6 shadow-lg sm:flex-row sm:justify-between"
                    >
                        <strong className="text-xl text-white sm:text-xl"> Make Your Next Career Move! </strong>

                        <a
                            className="inline-flex items-center gap-2 rounded-full border border-white bg-white px-8 py-3 text-primary hover:bg-transparent hover:text-white focus:outline-none focus:ring active:bg-white/90"
                            href="#"
                        >
                            <span className="text-sm font-medium"> Let&apos;s Get Started </span>

                            <svg
                                className="size-5 rtl:rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </a>
                    </div>

                    <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="text-center sm:text-left">
                            <p className="text-lg font-medium text-gray-900 dark:text-white">About Us</p>

                            <ul className="mt-8 space-y-4 text-sm">
                                <li>
                                    <a
                                        className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                        href="#"
                                    >
                                        Company History
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                        href="#"
                                    >
                                        Meet the Team
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                        href="#"
                                    >
                                        Employee Handbook
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                        href="#"
                                    >
                                        Careers
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center sm:text-left">
                            <p className="text-lg font-medium text-gray-900 dark:text-white">Our Services</p>

                            <ul className="mt-8 space-y-4 text-sm">
                                <li>
                                    <a
                                        className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                        href="#"
                                    >
                                        Web Development
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                        href="#"
                                    >
                                        Web Design
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                        href="#"
                                    >
                                        Marketing
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                        href="#"
                                    >
                                        Google Ads
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center sm:text-left">
                            <p className="text-lg font-medium text-gray-900 dark:text-white">Resources</p>

                            <ul className="mt-8 space-y-4 text-sm">
                                <li>
                                    <a
                                        className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                        href="#"
                                    >
                                        Online Guides
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                        href="#"
                                    >
                                        Conference Notes
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                        href="#"
                                    >
                                        Forum
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                        href="#"
                                    >
                                        Downloads
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                        href="#"
                                    >
                                        Upcoming Events
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="text-center sm:text-left">
                            <p className="text-lg font-medium text-gray-900 dark:text-white">Helpful Links</p>

                            <ul className="mt-8 space-y-4 text-sm">
                                <li>
                                    <a
                                        className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                        href="#"
                                    >
                                        FAQs
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                                        href="#"
                                    >
                                        Support
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className="group flex justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                        href="#"
                                    >
                                        <span
                                            className="text-gray-700 transition group-hover:text-gray-700/75 dark:text-white dark:group-hover:text-white/75"
                                        >
                                            Live Chat
                                        </span>

                                        <span className="relative flex h-2 w-2">
                                            <span
                                                className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"
                                            ></span>
                                            <span className="relative inline-flex size-2 rounded-full bg-teal-500"></span>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex justify-between mt-16">
                        <ul className="flex justify-center gap-6 sm:justify-end">
                            <li>
                                <a
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-primary transition hover:text-primary/75 dark:text-primary dark:hover:text-primary/75"
                                >
                                    <span className="sr-only">Facebook</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            fillRule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-primary transition hover:text-primary/75 dark:text-primary dark:hover:text-primary/75"
                                >
                                    <span className="sr-only">Instagram</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            fillRule="evenodd"
                                            d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm5.25 1.5h-3a4.25 4.25 0 0 0-4.25 4.25v3a4.25 4.25 0 0 0 4.25 4.25h3a4.25 4.25 0 0 0 4.25-4.25v-3A4.25 4.25 0 0 0 13 3.5zm-.75 9a3.75 3.75 0 0 1-3.75-3.75A3.75 3.75 0 0 1 12.25 5a3.75 3.75 0 0 1 3.75 3.75A3.75 3.75 0 0 1 12.25 12.5zm1.25-2.5h1.25a.75.75 0 0 0 0-1.5H13.5a.75.75 0 0 0 0 1.5zm-1.5 1.25a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            }
        </div> 
    );
};

export default Footer;
