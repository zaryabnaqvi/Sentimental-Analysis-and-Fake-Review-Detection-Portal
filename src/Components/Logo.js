import { Typography } from "@material-tailwind/react";

import FilledLogo from "../Assets/Asset 1@2x (1).png";
import TransparentLogo from "../Assets/Asset 1@2x (1).png";

const Logo = ({ variant = "default", filled = true }) => {
    return (
        <a href="/" className="flex items-center gap-1 select-all">
            {(variant === "default" || variant === "icon") && (
                <img
                    src={filled ? FilledLogo : TransparentLogo}
                    className="w-[3.5rem] object-cover select-none rounded-full m-2 p-2"
                    alt="Website's logo"
                />
            )}
            {(variant === "default" || variant === "text") && (
                <Typography variant="h6" className="font-semibold text-[#fffced] select-none">
                    REVSAFE
                </Typography>
            )}
        </a>
    );
};

export default Logo;
