import { useEffect, useState } from "react";
import { Navbar, Button, Collapse } from "@material-tailwind/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faBars } from "@fortawesome/free-solid-svg-icons";

import Logo from "./Logo";
import { SignInModal } from "./ModalSignin";
import SignUpPage from "../Pages/SignUp";
import { SignUpModal } from "./ModalSignUp";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        document.addEventListener("scroll", () => {
            setScrolled(window.scrollY !== 0);
        });
    }, [scrolled]);

    const [openNav, setOpenNav] = useState(false);
    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth >= 1024) {
                setOpenNav(false);
            }
        });
    }, []);

    const MenuItem = ({ children, href }) => {
        return (
            <a href={href} className="flex items-center">
                <Button
                    variant="text"
                    size="sm"
                    ripple={false}
                    color="white"
                    className="w-full lg:w-fit font-medium text-[0.85rem] text-start capitalize"
                >
                    {children}
                </Button>
            </a>
        );
    };

    const navList = (
        <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-6">
            <MenuItem>About</MenuItem>
            <MenuItem>Pricing</MenuItem>
            <MenuItem>Contact</MenuItem>
        </div>
    );

    const accessControlButtons = (
        <div className="flex items-center gap-2">
           <div>
               <SignInModal/>
               </div>
               <div>
            <SignUpModal/>
            </div>
        </div>
    );

    const toggleMenu = (
        <FontAwesomeIcon
            icon={openNav ? faClose : faBars}
            onClick={() => setOpenNav(!openNav)}
            className="w-5 h-5 p-2 rounded-lg text-inherit hover:bg-gray-100 active:bg-gray-200 focus:bg-transparent text-white"
        />
    );

    return (
        <Navbar className="sticky top-0 px-4 py-2 bg-[#1b1b35] border-b border-gray-700 text-white" shadow={scrolled} fullWidth>
            <div className="flex items-center justify-between">
                <div>
                    <Logo />
                </div>
                <div className="hidden lg:block">{navList}</div>
                <div className="hidden lg:block">{accessControlButtons}</div>
                <div className="lg:hidden">{toggleMenu}</div>
            </div>
            <Collapse open={openNav}>
                <div className="flex flex-col gap-4">
                    {navList}
                    <hr className="border-gray-700" />
                    {accessControlButtons}
                </div>
            </Collapse>
        </Navbar>
    );
};

export default NavBar;
