/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";
import theme from "@theme";
import { ThemeProvider } from "theme-ui";
import { GlobalCSS } from "@assets/css/style";
import "@assets/css/bootstrap.min.css";
import "@assets/css/icofont.min.css";
import Header from "./header";
import Footer from "./footer";
import ScrollToTop from "../components/shared/scroll-to-top";
import { useLocation } from "@reach/router"; // Gatsby-specific hook

const Layout = ({ data, children }) => {
    const location = useLocation(); // Get current location

    return (
        <ThemeProvider theme={theme}>
            <div className="wrapper">
                <GlobalCSS />
                <Header data={data} />
                {children}
                {/* Hide Footer on the /events and /newjersy/ pages */}
                {(location.pathname !== "/events" && location.pathname !== "/events"  && location.pathname !== "/newjersy/" && location.pathname !== "/newjersy" )&& <Footer data={data} />}
                <ScrollToTop />
            </div>
        </ThemeProvider>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    data: PropTypes.shape({}),
};

export default Layout;
