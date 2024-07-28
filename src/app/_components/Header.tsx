// ** In the name of Allah ♥️
'use client'

import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import ShoppingCartIcon from "./ShoppingCartIcon";
import { useContext, useEffect, useRef, useState } from "react";
import CartContext from "../_context/CartContext";
import CartApis from "../_utils/CartApis";
import { AxiosResponse } from "axios";
import { CartItem, CartStateItem } from "../interfaces/interface";
import Cart from "./Cart";
import { usePathname } from 'next/navigation'

const Header = () => {
    const path = usePathname();
    const showHeader = path.includes('sign-in') || path.includes('sign-up');


    const { user } = useUser();
    const [isLoggedIn, setIsloggedIn] = useState(false);
    const { cart, setCart } = useContext(CartContext);
    const [openCart, setOpenCart] = useState(false);
    const cartRef = useRef<HTMLDivElement>(null);

    const userEmail = user?.primaryEmailAddress?.emailAddress;

    useEffect(() => {
        if (userEmail) {
            getCartItems(setCart, userEmail);
        }
    }, [userEmail]);

    const getCartItems = (setCart: React.Dispatch<React.SetStateAction<CartStateItem[]>>, userEmail: string) => {
        CartApis.getUserCartItems(userEmail)
            .then((res: AxiosResponse<{ data: CartItem[] }>) => {
                console.log('res cart', res.data.data);
                res.data.data.forEach(cartItem => {
                    setCart((oldCart: CartStateItem[]) => [
                        ...oldCart,
                        {
                            id: cartItem.id,
                            product: cartItem.attributes.products.data[0],
                        },
                    ]);
                });
            })
            .catch((err: any) => {
                console.log('error', err);
            });
    };

    useEffect(() => {
        setIsloggedIn(!!user);
    }, [user]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
                setOpenCart(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div>
            {!showHeader &&
        <header className="bg-white dark:bg-background pt-3">
            <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                <a className="block text-teal-600 dark:text-teal-300 shadow-md" title='Abufadel Logo' href="/">
                    <Image
                        src='/favicon.png'
                        alt='Abufadel Logo'
                        width={50}
                        height={50}
                        style={{
                            maxWidth: "100%",
                            height: "auto"
                        }} />
                </a>

                <div className="flex flex-1 items-center justify-end md:justify-between">
                    <nav aria-label="Global" className="hidden md:block">
                        <ul className="flex items-center gap-6 text-sm">
                            <li>
                                <a
                                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                    href="#"
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                    href="#"
                                >
                                    Explore
                                </a>
                            </li>

                            <li>
                                <a
                                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                    href="#"
                                >
                                    Products
                                </a>
                            </li>

                            <li>
                                <a
                                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                    href="#"
                                >
                                    About Us
                                </a>
                            </li>

                            <li>
                                <a
                                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                    href="#"
                                >
                                    Contact Us
                                </a>
                            </li>

                        </ul>
                    </nav>

                    <div className="flex items-center gap-4">
                        {
                            !isLoggedIn ?
                                <div className="sm:flex sm:gap-4">
                                    <a
                                        className="block rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:bg-secondary dark:hover:bg-secondary"
                                        href="/sign-in"
                                    >
                                        Login
                                    </a>

                                    <a
                                        className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary transition hover:text-primary/75 sm:block dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                                        href="/"
                                    >
                                        Register
                                    </a>
                                </div> :
                                <div
                                    className="flex items-center gap-5" ref={cartRef}>
                                    <div className="flex gap-1 cursor-pointer"
                                        onClick={() => setOpenCart(!openCart)}
                                    >
                                        <ShoppingCartIcon /> ({cart?.length})
                                    </div>

                                    <UserButton />
                                    {openCart && <Cart />}
                                </div>
                        }

                        <button
                            className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                        >
                            <span className="sr-only">Toggle menu</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
        }
        </div>
    );
};

export default Header;
