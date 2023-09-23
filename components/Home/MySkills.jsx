'use client';
import { Icon } from '@/Icon/Icon';
import { useLoading } from '@/context/LoadingContext';
import Image from 'next/image';
import { ContainerLayout } from '../ContainerLayout/ContainerLayout';
import Heading from '../Heading/Heading';

const MySkills = () => {
    const { theme } = useLoading();
    const style =
        'absolute h-3 w-3 top-2.5 -left-[46px] transition-all duration-200 rounded-full border border-[#5a5a5a] overflow-hidden bg-[#131313] -hover:border-[#fec544] -hover:bg-[#fec544] js__shadow_2';

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
    return (
        <section>
            <div>
                <Heading left="left-[31px]">MY SKILLS</Heading>
                <ContainerLayout>
                    <div className="grid grid-cols-12 w-full mt-10">
                        <div className="col-span-4 text-white group">
                            <div className="flex items-center gap-5 mb-10">
                                <span>
                                    <Icon
                                        icon="html"
                                        className="h-10 w-10 group-hover:fill-[#fec544] transition duration-300 fill-[#a9adb8]"
                                    />
                                </span>
                                <h1 className="text-4xl font-medium transition duration-300 group-hover:text-[#fec544]">
                                    FRONTEND
                                </h1>
                            </div>
                            <div className="border-l-[0.5px] ms-5 border-[#5a5a5c]">
                                {frontend.map((d, index) => (
                                    <h4 key={index} className="ms-10 me-5 pb-10 relative cursor-pointer neon">
                                        <span className="js__shadow hover text-xl text-[#a9adb8] font-bold flex items-center gap-3">
                                            <Image
                                                src={
                                                    d.topic === 'Next JS' ? (theme === 'dark' ? d.img : d.img2) : d.img
                                                }
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

                        <div className="col-span-4 text-white">
                            <div className="flex items-center gap-5 mb-10">
                                <span>
                                    <Icon icon="css" className="h-10 w-10 fill-[#a9adb8]" />
                                </span>
                                <h1 className="text-4xl font-medium">STYLESHEET</h1>
                            </div>
                            <div className="border-l-[0.5px] ms-5 border-[#5a5a5c]">
                                {frontend.map((d, index) => (
                                    <h4 key={index} className="ms-10 me-5 pb-10 relative cursor-pointer neon">
                                        <span className="js__shadow hover text-xl text-[#a9adb8] font-bold flex items-center gap-3">
                                            <Image
                                                src={
                                                    d.topic === 'Next JS' ? (theme === 'dark' ? d.img : d.img2) : d.img
                                                }
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
                                <h4 className="ms-10 my-5 relative cursor-pointer">
                                    <span className=" js__shadow text-xl text-[#a9adb8] hover:text-[#ffffff] font-bold flex items-center gap-3">
                                        <Image
                                            src="/img/css3.png"
                                            alt=""
                                            className="h-7 w-7 js__shadow"
                                            width={60}
                                            height={60}
                                        />
                                        <span>CSS 3</span> <span className={style}></span>
                                    </span>
                                </h4>
                                <h4 className="ms-10 my-5 relative cursor-pointer">
                                    <span className=" js__shadow text-xl text-[#a9adb8] hover:text-[#ffffff] font-bold flex items-center gap-3">
                                        <Image
                                            src="/img/sass.png"
                                            alt=""
                                            className="h-7 w-7 js__shadow"
                                            width={60}
                                            height={60}
                                        />
                                        <span>SCSS</span> <span className={style}></span>
                                    </span>
                                </h4>
                                <h4 className="ms-10 my-5 relative cursor-pointer">
                                    <span className=" js__shadow text-xl text-[#a9adb8] hover:text-[#ffffff] font-bold flex items-center gap-3">
                                        <Image
                                            src="/img/bootstrap.png"
                                            alt=""
                                            className="h-7 w-7 js__shadow"
                                            width={60}
                                            height={60}
                                        />
                                        <span>Bootstrap 5</span> <span className={style}></span>
                                    </span>
                                </h4>
                                <h4 className="ms-10 my-5 relative cursor-pointer">
                                    <span className=" js__shadow text-xl text-[#a9adb8] hover:text-[#ffffff] font-bold flex items-center gap-3">
                                        <Image
                                            src="/img/tailwind.png"
                                            alt=""
                                            className="h-7 w-7 js__shadow"
                                            width={60}
                                            height={60}
                                        />
                                        <span>Tailwind CSS</span> <span className={style}></span>
                                    </span>
                                </h4>
                                <h4 className="ms-10 my-5 relative cursor-pointer">
                                    <span className=" js__shadow text-xl text-[#a9adb8] hover:text-[#ffffff] font-bold flex items-center gap-3">
                                        <Image
                                            src="/img/typescript.png"
                                            alt=""
                                            className="h-7 w-7 js__shadow"
                                            width={60}
                                            height={60}
                                        />
                                        <span>Styled Component</span> <span className={style}></span>
                                    </span>
                                </h4>
                            </div>
                        </div>
                        <div className="col-span-4 text-white">
                            <div className="flex items-center gap-5 mb-10">
                                <span>
                                    <Icon icon="database" className="h-10 w-10 fill-[#a9adb8]" />
                                </span>
                                <h1 className="text-4xl font-medium">BACKEND</h1>
                            </div>
                            <div className="border-l-[0.5px] ms-5 border-[#5a5a5c]">
                                {frontend.map((d, index) => (
                                    <h4 key={index} className="ms-10 me-5 pb-10 relative cursor-pointer neon">
                                        <span className="js__shadow hover text-xl text-[#a9adb8] font-bold flex items-center gap-3">
                                            <Image
                                                src={
                                                    d.topic === 'Next JS' ? (theme === 'dark' ? d.img : d.img2) : d.img
                                                }
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
                                <h4 className="ms-10 my-5 relative cursor-pointer">
                                    <span className=" js__shadow text-xl text-[#a9adb8] hover:text-[#ffffff] font-bold flex items-center gap-3">
                                        <Image
                                            src="/img/node.png"
                                            alt=""
                                            className="h-7 w-7 js__shadow"
                                            width={60}
                                            height={60}
                                        />
                                        <span>Node JS</span> <span className={style}></span>
                                    </span>
                                </h4>
                                <h4 className="ms-10 my-5 relative cursor-pointer">
                                    <span className=" js__shadow text-xl text-[#a9adb8] hover:text-[#ffffff] font-bold flex items-center gap-3">
                                        <Image
                                            src={theme === 'dark' ? '/img/ex1.png' : '/img/ex2.png'}
                                            alt=""
                                            className="h-7 w-7 js__shadow"
                                            width={60}
                                            height={60}
                                        />
                                        <span>Express JS</span> <span className={style}></span>
                                    </span>
                                </h4>
                                <h4 className="ms-10 my-5 relative cursor-pointer">
                                    <span className=" js__shadow text-xl text-[#a9adb8] hover:text-[#ffffff] font-bold flex items-center gap-3">
                                        <Image
                                            src="/img/mongodb.png"
                                            alt=""
                                            className="h-7 w-7 js__shadow"
                                            width={60}
                                            height={60}
                                        />
                                        <span>MongoDB</span> <span className={style}></span>
                                    </span>
                                </h4>
                                <h4 className="ms-10 my-5 relative cursor-pointer">
                                    <span className=" js__shadow text-xl text-[#a9adb8] hover:text-[#ffffff] font-bold flex items-center gap-3">
                                        <Image
                                            src="/img/mongodb.png"
                                            alt=""
                                            className="h-7 w-7 js__shadow"
                                            width={60}
                                            height={60}
                                        />
                                        <span>Mongoose</span> <span className={style}></span>
                                    </span>
                                </h4>
                            </div>
                        </div>
                    </div>
                </ContainerLayout>
            </div>
        </section>
    );
};

export default MySkills;
