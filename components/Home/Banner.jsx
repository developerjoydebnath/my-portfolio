'use client';

import { Icon } from '@/Icon/Icon';
import Link from 'next/link';
import { ContainerLayout } from '../ContainerLayout/ContainerLayout';

const Banner = () => {
    return (
        <section id="home" className="js__home_container h-screen">
            <div className="h-full w-full flex justify-center items-center">
                <ContainerLayout>
                    <div className="text-center">
                        <h1 className="lg:text-6xl md:text-5xl text-4xl font-semibold text-white mb-8 xms:flex block items-center justify-center gap-3 md:gap-5">
                            Hi, I'm{' '}
                            <span className="dark:text-[#ffbf2a] text-green-500 xsm:inline-block block">
                                Joy Debnath
                            </span>
                        </h1>
                        <div className="md:block hidden">
                            <p className="md:text-lg text-[#a9adb8] font-light leading-6 mt-2">
                                I am a frontend web developer. I can provide clean code and pixel perfect design.
                            </p>
                            <p className="md:text-lg text-[#a9adb8] font-light leading-6 mt-2">
                                I also make website more & more interactive with web animations.
                            </p>
                        </div>
                        <div className="md:hidden block">
                            <p className="md:text-lg text-[#a9adb8] font-light leading-6 mt-2">
                                I am a frontend web developer. I can provide clean code and pixel perfect design. I also
                                make website more & more interactive with web animations.
                            </p>
                        </div>
                        <div className="flex items-center justify-center gap-5 mt-6">
                            <span>
                                <Link
                                    href="/"
                                    className="h-full w-full block p-2.5 rounded-full border-2 fill-[#a9adb8] hover:fill-white border-[#474a4e] hover:border-gray-400 group transition-all"
                                >
                                    <Icon icon="facebook" className="md:h-5 md:w-5 h-4 w-4" />
                                </Link>
                            </span>
                            <span>
                                <Link
                                    href="/"
                                    className="h-full w-full block p-2.5 rounded-full border-2 fill-[#a9adb8] hover:fill-white border-[#474a4e] hover:border-gray-400 group transition-all"
                                >
                                    <Icon icon="twitter" className="md:h-5 md:w-5 h-4 w-4" />
                                </Link>
                            </span>
                            <span>
                                <Link
                                    href="/"
                                    className="h-full w-full block p-2.5 rounded-full border-2 fill-[#a9adb8] hover:fill-white border-[#474a4e] hover:border-gray-400 group transition-all"
                                >
                                    <Icon icon="github" className="md:h-5 md:w-5 h-4 w-4" />
                                </Link>
                            </span>
                        </div>
                    </div>
                </ContainerLayout>
            </div>
        </section>
    );
};

export default Banner;
