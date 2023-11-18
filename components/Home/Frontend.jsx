'use client';

import { Icon } from '@/Icon/Icon';
import { useLoading } from '@/context/LoadingContext';
import Image from 'next/image';

const Frontend = () => {
    const { theme } = useLoading();
    const frontend = [
        {
            topic: 'Html 5',
            img: '/img/html.png',
            desc: 'Expert in Html 5. Already completed around 50 projects with Html 5.',
        },
        {
            topic: 'React JS',
            img: '/img/react.png',
            desc: 'Expert in React JS. Already completed around 30 projects in React JS.',
        },
        {
            topic: 'Next JS',
            img: '/img/nextjs.png',
            img2: '/img/nextjs2.png',
            desc: 'Intermediate in Next JS. Already completed around 10 projects in Next JS.',
        },
        {
            topic: 'Redux JS',
            img: '/img/redux.png',
            desc: 'Expert at Redux JS. Already used Redux JS more then 30 projects.',
        },
        {
            topic: 'Typescript',
            img: '/img/typescript.png',
            desc: 'Beginner to intermediate at Typescript. Already used Typescript more then 5 projects.',
        },
    ];

    return (
        <div className="md:col-span-4 col-span-12 text-white group md:mb-0 mb-10">
            <div className="flex items-center gap-5 sm:mb-10 mb-5">
                <span>
                    <Icon
                        icon="html"
                        className="lg:h-10 lg:w-10 sm:h-8 sm:w-8 h-6 w-6 dark:group-hover:fill-[#ffbf2a] group-hover:fill-green-500 transition duration-300 dark:fill-[#a9adb8] fill-[#8f9299]"
                    />
                </span>
                <h1 className="lg:text-4xl sm:text-3xl text-2xl dark:text-[#e6e5e5] text-slate-600 transition duration-300 dark:group-hover:text-[#ffbf2a] group-hover:text-green-500 dark:font-normal font-medium cursor-default">
                    FRONTEND
                </h1>
            </div>
            <div className="border-l-[0.5px] sm:ms-5 ms-3 border-[#ddd] dark:border-[#232935]">
                {frontend.map((d, index) => (
                    <h4 key={index} className="sm:ms-10 ms-7 me-5 md:pb-10 sm:pb-5 pb-4 relative cursor-pointer neon">
                        <span
                            className={`${
                                theme === 'dark' ? 'js__shadow_dark' : 'js__shadow'
                            } sm:text-xl text-lg text-slate-600 dark:text-[#c3c6ce] font-bold flex items-center gap-3`}
                        >
                            <Image
                                src={d.topic === 'Next JS' ? (theme === 'dark' ? d.img : d.img2) : d.img}
                                alt={d.topic}
                                className={`sm:h-6 sm:w-6 h-5 w-5 ${
                                    theme === 'dark' ? 'js__shadow_dark' : 'js__shadow'
                                }`}
                                width={60}
                                height={60}
                            />
                            <span>{d.topic}</span>
                            <span
                                className={`absolute sm:h-3 sm:w-3 h-2.5 w-2.5 top-2.5 sm:-left-[46px] -left-[33.5px] transition-all duration-200 rounded-full border-2 border-[#ddd] dark:border-[#232935] overflow-hidden dark:bg-[#131313] bg-white ${
                                    theme === 'dark' ? 'js__shadow_2_dark' : 'js__shadow_2'
                                } `}
                            ></span>
                        </span>
                        <p className="md:ms-10 ms-9 sm:mt-2 mt-1 text-slate-500 sm:text-base text-sm dark:text-[#a9adb8]">
                            {d.desc}
                        </p>
                    </h4>
                ))}
            </div>
        </div>
    );
};

export default Frontend;
