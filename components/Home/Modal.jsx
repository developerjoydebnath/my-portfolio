'use client';
import { Icon } from '@/Icon/Icon';
import { useLoading } from '@/context/LoadingContext';
import { projectDetails } from '@/utils/projectDetails';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react';

export default function Modal({ isOpen = false, closeModal, selectedProject }) {
    const { theme } = useLoading();
    const [imageNo, setImageNo] = React.useState(0);

    const projectDetail = projectDetails.find((p) => p.project === selectedProject);
    const images = projectDetail.images;

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={() => {}}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className={`${theme} fixed inset-0 overflow-y-auto`}>
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="relative w-full max-w-7xl transform overflow-hidden rounded bg-white dark:bg-[#0f182b] py-10 px-5 msm:p-10 text-left align-middle shadow-xl transition-all">
                                    <div className=" w-full">
                                        <div className="">
                                            <Image
                                                src={images[imageNo].img}
                                                className="w-full h-fit max-h-[550px] rounded-md"
                                                alt="dnd"
                                                height={600}
                                                width={1200}
                                            />
                                        </div>
                                        <div className="flex justify-center items-center gap-3 msm:gap-5 mt-3">
                                            {images.map((i, idx) => (
                                                <span
                                                    key={idx}
                                                    onClick={() => images.length >= imageNo && setImageNo(idx)}
                                                    className="msm:h-3 msm:w-3 h-2 w-2 bg-green-500 dark:bg-[#ffbf2a] rounded-full cursor-pointer"
                                                ></span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <h2 className="md:text-3xl text-2xl font-bold dark:text-[#d2d4da] mt-4 mb-2">
                                            Quiz Bee
                                        </h2>
                                        <p className="text-sm text-gray-600 dark:text-[#a9adb8] mb-2">
                                            A books e-commerce website built with React JS, Next JS, Redux, TypeScript,
                                            Tailwind CSS. It has a shopping cart, , orders list. It is fully responsive
                                            and mobile friendly. It is hosted on Vercel.
                                        </p>
                                        <span className="flex sm:gap-2 gap-1.5 text-xs text-white dark:text-black">
                                            <span className="bg-green-500 dark:bg-[#ffbf2a] px-1 sm:px-2 py-0.5 rounded-full">
                                                Next JS
                                            </span>
                                            <span className="bg-green-500 dark:bg-[#ffbf2a] px-1 sm:px-2 py-0.5 rounded-full">
                                                Typescript
                                            </span>
                                            <span className="bg-green-500 dark:bg-[#ffbf2a] px-1 sm:px-2 py-0.5 rounded-full">
                                                Redux
                                            </span>
                                            <span className="bg-green-500 dark:bg-[#ffbf2a] px-1 sm:px-2 py-0.5 rounded-full">
                                                Tailwind CSS
                                            </span>
                                        </span>
                                        <div className="mt-5">
                                            <Link
                                                className="bg-green-500 text-white dark:text-black dark:bg-[#ffbf2a] px-3 md:px-5 py-2.5 md:text-base text-sm rounded-md font-medium me-4"
                                                href={projectDetail.liveSiteLink}
                                                target="_blank"
                                            >
                                                Live Preview
                                            </Link>
                                            <Link
                                                className="bg-green-500 text-white dark:text-black dark:bg-[#ffbf2a] px-3 md:px-5 py-2.5 md:text-base text-sm rounded-md font-medium"
                                                href={projectDetail.repositoryLink}
                                                target="_blank"
                                            >
                                                Code On Github
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="absolute right-2 top-2">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-full border border-transparent dark:bg-[#f8cc67] bg-green-400 p-2 text-sm font-medium hover:bg-green-500 focus:outline-none dark:hover:bg-[#ffbf2a] focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            <Icon
                                                icon="cross"
                                                className="msm:h-3 msm:w-3 h-2 w-2 fill-white dark:fill-black"
                                            />
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
