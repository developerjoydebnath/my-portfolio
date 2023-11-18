import { Icon } from '@/Icon/Icon';
import Link from 'next/link';

const ContactDetails = () => {
    // const icons = ['Facebook', 'Twitter', 'Github', 'Discord', 'Instagram', 'LinkedIn'];
    const icons = [
        { icon: 'twitter', label: 'Twitter', url: 'https://twitter.com/Joy_Debnath_JS' },
        { icon: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/joy.nath.311493' },
        { icon: 'github', label: 'Github', url: ' https://github.com/developerjoydebnath' },
        { icon: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/joydebnath_jp/' },
        { icon: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/joy-debnath-js/' },
        { icon: 'discord', label: 'Discord', url: 'https://discordapp.com/users/joydebnath#8223' },
    ];
    return (
        <div className="md:block flex justify-center">
            <div className="md:ms-5 w-[500px] max-w-full">
                <div className="mb-5">
                    <h2 className="text-slate-600 dark:text-white lg:text-4xl text-3xl sm:mb-5 mb-3">Get Connected</h2>
                    <p className="text-slate-500 dark:text-[#a9adb8]">
                        Get connected with me for any kind of information. Knock me anytime you need. I'm always here to
                        solve your problems.
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
                            <p
                                onClick={() =>
                                    window.open('mailto:support@example.com?subject=SendMail&body=Description')
                                }
                                className="dark:hover:text-[#e4e5e7] hover:text-black text-slate-500 dark:text-[#a9adb8] cursor-pointer"
                            >
                                developerjoydebnath@gmail.com
                            </p>
                            <p
                                onClick={() =>
                                    window.open('mailto:support@example.com?subject=SendMail&body=Description')
                                }
                                className="dark:hover:text-[#e4e5e7] hover:text-black text-slate-500 dark:text-[#a9adb8] cursor-pointer"
                            >
                                joydebnathjp017@gmail.com
                            </p>
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
                            <Link
                                href="tel:+8801740036543"
                                className="text-slate-500 dark:text-[#a9adb8] dark:hover:text-[#e4e5e7] hover:text-black"
                            >
                                +880 1740036543
                            </Link>
                            <br />
                            <Link
                                href="tel:+8801740036543"
                                className="text-slate-500 dark:text-[#a9adb8] dark:hover:text-[#e4e5e7] hover:text-black"
                            >
                                +880 1740036543
                            </Link>
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
                            <p className="text-slate-500 dark:text-[#a9adb8]">Nischintapur, Zirabo, Asulia</p>
                            <p className="text-slate-500 dark:text-[#a9adb8]">Savar, Dhaka</p>
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
                                    target="_bland"
                                    scroll={true}
                                    href={i.url}
                                    className="h-full w-full flex items-center p-2.5 rounded-full border-2 fill-gray-500 hover:fill-green-500 dark:fill-[#5c667e] dark:hover:fill-[#ffbf2a] border-gray-500 dark:border-[#5c667e] hover:border-green-500 dark:hover:border-[#ffbf2a] group transition-all"
                                >
                                    <span>
                                        <Icon icon={i.icon} className="h-4 w-4" />
                                    </span>
                                    <span className="hidden md:inline-block group-hover:text-green-500 text-gray-500 dark:text-[#5c667e] dark:group-hover:text-[#ffbf2a] font-semibold ms-4">
                                        {i.label}
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
