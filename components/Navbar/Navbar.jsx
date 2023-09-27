'use client';

import { Icon } from '@/Icon/Icon';
import { useLoading } from '@/context/LoadingContext';
import Link from 'next/link';
import React from 'react';
import { ContainerLayout } from '../ContainerLayout/ContainerLayout';

const Navbar = () => {
    const [isSticky, setSticky] = React.useState(false);
    const { loading, setLoading, theme, setTheme } = useLoading();
    const [currentSection, setCurrentSection] = React.useState(null);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 0) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };

    React.useEffect(() => {
        const handlingScroll = () => {
            const sections = document.querySelectorAll('section');
            let currentSection = null;

            sections.forEach((section) => {
                if (window.scrollY >= section.offsetTop - 200) {
                    currentSection = section.id;
                }
            });

            setCurrentSection(currentSection);
        };

        window.addEventListener('scroll', handlingScroll);

        return () => {
            window.removeEventListener('scroll', handlingScroll);
        };
    }, []);

    React.useEffect(() => {
        setTheme(localStorage.getItem('theme') || 'dark');
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
                isSticky ? 'bg-black/80' : 'bg-transparent'
            }`}
        >
            <ContainerLayout extraClasses="flex justify-between items-center">
                <Link href="#home">
                    <div className="text-5xl my-4 font-bold cursor-pointer ">
                        <span className="text-white">J</span>
                        <span className="dark:text-[#ffbf2a] text-green-500">O</span>
                        <span className="text-white">Y</span>
                    </div>
                </Link>

                <div className="flex items-center gap-4 py-5">
                    <Link href="#home">
                        <span
                            className={`text-[15px] font-medium dark:hover:text-[#ffbf2a] hover:text-green-5te py-1 px-2 ${
                                currentSection === 'home' ? 'text-green-500 dark:text-[#ffbf2a]' : 'text-white'
                            }`}
                        >
                            HOME
                        </span>
                    </Link>
                    <Link href="#about-me">
                        <span
                            className={`text-[15px] font-medium dark:hover:text-[#ffbf2a] hover:text-green-500 ty-1 px-2 ${
                                currentSection === 'about-me' ? 'text-green-500 dark:text-[#ffbf2a]' : 'text-white'
                            }`}
                        >
                            ABOUT ME
                        </span>
                    </Link>
                    <Link href="#skills">
                        <span
                            className={`text-[15px] font-medium dark:hover:text-[#ffbf2a] hover:text-green-500 py-1 px-2 ${
                                currentSection === 'skills' ? 'text-green-500 dark:text-[#ffbf2a]' : 'text-white'
                            }`}
                        >
                            SKILLS
                        </span>
                    </Link>
                    <Link href="#projects">
                        <span
                            className={`text-[15px] font-medium dark:hover:text-[#ffbf2a] hover:text-green-500 ty-1 px-2 ${
                                currentSection === 'projects' ? 'text-green-500 dark:text-[#ffbf2a]' : 'text-white'
                            }`}
                        >
                            PROJECTS
                        </span>
                    </Link>
                    <Link href="#contact-me">
                        <span
                            className={`text-[15px] font-medium dark:hover:text-[#ffbf2a] hover:text-green-500 tex1 px-2 ${
                                currentSection === 'contact-me' ? 'text-green-500 dark:text-[#ffbf2a]' : 'text-white'
                            }`}
                        >
                            CONTACT
                        </span>
                    </Link>
                </div>
                <div className="flex items-center gap-3">
                    <button className="text-[15px] font-medium text-white  py-2 px-5 dark:bg-[#ffbf2a] bg-green-500 outline-none rounded-full">
                        HIRE ME
                    </button>
                    <span onClick={handleTheme} className="text-base text-white px-2 cursor-pointer">
                        {theme === 'dark' ? (
                            <Icon icon="light" className="h-9 w-9 bg-[#ffbf2a] rounded-full p-1.5 fill-white" />
                        ) : (
                            <Icon icon="dark" className="h-9 w-9 bg-green-500  rounded-full p-1.5 fill-white" />
                        )}
                    </span>
                </div>
            </ContainerLayout>
        </nav>
    );
};

export default Navbar;
