import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCopyright, faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    const Tag = ({ children }) => {
        return (
            <span className="px-3 py-1 rounded-lg bg-[#464646] text-xs text-gray-400 uppercase select-none">
                {children}
            </span>
        );
    };

    const Section = ({ label, content }) => {
        return (
            <div className="flex flex-col gap-4">
                <h2 className="font-semibold text-xs uppercase tracking-wide">{label}</h2>
                {content}
            </div>
        );
    };

    const SEOTags = (
        <div className="flex items-center gap-4 font-semibold">
            <Tag>sentiments</Tag>
            <Tag>Real</Tag>
            <Tag>Fake</Tag>
        </div>
    );

    const socialMediaButtons = (
        <div className="flex items-center gap-6 font-semibold">
            <a href="." className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="." className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faGithub} />
            </a>
        </div>
    );

    const legalLinks = (
        <nav className="flex gap-4 lg:gap-8">
            <a href="." className="hover:text-gray-500 active:text-gray-300 hover:underline">
                Terms of Service
            </a>
            <a href="." className="hover:text-gray-500 active:text-gray-300 hover:underline">
                Privacy Policy
            </a>
            <a href="." className="hover:text-gray-500 active:text-gray-300 hover:underline">
                Cookie Policy
            </a>
        </nav>
    );

    return (
        <footer className="text-white">
            <div className="px-8 lg:px-48 py-12 bg-[linear-gradient(0deg,rgba(50,50,50,1)0%,rgba(76,76,76,1)41%,rgba(107,107,107,1)100%)]">
                <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl font-semibold">REVSAFE</h2>
                        <div className="flex flex-col gap-2 text-gray-400">
                            <p className="w-full lg:w-2/5 text-xs text-justify">
                                Product Analysis with our REVSAFE. Track
                                real-time usage of product, detect Fake and real reviews, and prioritize Authenicity for a smarter approach to
                                sentiments of the customers.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <Section label="Tags" content={SEOTags} />
                        <Section label="Follow Us" content={socialMediaButtons} />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center lg:items-start lg:flex-row justify-between gap-4 px-8 lg:px-48 py-8 bg-[#101010] font-medium text-xs text-gray-600">
                <div>
                    <p>
                        Copyright <FontAwesomeIcon icon={faCopyright} /> 2024 &middot; All rights reserved | Made with{" "}
                        <FontAwesomeIcon icon={faHeart} /> by <span className="font-bold">ZARYAB NAQVI</span>.
                    </p>
                </div>
                <div>{legalLinks}</div>
            </div>
        </footer>
    );
};

export default Footer;
