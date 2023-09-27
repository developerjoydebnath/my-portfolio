export const ContainerLayout = ({ children, extraClasses = '' }) => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className={`px-5 w-full ${extraClasses}`}>{children}</div>
        </div>
    );
};
