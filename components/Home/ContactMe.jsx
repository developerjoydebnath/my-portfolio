import { ContainerLayout } from '../ContainerLayout/ContainerLayout';
import Heading from '../Heading/Heading';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';

const ContactMe = () => {
    return (
        <section id="contact-me">
            <div className="py-10">
                <Heading left="left-10">CONTACT ME</Heading>
                <ContainerLayout>
                    <div className="mt-10">
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
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
