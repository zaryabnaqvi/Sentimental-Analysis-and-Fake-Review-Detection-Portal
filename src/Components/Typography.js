export const TextLink = ({ children, href, className }) => {
    return (
        <a
            href={href}
            className={`font-medium text-teal-500 hover:text-teat-600 active:text-teal-700 hover:underline${
                className ? ` ${className}` : ""
            }`}
        >
            {children}
        </a>
    );
};
