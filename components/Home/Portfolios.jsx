import Image from 'next/image';
import React from 'react';
import { ContainerLayout } from '../ContainerLayout/ContainerLayout';
import Heading from '../Heading/Heading';
import Modal from './Modal';

const Portfolios = () => {
    let [isOpen, setIsOpen] = React.useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    const projects = [
        {
            title: 'Quiz Bee',
            img: '/img/quiz-bee.jpg',
        },
        {
            title: 'Drag & Drop Table',
            img: '/img/dnd.jpg',
        },
        {
            title: 'Insta Store',
            img: '/img/ecom.jpg',
        },
        {
            title: 'Quiz Bee',
            img: '/img/quiz-bee.jpg',
        },
        {
            title: 'Quiz Bee',
            img: '/img/quiz-bee.jpg',
        },
        {
            title: 'Quiz Bee',
            img: '/img/quiz-bee.jpg',
        },
    ];
    return (
        <section>
            <div className="py-10">
                <Heading left="left-12">MY PORTFOLIOS</Heading>
                <ContainerLayout>
                    <div>
                        <div className="grid grid-cols-12 gap-10 mt-10">
                            {projects.map((d, index) => (
                                <div
                                    key={index}
                                    className="col-span-4 rounded-lg overflow-hidden group shadow-xl border dark:border-black"
                                >
                                    <div className="h-[250px] w-full relative">
                                        <Image
                                            className="h-full w-full group-hover:scale-110 transition duration-500 ease-in-out"
                                            src={d.img}
                                            alt={d.title}
                                            height={300}
                                            width={500}
                                        />
                                        <div className="h-full w-full transition duration-200 delay-0 opacity-0 invisible group-hover:visible group-hover:opacity-100 absolute top-0 left-0">
                                            <div className="flex justify-center items-center h-full w-full bg-[#0000008e] ">
                                                <span className="text-center">
                                                    <h1 className="text-3xl font-semibold text-white cursor-default">
                                                        {d.title}
                                                    </h1>
                                                    <button
                                                        onClick={() => setIsOpen(true)}
                                                        className="px-3 py-1 mt-3 rounded text-base font-semibold bg-[#fec544]"
                                                    >
                                                        Details
                                                    </button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </ContainerLayout>
            </div>
            {isOpen && <Modal isOpen={isOpen} closeModal={closeModal} />}
        </section>
    );
};

export default Portfolios;
