'use client';

import { useLoading } from '@/context/LoadingContext';
import Image from 'next/image';
import { ContainerLayout } from '../ContainerLayout/ContainerLayout';
import Heading from '../Heading/Heading';

const AboutMe = () => {
    const { theme } = useLoading();
    console.log(theme);
    return (
        <section className={`${theme} `}>
            <div className="py-10">
                <Heading left="left-8">ABOUT ME</Heading>
                <ContainerLayout>
                    <div className="grid grid-cols-12 mt-10">
                        <div className="col-span-6 flex justify-center items-center">
                            <div className="h-[500px] w-[400px] overflow-hidden dark:bg-[#ffbf2a] bg-green-500 rounded-full js__animation">
                                <Image
                                    src="/img/myself.png"
                                    className="h-full w-full"
                                    width={300}
                                    height={300}
                                    alt="img"
                                />
                            </div>
                        </div>
                        <div className="col-span-6">
                            <div>
                                <h1 className="text-4xl dark:font-normal font-semibold dark:text-white text-slate-600 mb-5">
                                    Hi There! I'm Joy Debnath
                                </h1>
                                <h3 className="text-2xl dark:font-light mb-6 dark:text-[#ffbf2a] text-green-500 font-semibold">
                                    A frontend web developer
                                </h3>
                                <p className="leading-6 dark:text-[#a9adb8] text-slate-500 mb-6">
                                    I am a Visual Designer with a strong focus on digital branding. Visul design seeks
                                    to attract, inspire, create desires and otivate people to respond to messages, with
                                    a view to making a favorable impact.
                                </p>
                                <table>
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
                                            <td className="pb-4 ps-5">: 2661 Hich meadow lane bear creek</td>
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
                                <button className="dark:bg-[#ffbf2a] bg-green-500 text-white mt-2 px-8 py-3 font-medium rounded-full hover:-translate-y-0.5">
                                    Download CV
                                </button>
                            </div>
                        </div>
                    </div>
                </ContainerLayout>
            </div>
        </section>
    );
};

export default AboutMe;
