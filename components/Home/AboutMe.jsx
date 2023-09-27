'use client';

import { useLoading } from '@/context/LoadingContext';
import Image from 'next/image';
import { ContainerLayout } from '../ContainerLayout/ContainerLayout';
import Heading from '../Heading/Heading';

const AboutMe = () => {
    const { theme } = useLoading();
    return (
        <section id="about-me" className={`${theme} `}>
            <div className="py-10">
                <Heading left="left-[30px]">ABOUT ME</Heading>
                <ContainerLayout>
                    <div className="grid grid-cols-12 mt-10 gap-5">
                        <div className="md:col-span-6 col-span-12 flex justify-center items-center">
                            <div className="md:h-[500px] md:w-[400px] sm:h-[400px] sm:w-[310px] h-[350px] w-[280px] overflow-hidden dark:bg-[#ffbf2a] bg-green-500 rounded-full js__animation">
                                <Image
                                    src="/img/myself.png"
                                    className="h-full w-full"
                                    width={300}
                                    height={300}
                                    alt="img"
                                />
                            </div>
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
                                    I am a Visual Designer with a strong focus on digital branding. Visul design seeks
                                    to attract, inspire, create desires and otivate people to respond to messages, with
                                    a view to making a favorable impact.
                                </p>
                                <div className="md:block flex justify-center">
                                    <table className="">
                                        <tbody className="dark:text-[#a9adb8] text-slate-500">
                                            <tr>
                                                <td className="pb-4">Birthday</td>
                                                <td className="pb-4 ps-5">: May 07, 1990</td>
                                            </tr>
                                            <tr>
                                                <td className="pb-4">Phone</td>
                                                <td className="pb-4 ps-5">: +1 876-369-9009</td>
                                            </tr>
                                            <tr>
                                                <td className="pb-4">Email</td>
                                                <td className="pb-4 ps-5">: devis@example.com</td>
                                            </tr>
                                            <tr>
                                                <td className="pb-4">From</td>
                                                <td className="pb-4 ps-5">: 2661 Hich meadow</td>
                                            </tr>
                                            <tr>
                                                <td className="pb-4">Language</td>
                                                <td className="pb-4 ps-5">: English, Germanic</td>
                                            </tr>
                                            <tr>
                                                <td className="pb-4">Freelance</td>
                                                <td className="pb-4 ps-5">: Available</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="md:text-start text-center">
                                    <button className="dark:bg-[#ffbf2a] bg-green-500 text-white mt-2 px-8 py-3 transition duration-200 font-medium rounded-full hover:-translate-y-0.5">
                                        Download CV
                                    </button>
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
