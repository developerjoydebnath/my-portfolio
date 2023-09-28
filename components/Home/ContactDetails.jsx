import { Icon } from '@/Icon/Icon';
import Link from 'next/link';

const ContactDetails = () => {
    const icons = ['Facebook', 'Twitter', 'Github', 'Discord', 'Instagram', 'LinkedIn'];
    return (
        <div className="md:block flex justify-center">
            <div className="md:ms-5 w-[500px] max-w-full">
                <div className="mb-5">
                    <h2 className="text-slate-600 dark:text-white lg:text-4xl text-3xl sm:mb-5 mb-3">Get Connected</h2>
                    <p className="text-slate-500 dark:text-[#a9adb8]">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, Lorem ipsum, dolor sit
                        amet consectetur adipisicing elit. Necessitatibus, molestiae?
                    </p>
                </div>
                <div className="mb-10">
                    <div className="flex items-center gap-4 mb-5 group">
                        <div className="">
                            <div className="border-2 border-slate-400 dark:border-[#5c667e] group-hover:border-green-500 dark:group-hover:border-[#ffbf2a] transition duration-200 sm:p-4 p-3 rounded-full">
                                <Icon
                                    icon="email"
                                    className="h-5 w-5 fill-slate-400 group-hover:fill-green-500 dark:group-hover:fill-[#ffbf2a] dark:fill-[#5c667e]"
                                />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-slate-600 font-medium dark:text-white mb-1 text-lg sm:text-xl">
                                Email
                            </h3>
                            <p className="text-slate-500 dark:text-[#a9adb8]">admin@example.com</p>
                            <p className="text-slate-500 dark:text-[#a9adb8]">admin@example.com</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 mb-5 group">
                        <div className="">
                            <div className="border-2 border-slate-400 dark:border-[#5c667e] group-hover:border-green-500 dark:group-hover:border-[#ffbf2a] transition duration-200 sm:p-4 p-3 rounded-full">
                                <Icon
                                    icon="phone"
                                    className="h-5 w-5 fill-slate-400 group-hover:fill-green-500 dark:group-hover:fill-[#ffbf2a] dark:fill-[#5c667e]"
                                />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-slate-600 font-medium dark:text-white mb-1 text-lg sm:text-xl">
                                Phone
                            </h3>
                            <p className="text-slate-500 dark:text-[#a9adb8]">+8801700000000</p>
                            <p className="text-slate-500 dark:text-[#a9adb8]">+8801700000000</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 mb-5 group">
                        <div className="">
                            <div className="border-2 border-slate-400 dark:border-[#5c667e] group-hover:border-green-500 dark:group-hover:border-[#ffbf2a] transition duration-200 sm:p-4 p-3 rounded-full">
                                <Icon
                                    icon="location"
                                    className="h-5 w-5 fill-slate-400 group-hover:fill-green-500 dark:group-hover:fill-[#ffbf2a] dark:fill-[#5c667e]"
                                />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-slate-600 font-medium dark:text-white mb-1 text-lg sm:text-xl">
                                Address
                            </h3>
                            <p className="text-slate-500 dark:text-[#a9adb8]">2661 High Meadow Lane Bear Creek,</p>
                            <p className="text-slate-500 dark:text-[#a9adb8]">Olancha, KY 93544</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="sm:text-xl text-lg text-slate-600 dark:text-[#a9adb8]">
                        Visit my social profile and get connected
                    </h1>
                    <div className="flex items-center justify-start lg:gap-5 gap-2 mt-2">
                        {icons.map((i, index) => (
                            <span
                                key={index}
                                className="flex justify-center items-center overflow-hidden transition-width duration-500 ease-in-out h-10 w-10 group md:hover:w-[140px]"
                            >
                                <Link
                                    scroll={true}
                                    href="/"
                                    className="h-full w-full flex items-center p-2.5 rounded-full border-2 fill-gray-500 hover:fill-green-500 dark:fill-[#5c667e] dark:hover:fill-[#ffbf2a] border-gray-500 dark:border-[#5c667e] hover:border-green-500 dark:hover:border-[#ffbf2a] group transition-all"
                                >
                                    <span>
                                        <Icon icon={i.toLowerCase()} className="h-4 w-4" />
                                    </span>
                                    <span className="hidden md:inline-block group-hover:text-green-500 text-gray-500 dark:text-[#5c667e] dark:group-hover:text-[#ffbf2a] font-semibold ms-4">
                                        {i}
                                    </span>
                                </Link>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactDetails;
