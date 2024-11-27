import { Breadcrumb } from "gatsby-plugin-breadcrumb";
import { Col, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { PageBreadcrumbWrap, PageTitleContent } from "./style";
import { StaticImage } from "gatsby-plugin-image";

const PageBreadcrumb = ({ title, crumbLabel, location, pageContext }) => {
    const {
        breadcrumb: { crumbs },
    } = pageContext;
    const customCrumbLabel = location.pathname.toLowerCase();
    const crumbLabelArr = customCrumbLabel.split("/");
    const label = crumbLabelArr[crumbLabelArr.length - 1];
    const labelArr = label.split("-");
    const disableLinks = [
        "/events",
        "/category",
        "/profile",
        "/date",
        "/tag",
        "/page",
        "/blog",
        "/blog/page",
        "/blogs",
        "/services",
    ];
    const [fontSize, setFontSize] = useState('20px'); // Default font size for mobile

    useEffect(() => {
        // Check window size only in the browser after the component mounts
        const handleResize = () => {
            setFontSize(window.innerWidth >= 768 ? '50px' : '20px');
        };

        handleResize(); // Initialize font size based on the current window width

        window.addEventListener("resize", handleResize); // Update font size on window resize

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <PageBreadcrumbWrap>
            <div className="shape shape1">
                <StaticImage src="../../data/images/bread/1.png" alt="" />
            </div>
            <div className="shape shape2">
                <StaticImage src="../../data/images/bread/2.png" alt="" />
            </div>
                  <Container
    style={{
        color: 'white',
        fontSize: window.innerWidth >= 768 ? '50px' : '20px',
        fontWeight: 'bold',
        textAlign: 'center'
    }}
>
    {title}
</Container>



         </PageBreadcrumbWrap>
    );
};
PageBreadcrumb.propTypes = {
    title: PropTypes.string,
    crumbLabel: PropTypes.string,
    location: PropTypes.object,
    pageContext: PropTypes.object,
};

export default PageBreadcrumb;
