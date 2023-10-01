import Image from 'next/image';
import React from 'react';
import { ContainerLayout } from '../ContainerLayout/ContainerLayout';
import Heading from '../Heading/Heading';
import Modal from './Modal';

const Projects = () => {
    let [isOpen, setIsOpen] = React.useState(false);
    const [selectedProject, setSelectedProject] = React.useState('');

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
            title: 'Book Store',
            img: '/img/book-store.jpg',
        },
        {
            title: 'Job Finder',
            img: '/img/job-finder.jpg',
        },
        {
            title: 'Task Manager',
            img: '/img/task-manager.jpg',
        },
    ];
    return (
        <section id="projects">
            <div className="py-10">
                <Heading left="left-[39px]">MY PROJECTS</Heading>
                <ContainerLayout>
                    <div>
                        <div className="grid grid-cols-12 md:gap-10 gap-y-5 mt-10">
                            {projects.map((d, index) => (
                                <div key={index} className="lg:col-span-4 msm:col-span-6 col-span-12 rounded-lg">
                                    <div className="rounded-lg overflow-hidden group shadow-xl border dark:border-black lg:w-full md:w-[350px] msm:w-[300px] sm:w-[420px] w-[300px] mx-auto md:h-[250px] msm:h-[180px] sm:h-[200px] h-[180px]">
                                        <div className="h-full w-full relative">
                                            <Image
                                                className="h-full w-full group-hover:scale-110 transition duration-500 ease-in-out"
                                                src={d.img}
                                                alt={d.title}
                                                height={300}
                                                width={500}
                                            />
                                            <div className="md:block hidden h-full w-full transition duration-200 delay-0 opacity-0 invisible group-hover:visible group-hover:opacity-100 absolute top-0 left-0">
                                                <div className="flex justify-center items-center h-full w-full bg-[#0000008e] ">
                                                    <span className="text-center">
                                                        <h1 className="text-3xl font-semibold text-white cursor-default">
                                                            {d.title}
                                                        </h1>
                                                        <button
                                                            onClick={() => {
                                                                setSelectedProject(d.title);
                                                                setIsOpen(true);
                                                            }}
                                                            className="px-3 py-1 mt-3 rounded text-base font-semibold bg-green-500 text-white dark:bg-[#ffbf2a]"
                                                        >
                                                            Details
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-2  msm:w-[300px] sm:w-[420px] w-[320px] mx-auto text-center">
                                        <h1 className="md:hidden sm:text-xl text-lg font-semibold text-slate-600 dark:text-white cursor-default">
                                            {d.title}
                                        </h1>
                                        <button
                                            onClick={() => {
                                                setSelectedProject(d.title);
                                                setIsOpen(true);
                                            }}
                                            className="md:hidden sm:px-2 sm:py-0.5 mt-1.5 px-2 py-1 rounded sm:text-base text-sm sm:font-normal font-light shadow-md bg-green-500 text-white dark:bg-[#ffbf2a]"
                                        >
                                            Details
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </ContainerLayout>
            </div>
            {isOpen && <Modal selectedProject={selectedProject} isOpen={isOpen} closeModal={closeModal} />}
        </section>
    );
};

export default Projects;
