const Heading = ({ children, className = '', left = '' }) => {
    return (
        <div className="max-w-screen-xl mx-auto py-10 cursor-default">
            <div className={`mx-5 text-center relative ${className}`}>
                <span className="absolute block text-8xl -top-5 text-gray-600/10  -inset-1 font-bold">{children}</span>
                <span className="text-2xl font-medium text-[#fec544] relative">
                    {children}
                    <span className="absolute h-0.5 w-full bg-gray-600 top-full mt-4 left-0 rounded-full">
                        <span className={`h-0.5 w-[50%] bg-[#fec544] absolute top-0 ${left} rounded-full`}></span>
                    </span>
                </span>
            </div>
        </div>
    );
};

export default Heading;
