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
            desc: 'Expert at Html 5. Already completed around 50 projects with Html 5.',
        },
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
            topic: 'Typescript',
            img: '/img/typescript.png',
            desc: 'Intermediate at Typescript. Already used Typescript more then 10 projects.',
        },
    ];

    const style =
        'absolute h-3 w-3 top-2.5 -left-[46px] transition-all duration-200 rounded-full border-2 border-[#232935] overflow-hidden bg-[#131313] -hover:border-[#fec544] -hover:bg-[#fec544] js__shadow_2';

    return (
        <div className="col-span-4 text-white group">
            <div className="flex items-center gap-5 mb-10">
                <span>
                    <Icon
                        icon="html"
                        className="h-10 w-10 group-hover:fill-[#fec544] transition duration-300 fill-[#a9adb8]"
                    />
                </span>
                <h1 className="text-4xl font-light transition duration-300 group-hover:text-[#fec544] cursor-default">
                    FRONTEND
                </h1>
            </div>
            <div className="border-l-[0.5px] ms-5 border-[#232935]">
                {frontend.map((d, index) => (
                    <h4 key={index} className="ms-10 me-5 pb-10 relative cursor-pointer neon">
                        <span className="js__shadow hover text-xl text-[#a9adb8] font-bold flex items-center gap-3">
                            <Image
                                src={d.topic === 'Next JS' ? (theme === 'dark' ? d.img : d.img2) : d.img}
                                alt={d.topic}
                                className="h-6 w-6 js__shadow"
                                width={30}
                                height={30}
                            />
                            <span>{d.topic}</span> <span className={style}></span>
                        </span>
                        <p className="ms-10 mt-2 text-[#a9adb8]">{d.desc}</p>
                    </h4>
                ))}
            </div>
        </div>
    );
};

export default Frontend;
