'use client';

import { useLoading } from '@/context/LoadingContext';
import Image from 'next/image';
import Link from 'next/link';
import { ContainerLayout } from '../ContainerLayout/ContainerLayout';
import Heading from '../Heading/Heading';

const AboutMe = () => {
    const { theme } = useLoading();
    const width = window.innerWidth;
    console.log(width);
    return (
        <section id="about-me" className={`${theme} `}>
            <div className="py-10">
                <Heading left="left-[30px]">ABOUT ME</Heading>
                <ContainerLayout>
                    <div className="grid grid-cols-12 mt-10 gap-5">
                        <div className="md:col-span-6 col-span-12 flex justify-center items-center">
                            <div className="md:h-[500px] md:w-[400px] sm:h-[400px] sm:w-[310px] h-[350px] w-[280px] overflow-hidden dark:bg-[#ffbf2a] bg-green-500 rounded-full js__animation">
                                <Image
                                    src="/img/profile2.png"
                                    className="h-full w-full"
                                    width={1000}
                                    height={1000}
                                    alt="img"
                                />
                            </div>
                            {/* <div className="md:h-[500px] md:w-[400px] sm:h-[400px] sm:w-[310px] h-[350px] w-[280px] overflow-hidden dark:bg-[#ffbf2a] bg-green-500 rounded-full js__animation">
                                <Image
                                    src="/img/profile.png"
                                    className="h-full w-full"
                                    width={300}
                                    height={300}
                                    alt="img"
                                />
                            </div> */}
                        </div>
                        <div className="md:col-span-6 col-span-12">
                            <div className="md:mx-0">
                                <h1 className="sm:text-4xl text-3xl dark:font-normal md:text-start text-center font-semibold dark:text-white text-slate-600 mb-5">
                                    Hi There! <br className="sm:hidden" /> I'm Joy Debnath
                                </h1>
                                <h3 className="text-2xl dark:font-light mb-6 dark:text-[#ffbf2a] md:text-start text-center text-green-500 font-semibold">
                                    A frontend web developer
                                </h3>
                                <p className="leading-6 dark:text-[#a9adb8] text-slate-500 mb-6 md:text-start text-center">
                                    I'm a Professional Frontend Web Developer with best experience over 2 years in{' '}
                                    <span className=" font-medium">
                                        React JS, Next JS, Redux, RTK Query, Redux Toolkit, HTML5, CSS3, Javascript,
                                        Typescript, JQuery, Tailwind CSS, Bootstrap CSS .
                                    </span>{' '}
                                    I build best quality, user friendly and responsive custom websites.
                                </p>
                                <div className="md:block flex justify-center">
                                    <table className="">
                                        <tbody className="dark:text-[#a9adb8] text-slate-500">
                                            <tr>
                                                <td className="pb-4 sm:text-base text-sm flex justify-between">
                                                    <span>Birthday</span> <span>:</span>
                                                </td>
                                                <td className="pb-4 ps-1 text-sm sm:text-base">November 04, 2000</td>
                                            </tr>
                                            <tr>
                                                <td className="pb-4 sm:text-base text-sm flex justify-between">
                                                    <span>Phone</span> <span>:</span>
                                                </td>
                                                <td className="pb-4 ps-1 text-sm sm:text-base cursor-pointer dark:hover:text-[#e4e5e7] hover:text-black">
                                                    <Link href="tel:+8801740036543"> +880 1740036543</Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="pb-4 sm:text-base text-sm flex justify-between">
                                                    <span>Email</span> <span>:</span>
                                                </td>
                                                <td
                                                    onClick={() =>
                                                        window.open(
                                                            'mailto:support@example.com?subject=SendMail&body=Description',
                                                        )
                                                    }
                                                    className="pb-4 ps-1 text-sm sm:text-base cursor-pointer dark:hover:text-[#e4e5e7] hover:text-black"
                                                >
                                                    developerjoydebnath@gmail.com
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="pb-4 sm:text-base text-sm flex justify-between">
                                                    <span>Linkedin</span> <span>:</span>
                                                </td>
                                                <td className="pb-4 ps-1 text-sm sm:text-base cursor-pointer dark:hover:text-[#e4e5e7] hover:text-black">
                                                    <Link
                                                        target="_blank"
                                                        href="https://www.linkedin.com/in/joy-debnath-js/"
                                                    >
                                                        {' '}
                                                        https://www.linkedin.com
                                                        <br className={`${width < 350 ? 'block' : 'hidden'}`} />
                                                        /in/joy-debnath-js/
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="pb-4 sm:text-base text-sm flex justify-between">
                                                    <span>Github</span> <span>:</span>
                                                </td>
                                                <td className="pb-4 ps-1 text-sm sm:text-base cursor-pointer dark:hover:text-[#e4e5e7] hover:text-black">
                                                    <Link target="_blank" href="https://github.com/developerjoydebnath">
                                                        {' '}
                                                        https://github.com/
                                                        <br className={`${width < 350 ? 'block' : 'hidden'}`} />
                                                        developerjoydebnath
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="pb-4 sm:text-base text-sm flex justify-between">
                                                    <span>Language</span> <span>:</span>
                                                </td>
                                                <td className="pb-4 ps-1 text-sm sm:text-base">
                                                    Bangla, English, Hindi
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="pb-4 sm:text-base text-sm flex justify-between gap-2 msm:gap-5">
                                                    <span>Freelance</span> <span>:</span>
                                                </td>
                                                <td className="pb-4 ps-1 text-sm sm:text-base">Available</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="md:text-start text-center mt-3">
                                    <Link
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="cv-joy.pdf"
                                        download
                                        className="dark:bg-[#ffbf2a] bg-green-500 text-white px-8 py-3 transition duration-200 font-medium rounded-full hover:-translate-y-0.5 sm:text-base text-sm"
                                    >
                                        Download CV
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </ContainerLayout>
            </div>
        </section>
    );
};

export default AboutMe;
