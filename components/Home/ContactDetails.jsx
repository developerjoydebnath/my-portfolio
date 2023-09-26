import { Icon } from '@/Icon/Icon';
import Link from 'next/link';

const ContactDetails = () => {
    return (
        <div className="ms-5">
            <div className="mb-5">
                <h2 className="text-white text-4xl mb-5">Get Connected</h2>
                <p className="text-[#a9adb8]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, Lorem ipsum, dolor sit
                    amet consectetur adipisicing elit. Necessitatibus, molestiae?
                </p>
            </div>
            <div className="mb-10">
                <div className="flex items-center gap-4 mb-5 group">
                    <div className="">
                        <div className="border-2 border-[#5c667e] group-hover:border-[#ffbf2a] transition duration-200 p-4 rounded-full">
                            <Icon icon="email" className="h-6 w-6 fill-[#5c667e]" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-white mb-1 text-xl">Email</h3>
                        <p className="text-[#a9adb8]">admin@example.com</p>
                        <p className="text-[#a9adb8]">admin@example.com</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 mb-5 group">
                    <div className="">
                        <div className="border-2 border-[#5c667e] group-hover:border-[#ffbf2a] transition duration-200 p-4 rounded-full">
                            <Icon icon="phone" className="h-6 w-6 fill-[#5c667e]" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-white mb-1 text-xl">Phone</h3>
                        <p className="text-[#a9adb8]">+8801700000000</p>
                        <p className="text-[#a9adb8]">+8801700000000</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 mb-5 group">
                    <div className="">
                        <div className="border-2 border-[#5c667e] group-hover:border-[#ffbf2a] transition duration-200 p-4 rounded-full">
                            <Icon icon="location" className="h-6 w-6 fill-[#5c667e]" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-white mb-1 text-xl">Address</h3>
                        <p className="text-[#a9adb8]">2661 High Meadow Lane Bear Creek,</p>
                        <p className="text-[#a9adb8]">Olancha, KY 93544</p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-xl text-[#a9adb8]">Visit my social profile and get connected</h1>
                <div className="flex items-center justify-start gap-5 mt-2">
                    <span className="js__transition">
                        <Link
                            href="/"
                            className="h-full w-full flex items-center p-2.5 rounded-full border-2 fill-[#5c667e] hover:fill-white border-[#5c667e] hover:border-gray-400 group transition-all"
                        >
                            <span>
                                <Icon icon="facebook" className="h-5 w-5" />
                            </span>
                            <span className="text-white font-semibold ms-4">Facebook</span>
                        </Link>
                    </span>
                    {/* <span className="js__transition">
                                            <Link
                                                href="/"
                                                className="h-full w-full flex items-center p-2.5 rounded-full border-2 fill-[#878b96] hover:fill-white border-[#474a4e] hover:border-gray-400 group transition-all"
                                            >
                                                <span>
                                                    <Icon icon="facebook" className="h-5 w-5" />
                                                </span>
                                                <span className="text-white font-semibold ms-4">Facebook</span>
                                            </Link>
                                        </span> */}
                    <span className="js__transition">
                        <Link
                            href="/"
                            className="h-full w-full flex items-center p-2.5 rounded-full border-2 fill-[#5c667e] hover:fill-white border-[#5c667e] hover:border-gray-400 group transition-all"
                        >
                            <span>
                                <Icon icon="twitter" className="h-5 w-5" />
                            </span>
                            <span className="text-white font-semibold ms-4">Twitter</span>
                        </Link>
                    </span>
                    <span className="js__transition">
                        <Link
                            href="/"
                            className="h-full w-full flex items-center p-2.5 rounded-full border-2 fill-[#5c667e] hover:fill-white border-[#5c667e] hover:border-gray-400 group transition-all"
                        >
                            <span>
                                <Icon icon="github" className="h-5 w-5" />
                            </span>
                            <span className="text-white font-semibold ms-4 ">Github</span>
                        </Link>
                    </span>
                    <span className="js__transition">
                        <Link
                            href="/"
                            className="h-full w-full flex items-center p-2.5 rounded-full border-2 fill-[#5c667e] hover:fill-white border-[#5c667e] hover:border-gray-400 group transition-all"
                        >
                            <span>
                                <Icon icon="discord" className="h-5 w-5" />
                            </span>
                            <span className="text-white font-semibold ms-4">Discord</span>
                        </Link>
                    </span>
                    <span className="js__transition">
                        <Link
                            href="/"
                            className="h-full w-full flex items-center p-2 rounded-full border-2 fill-[#5c667e] hover:fill-white border-[#5c667e] hover:border-gray-400 group transition-all"
                        >
                            <span>
                                <Icon icon="instagram" className="h-6 w-6" />
                            </span>
                            <span className="text-white font-semibold ms-4">Instagram</span>
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ContactDetails;
