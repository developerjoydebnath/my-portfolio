const Heading = ({ children, className = '', left = '' }) => {
    return (
        <div className="max-w-screen-xl mx-auto py-10 cursor-default">
            <div className={`mx-5 text-center relative ${className}`}>
                <span className="absolute block md:text-8xl sm:text-7xl text-6xl -top-5 text-gray-600/10  -inset-1 font-bold">
                    {children}
                </span>
                <span className="text-2xl dark:font-medium font-bold dark:text-[#ffbf2a] text-green-500 relative">
                    {children}
                    <span className="absolute dark:h-0.5 h-[3px] w-full dark:bg-gray-600 bg-gray-300 top-full mt-4 left-0 rounded-full">
                        <span
                            className={`dark:h-0.5 h-[3px] w-[50%] dark:bg-[#ffbf2a] bg-green-500 absolute top-0 ${left} rounded-full`}
                        ></span>
                    </span>
                </span>
            </div>
        </div>
    );
};

export default Heading;
