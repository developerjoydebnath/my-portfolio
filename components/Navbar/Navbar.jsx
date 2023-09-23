'use client';

import { Icon } from '@/Icon/Icon';
import { useLoading } from '@/context/LoadingContext';
import Link from 'next/link';
import React from 'react';
import { ContainerLayout } from '../ContainerLayout/ContainerLayout';

const Navbar = () => {
    const [isSticky, setSticky] = React.useState(false);
    // const [theme, setTheme] = React.useState('');
    const { loading, setLoading, theme, setTheme } = useLoading();

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
        return null;
    }

    return (
        <nav
            className={`${theme} fixed top-0 left-0 right-0 transition-all duration-500 z-40 ${
                isSticky ? 'bg-black/50' : 'bg-transparent'
            }`}
        >
            <ContainerLayout extraClasses="flex justify-between items-center">
                <div className="text-5xl py-4 font-bold">
                    <span className="text-white">J</span>
                    <span className="text-[#fec544]">O</span>
                    <span className="text-white">Y</span>
                </div>
                <div className="flex items-center gap-4 py-5">
                    <Link href="/">
                        <span className="text-[15px] font-medium hover:text-[#fec544] text-white py-1 px-2">HOME</span>
                    </Link>
                    <Link href="/">
                        <span className="text-[15px] font-medium hover:text-[#fec544] text-white py-1 px-2">
                            ABOUT ME
                        </span>
                    </Link>
                    <Link href="/">
                        <span className="text-[15px] font-medium hover:text-[#fec544] text-white py-1 px-2">
                            SKILLS
                        </span>
                    </Link>
                    <Link href="/">
                        <span className="text-[15px] font-medium hover:text-[#fec544] text-white py-1 px-2">
                            PROJECTS
                        </span>
                    </Link>
                    <Link href="/">
                        <span className="text-[15px] font-medium hover:text-[#fec544] text-white py-1 px-2">
                            CONTACT
                        </span>
                    </Link>
                </div>
                <div className="flex items-center gap-3">
                    <button className="text-[15px] font-medium text-white py-2 px-5 bg-[#fec544] dark:bg-red-500 outline-none rounded-full">
                        HIRE ME
                    </button>
                    <span onClick={handleTheme} className="text-base text-white px-2 cursor-pointer">
                        {theme === 'dark' ? (
                            <Icon icon="light" className="h-7 w-7 fill-[#fec544]" />
                        ) : (
                            <Icon icon="dark" className="h-7 w-7 fill-[#fec544]" />
                        )}
                    </span>
                </div>
            </ContainerLayout>
        </nav>
    );
};

export default Navbar;
