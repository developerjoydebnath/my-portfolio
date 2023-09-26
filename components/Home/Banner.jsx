'use client';

import { Icon } from '@/Icon/Icon';
// import Typewriter from 'typewriter-effect';
import Link from 'next/link';
import { ContainerLayout } from '../ContainerLayout/ContainerLayout';

const Banner = () => {
    return (
        <section className="js__home_container h-screen">
            <div className="h-full w-full flex justify-center items-center">
                <ContainerLayout>
                    <div className="text-center">
                        <h1 className="text-6xl font-semibold text-white mb-8 flex items-center justify-center gap-5">
                            Hi, I'm{' '}
                            <span className="dark:text-[#ffbf2a] text-green-500">
                                {/* <Typewriter
                                    options={{
                                        strings: ['Joy Debnath', 'A Frontend Web Developer'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                /> */}
                                Joy Debnath
                            </span>
                        </h1>
                        <h5 className="text-lg text-[#a9adb8] font-light leading-6 mt-2">
                            I am a frontend web developer. I can provide clean code and pixel perfect design.
                        </h5>
                        <h5 className="text-lg text-[#a9adb8] font-light leading-6 mt-2">
                            I also make website more & more interactive with web animations.
                        </h5>
                        <div className="flex items-center justify-center gap-5 mt-6">
                            <span>
                                <Link
                                    href="/"
                                    className="h-full w-full block p-2.5 rounded-full border-2 fill-[#a9adb8] hover:fill-white border-[#474a4e] hover:border-gray-400 group transition-all"
                                >
                                    <Icon icon="facebook" className="h-5 w-5" />
                                </Link>
                            </span>
                            <span>
                                <Link
                                    href="/"
                                    className="h-full w-full block p-2.5 rounded-full border-2 fill-[#a9adb8] hover:fill-white border-[#474a4e] hover:border-gray-400 group transition-all"
                                >
                                    <Icon icon="twitter" className="h-5 w-5" />
                                </Link>
                            </span>
                            <span>
                                <Link
                                    href="/"
                                    className="h-full w-full block p-2.5 rounded-full border-2 fill-[#a9adb8] hover:fill-white border-[#474a4e] hover:border-gray-400 group transition-all"
                                >
                                    <Icon icon="github" className="h-5 w-5" />
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
