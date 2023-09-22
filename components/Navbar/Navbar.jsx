'use client';

import { useLoading } from '@/context/LoadingContext';
import Link from 'next/link';
import React from 'react';
import Loading from '../Loading/Loading';

const Navbar = () => {
    const [isSticky, setSticky] = React.useState(false);
    const [theme, setTheme] = React.useState('');
    const { loading, setLoading } = useLoading();

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 0) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };

    React.useEffect(() => {
        setTheme(localStorage.getItem('theme') || 'light');
        setLoading(false);
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
        } else if (theme === 'dark') {
            setTheme('light');
            localStorage.setItem('theme', 'light');
        }
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <nav
            className={`${theme} border sticky top-0 transition-all z-50 ${
                isSticky ? 'bg-gray-600/20' : 'bg-transparent'
            }`}
        >
            <div className="max-w-screen-xl mx-auto border">
                <div className="mx-5 flex justify-between items-center">
                    <div className="bg-red-400 dark:bg-green-400">Hello</div>
                    <div className="flex items-center gap-2 py-5">
                        <Link href="/">
                            <span className="text-lg font-semibold py-1 px-2">home</span>
                        </Link>
                        <Link href="/">
                            <span className="text-lg font-semibold py-1 px-2">About Me</span>
                        </Link>
                        <Link href="/">
                            <span className="text-lg font-semibold py-1 px-2">Skills</span>
                        </Link>
                        <Link href="/">
                            <span className="text-lg font-semibold py-1 px-2">Projects</span>
                        </Link>
                        <Link href="/">
                            <span className="text-lg font-semibold py-1 px-2">Contact Me</span>
                        </Link>
                        <span onClick={handleTheme} className="text-lg font-semibold py-1 px-2 cursor-pointer">
                            Dark/Light
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
