'use client';
import { ContainerLayout } from '../ContainerLayout/ContainerLayout';
import Heading from '../Heading/Heading';
import Backend from './Backend';
import Frontend from './Frontend';
import Stylesheet from './Stylesheet';

const MySkills = () => {
    return (
        <section id="skills">
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
