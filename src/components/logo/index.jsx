import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { LogoImg } from "./style";

const Logo = ({ classCName }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768); // Example breakpoint
        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <LogoImg>
            <Link to="/">
                {isMobile ? (
                    <StaticImage
                        src="../../data/images/logo/logo2.png"
                        alt="Small Logo Image"
                        title="Mobile Logo"
                    />
                ) : (
                    <StaticImage
                        src="../../data/images/logo/logo.png"
                        alt="Pringo Logo Image"
                        title="Desktop Logo"
                    />
                )}
            </Link>
        </LogoImg>
    );
};

Logo.propTypes = {
    classCName: PropTypes.string,
};

export default Logo;
