import React from 'react';

interface BreadCrumbsProps {
    currentCourse?: string;
}

// ** In the name of Allah ♥️

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ currentCourse = 'Next.js' }) => {
    return (
        <div className="p-4 bg-gray-900 text-white rounded-lg shadow-md">
            <nav aria-label="Breadcrumb">
                <ol className="flex flex-wrap overflow-hidden rounded-lg border border-gray-700 text-gray-200">
                    <li className="flex items-center">
                        <a
                            href="#"
                            className="flex h-10 items-center gap-1.5 bg-gray-800 px-4"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                />
                            </svg>
                            <span className="text-sm font-medium">Home</span>
                        </a>
                    </li>

                    <li className="relative flex items-center">
                        <span className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-800 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"></span>
                        <a
                            href="#"
                            className="flex h-10 items-center bg-gray-900 pe-4 ps-8 text-sm font-medium"
                        >
                            Courses
                        </a>
                    </li>

                    <li className="relative flex items-center">
                        <span className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-900 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"></span>
                        <a
                            href="#"
                            className="flex h-10 items-center bg-gray-800 pe-4 ps-8 text-sm font-medium"
                        >
                            {currentCourse}
                        </a>
                    </li>
                </ol>
            </nav>
        </div>
    );
};

export default BreadCrumbs;
