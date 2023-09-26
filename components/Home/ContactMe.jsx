import { ContainerLayout } from '../ContainerLayout/ContainerLayout';
import Heading from '../Heading/Heading';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';

const ContactMe = () => {
    return (
        <section>
            <div className="py-10">
                <Heading left="left-10">CONTACT ME</Heading>
                <ContainerLayout>
                    <div className="mt-10">
                        <div className="grid grid-cols-2 gap-5">
                            <ContactForm />
                            <ContactDetails />
                        </div>
                    </div>
                </ContainerLayout>
            </div>
        </section>
    );
};

export default ContactMe;
