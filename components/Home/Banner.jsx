'use client';

import Image from 'next/image';
import { ContainerLayout } from '../ContainerLayout/ContainerLayout';

const Banner = () => {
    const bestSkills = [
        {
            topic: 'React JS',
            img: '/img/react.png',
            desc: 'Expert at React JS. Already completed around 40 projects in React JS.',
        },
        {
            topic: 'Next JS',
            img: '/img/nextjs.png',
            img2: '/img/nextjs2.png',
            desc: 'Intermediate at Next JS. Already completed around 20 projects in Next JS.',
        },
        {
            topic: 'Redux JS',
            img: '/img/redux.png',
            desc: 'Expert at Redux JS. Already used Redux JS more then 30 projects.',
        },
        {
            topic: 'Tailwind CSS',
            img: '/img/tailwind.png',
            desc: 'Expert at Redux JS. Already used Redux JS more then 30 projects.',
        },
        {
            topic: 'SCSS',
            img: '/img/sass.png',
            desc: 'Expert at React JS. Already completed around 40 projects in React JS.',
        },
    ];
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
                            <p className="md:text-lg text-[#a9adb8] font-light leading-6 mt-1">
                                I am a frontend web developer. I can provide clean code and pixel perfect design.
                            </p>
                            <p className="md:text-lg text-[#a9adb8] font-light leading-6 mt-1">
                                I also make website more & more interactive with web animations.
                            </p>
                        </div>
                        <div className="md:hidden block">
                            <p className="md:text-lg text-[#a9adb8] font-light leading-6 mt-2">
                                I am a frontend web developer. I can provide clean code and pixel perfect design. I also
                                make website more & more interactive with web animations.
                            </p>
                        </div>
                        <div className="mt-5">
                            <h4 className="text-[#a9adb8] mb-3 font-medium">Best Skills :</h4>
                            <div className="flex justify-center items-center md:gap-7 gap-5">
                                {bestSkills.map((s, i) => (
                                    <span key={i}>
                                        <Image
                                            src={s.img}
                                            className="md:h-10 md:w-10 h-8 w-8"
                                            alt="img"
                                            height={40}
                                            width={40}
                                        />
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </ContainerLayout>
            </div>
        </section>
    );
};

export default Banner;
