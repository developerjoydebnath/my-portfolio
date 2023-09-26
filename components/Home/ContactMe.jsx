import { Icon } from '@/Icon/Icon';
import { ContainerLayout } from '../ContainerLayout/ContainerLayout';
import Heading from '../Heading/Heading';

const ContactMe = () => {
    return (
        <section>
            <div className="">
                <Heading left="left-10">CONTACT ME</Heading>
                <ContainerLayout>
                    <div className="mt-10">
                        <div className="grid grid-cols-2 gap-5">
                            <div className="border">form</div>
                            <div className="border ms-5">
                                <div className="mb-5">
                                    <h2 className="text-white text-4xl mb-5">Get Connected</h2>
                                    <p className="text-[#a9adb8]">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, Lorem
                                        ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, molestiae?
                                    </p>
                                </div>
                                <div>
                                    <div className="flex items-center gap-4 mb-5 group">
                                        <div className="">
                                            <div className="border-2 border-[#5c667e] group-hover:border-[#fec544] transition duration-200 p-4 rounded-full">
                                                <Icon icon="email" className="h-8 w-8 fill-[#5c667e]" />
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
                                            <div className="border-2 border-[#5c667e] group-hover:border-[#fec544] transition duration-200 p-4 rounded-full">
                                                <Icon icon="phone" className="h-8 w-8 fill-[#5c667e]" />
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
                                            <div className="border-2 border-[#5c667e] group-hover:border-[#fec544] transition duration-200 p-4 rounded-full">
                                                <Icon icon="location" className="h-8 w-8 fill-[#5c667e]" />
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
                                    <h1 className="text-2xl text-[#a9adb8]">
                                        Visite my social profile and get connected
                                    </h1>
                                    <div className="flex gap-10">
                                        <div className="border">O</div>
                                        <div className="border">O</div>
                                        <div className="border">O</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ContainerLayout>
            </div>
        </section>
    );
};

export default ContactMe;
