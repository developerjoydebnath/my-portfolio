const ContactForm = () => {
    const style =
        'w-full border border-[#d6d6d6] dark:border-[#232935] text-[#555] dark:text-[#a9adb8] bg-[#eee] dark:bg-[#101624] outline-none focus:border-[#acacac] dark:focus:border-[#4c586e] rounded-md px-5 py-3 placeholder:text-[#a3a3a3] dark:placeholder:text-[#47495a] mb-7';
    return (
        <div className="me-5">
            {/* <h1 className="text-white mb-5">Just Say Hello</h1> */}
            <div className="flex justify-center">
                <form className="w-[500px] max-w-full">
                    <h3 className="text-slate-600 dark:text-white mb-5 text-4xl">Just Say Hello</h3>
                    <div className="w-full">
                        <input required className={style} placeholder="Your Name" type="text" />
                    </div>
                    <div className="w-full">
                        <input required className={style} placeholder="Your Email" type="email" />
                    </div>
                    <div className="w-full">
                        <input required className={style} placeholder="Your Subject" type="text" />
                    </div>
                    <div className="w-full">
                        <textarea required className={style} cols="30" rows="6" placeholder="Your Message"></textarea>
                    </div>
                    <div className="w-full">
                        <input
                            className="w-[165px] text-white bg-green-500 dark:bg-[#ffbf2a] cursor-pointer transition duration-200 hover:-translate-y-0.5 outline-none focus:border-[#4c586e] rounded-full px-5 py-3 mb-6 font-medium"
                            placeholder="Your Subject"
                            type="submit"
                            value="Send Message"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
