'use client';
import { ContainerLayout } from '../ContainerLayout/ContainerLayout';
import Heading from '../Heading/Heading';
import Backend from './Backend';
import Frontend from './Frontend';
import Stylesheet from './Stylesheet';

const MySkills = () => {
    const style =
        'absolute h-3 w-3 top-2.5 -left-[46px] transition-all duration-200 rounded-full border border-[#5a5a5a] overflow-hidden bg-[#131313] -hover:border-[#fec544] -hover:bg-[#fec544] js__shadow_2';

    return (
        <section>
            <div className="py-10">
                <Heading left="left-[31px]">MY SKILLS</Heading>
                <ContainerLayout>
                    <div className="grid grid-cols-12 w-full mt-10">
                        <Frontend />
                        <Stylesheet />
                        <Backend />
                    </div>
                </ContainerLayout>
            </div>
        </section>
    );
};

export default MySkills;
