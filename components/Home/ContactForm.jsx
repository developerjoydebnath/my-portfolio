const ContactForm = () => {
    return (
        <div className="me-5">
            {/* <h1 className="text-white mb-5">Just Say Hello</h1> */}
            <div className="flex justify-center">
                <form className="w-[500px] max-w-full">
                    <h3 className="text-white mb-5 text-4xl">Just Say Hello</h3>
                    <div className="w-full">
                        <input
                            required
                            className="w-full border border-[#232935] text-[#a9adb8] bg-[#101624] outline-none focus:border-[#4c586e] rounded-md px-5 py-3 placeholder:text-[#47495a] mb-7"
                            placeholder="Your Name"
                            type="text"
                        />
                    </div>
                    <div className="w-full">
                        <input
                            required
                            className="w-full border border-[#232935] text-[#a9adb8] bg-[#101624] outline-none focus:border-[#4c586e] rounded-md px-5 py-3 placeholder:text-[#47495a] mb-6"
                            placeholder="Your Email"
                            type="email"
                        />
                    </div>
                    <div className="w-full">
                        <input
                            required
                            className="w-full border border-[#232935] text-[#a9adb8] bg-[#101624] outline-none focus:border-[#4c586e] rounded-md px-5 py-3 placeholder:text-[#47495a] mb-6"
                            placeholder="Your Subject"
                            type="text"
                        />
                    </div>
                    <div className="w-full">
                        <textarea
                            required
                            className="w-full border border-[#232935] text-[#a9adb8] bg-[#101624] outline-none focus:border-[#4c586e] rounded-md px-5 py-3 placeholder:text-[#47495a] mb-6"
                            cols="30"
                            rows="6"
                            placeholder="Your Message"
                        ></textarea>
                    </div>
                    <div className="w-full">
                        <input
                            className="w-[165px] text-[#000000] bg-[#fec544] cursor-pointer transition duration-300 hover:-translate-y-0.5 outline-none focus:border-[#4c586e] rounded-full px-5 py-3 mb-6 font-medium"
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
