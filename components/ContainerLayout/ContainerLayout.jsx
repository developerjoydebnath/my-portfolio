export const ContainerLayout = ({ children }) => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="mx-5 flex justify-between items-center">{children}</div>
        </div>
    );
};
