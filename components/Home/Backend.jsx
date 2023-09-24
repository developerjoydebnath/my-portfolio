'use client';
import { Icon } from '@/Icon/Icon';
import { useLoading } from '@/context/LoadingContext';
import Image from 'next/image';

const Backend = () => {
    const { theme } = useLoading();
    const frontend = [
        {
            topic: 'Node JS',
            img: '/img/node.png',
            desc: 'Expert at CSS 3. Already completed around 50 projects with Html 5.',
        },
        {
            topic: 'Express JS',
            img: '/img/ex1.png',
            img2: '/img/ex2.png',
            desc: 'Expert at React JS. Already completed around 40 projects in React JS.',
        },
        {
            topic: 'MongoDB',
            img: '/img/mongodb.png',
            desc: 'Intermediate at Next JS. Already completed around 20 projects in Next JS.',
        },
        {
            topic: 'Mongoose',
            img: '/img/mongodb.png',
            desc: 'Expert at Redux JS. Already used Redux JS more then 30 projects.',
        },
    ];

    const style =
        'absolute h-3 w-3 top-2.5 -left-[46px] transition-all duration-200 rounded-full border-2 border-[#232935] overflow-hidden bg-[#131313] -hover:border-[#fec544] -hover:bg-[#fec544] js__shadow_2';

    return (
        <div className="col-span-4 text-white group">
            <div className="flex items-center gap-5 mb-10">
                <span>
                    <Icon
                        icon="database"
                        className="h-10 w-10 group-hover:fill-[#fec544] transition duration-300 fill-[#a9adb8]"
                    />
                </span>
                <h1 className="text-4xl font-light transition duration-300 group-hover:text-[#fec544] cursor-default">
                    BACKEND
                </h1>
            </div>
            <div className="border-l-[0.5px] ms-5 border-[#232935]">
                {frontend.map((d, index) => (
                    <h4 key={index} className="ms-10 me-5 pb-10 relative cursor-pointer neon">
                        <span className="js__shadow hover text-xl text-[#a9adb8] font-bold flex items-center gap-3">
                            <Image
                                src={d.topic === 'Next JS' ? (theme === 'dark' ? d.img : d.img2) : d.img}
                                alt={d.topic}
                                className="h-7 w-7 js__shadow"
                                width={60}
                                height={60}
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

export default Backend;
