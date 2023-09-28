import { Icon } from '@/Icon/Icon';
import Link from 'next/link';
import { ContainerLayout } from '../ContainerLayout/ContainerLayout';

const Footer = () => {
    return (
        <footer>
            {/* bg-[#ffbf2a] */}
            <div className="bg-[#d5fdcd] dark:bg-[#06112e] py-8">
                <ContainerLayout>
                    <div className="sm:flex block justify-between">
                        <div>
                            <h4 className="text-black dark:font-normal font-medium dark:text-[#a9adb8] text-sm">
                                © 2023. All right reserved.
                            </h4>
                        </div>
                        <div>
                            <h4 className="text-black dark:font-normal font-medium dark:text-[#a9adb8] flex items-center text-sm mt-0 sm:mt-1">
                                Made with
                                <span className="mx-2">
                                    <Icon icon="love" className="h-4 w-4 fill-red-600" />
                                </span>
                                by
                                <Link href="/" className="ms-1">
                                    @joy
                                </Link>
                            </h4>
                        </div>
                    </div>
                </ContainerLayout>
            </div>
        </footer>
    );
};

export default Footer;
