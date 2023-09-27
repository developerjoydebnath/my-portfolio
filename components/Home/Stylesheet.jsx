'use client';
import { Icon } from '@/Icon/Icon';
import { useLoading } from '@/context/LoadingContext';
import Image from 'next/image';

const Stylesheet = () => {
    const { theme } = useLoading();
    const frontend = [
        {
            topic: 'CSS 3',
            img: '/img/css3.png',
            desc: 'Expert at CSS 3. Already completed around 50 projects with Html 5.',
        },
        {
            topic: 'SCSS',
            img: '/img/sass.png',
            desc: 'Expert at React JS. Already completed around 40 projects in React JS.',
        },
        {
            topic: 'Bootstrap 5',
            img: '/img/bootstrap.png',
            desc: 'Intermediate at Next JS. Already completed around 20 projects in Next JS.',
        },
        {
            topic: 'Tailwind CSS',
            img: '/img/tailwind.png',
            desc: 'Expert at Redux JS. Already used Redux JS more then 30 projects.',
        },
        {
            topic: 'Styled Component',
            img: '/img/styled.png',
            desc: 'Intermediate at Typescript. Already used Typescript more then 10 projects.',
        },
    ];

    return (
        <div className="col-span-4 text-white group">
            <div className="flex items-center gap-5 mb-10">
                <span>
                    <Icon
                        icon="css"
                        className="h-10 w-10 dark:group-hover:fill-[#ffbf2a] group-hover:fill-green-500 transition duration-300 dark:fill-[#a9adb8] fill-[#8f9299]"
                    />
                </span>
                <h1 className="text-4xl dark:text-[#e6e5e5] text-slate-600 transition duration-300 dark:group-hover:text-[#ffbf2a] group-hover:text-green-500 dark:font-normal font-medium cursor-default">
                    STYLESHEET
                </h1>
            </div>
            <div className="border-l-[0.5px] ms-5 border-[#ddd] dark:border-[#232935]">
                {frontend.map((d, index) => (
                    <h4 key={index} className="ms-10 me-5 pb-10 relative cursor-pointer neon">
                        <span
                            className={`${
                                theme === 'dark' ? 'js__shadow_dark' : 'js__shadow'
                            } hover text-xl text-slate-600 dark:text-[#a9adb8] font-bold flex items-center gap-3`}
                        >
                            <Image
                                src={d.img}
                                alt={d.topic}
                                className={`h-6 w-6 ${theme === 'dark' ? 'js__shadow_dark' : 'js__shadow'}`}
                                width={60}
                                height={60}
                            />
                            <span>{d.topic}</span>{' '}
                            <span
                                className={`absolute h-3 w-3 top-2.5 -left-[46px] transition-all duration-200 rounded-full border-2 border-[#ddd] dark:border-[#232935] overflow-hidden dark:bg-[#131313] bg-white ${
                                    theme === 'dark' ? 'js__shadow_2_dark' : 'js__shadow_2'
                                } `}
                            ></span>
                        </span>
                        <p className="ms-10 mt-2 text-slate-500 dark:text-[#a9adb8]">{d.desc}</p>
                    </h4>
                ))}
            </div>
        </div>
    );
};

export default Stylesheet;
