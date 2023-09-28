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
    const [isOpen, setIsOpen] = React.useState(false);

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
                    <div className="md:text-5xl text-4xl my-4 font-bold cursor-pointer ">
                        <span className="text-white">J</span>
                        <span className="dark:text-[#ffbf2a] text-green-500">O</span>
                        <span className="text-white">Y</span>
                    </div>
                </Link>

                <div className="md:flex items-center gap-4 py-5 hidden">
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
                            CONTACT ME
                        </span>
                    </Link>
                </div>
                <div className="flex items-center">
                    <button className="text-[15px] font-medium text-white  py-2 px-5 dark:bg-[#ffbf2a] bg-green-500 outline-none rounded-full hidden md:block me-3">
                        HIRE ME
                    </button>
                    <span onClick={handleTheme} className="text-base text-white md:px-2 md:me-0 me-2 cursor-pointer">
                        {theme === 'dark' ? (
                            <Icon icon="light" className="md:h-10 md:w-10 h-9 w-9 rounded-full p-1.5 fill-white" />
                        ) : (
                            <Icon icon="dark" className="md:h-10 md:w-10 h-9 w-9 rounded-full p-1.5 fill-white" />
                        )}
                    </span>
                    <span onClick={() => setIsOpen(!isOpen)}>
                        <Icon icon="menu" className="h-6 w-6 fill-white md:hidden" />
                    </span>
                </div>
                <div
                    className={`absolute  rounded-b-xl py-5 -z-10 w-full left-0 transition-all ${
                        isOpen ? 'top-full' : '-top-56'
                    } ${isSticky ? 'bg-black/80' : 'bg-transparent'}`}
                >
                    <div>
                        <div className="md:hidden flex flex-col items-center gap-3">
                            <Link onClick={() => setIsOpen(false)} href="#home">
                                <span
                                    className={`text-[15px] font-medium dark:hover:text-[#ffbf2a] hover:text-green-5te py-1 px-2 ${
                                        currentSection === 'home' ? 'text-green-500 dark:text-[#ffbf2a]' : 'text-white'
                                    }`}
                                >
                                    HOME
                                </span>
                            </Link>
                            <Link onClick={() => setIsOpen(false)} href="#about-me">
                                <span
                                    className={`text-[15px] font-medium dark:hover:text-[#ffbf2a] hover:text-green-500 ty-1 px-2 ${
                                        currentSection === 'about-me'
                                            ? 'text-green-500 dark:text-[#ffbf2a]'
                                            : 'text-white'
                                    }`}
                                >
                                    ABOUT ME
                                </span>
                            </Link>
                            <Link onClick={() => setIsOpen(false)} href="#skills">
                                <span
                                    className={`text-[15px] font-medium dark:hover:text-[#ffbf2a] hover:text-green-500 py-1 px-2 ${
                                        currentSection === 'skills'
                                            ? 'text-green-500 dark:text-[#ffbf2a]'
                                            : 'text-white'
                                    }`}
                                >
                                    SKILLS
                                </span>
                            </Link>
                            <Link onClick={() => setIsOpen(false)} href="#projects">
                                <span
                                    className={`text-[15px] font-medium dark:hover:text-[#ffbf2a] hover:text-green-500 ty-1 px-2 ${
                                        currentSection === 'projects'
                                            ? 'text-green-500 dark:text-[#ffbf2a]'
                                            : 'text-white'
                                    }`}
                                >
                                    PROJECTS
                                </span>
                            </Link>
                            <Link onClick={() => setIsOpen(false)} href="#contact-me">
                                <span
                                    className={`text-[15px] font-medium dark:hover:text-[#ffbf2a] hover:text-green-500 tex1 px-2 ${
                                        currentSection === 'contact-me'
                                            ? 'text-green-500 dark:text-[#ffbf2a]'
                                            : 'text-white'
                                    }`}
                                >
                                    CONTACT ME
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </ContainerLayout>
        </nav>
    );
};

export default Navbar;
