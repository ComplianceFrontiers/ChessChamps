/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({
    description,
    lang,
    image: metaImage,
    title,
    titleTemplate,
    pathname,
    canonical,
    nextPage,
    prevPage,
    rootPath,
    isBlogPost,
}) => {
    const { site, faviconImage } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    author
                    keywords
                    siteUrl
                    canonical
                    siteLanguage
                    image
                    titleTemplate
                    twitterUsername
                    mainUrl
                }
                buildTime
            }
            faviconImage: file(relativePath: { eq: "images/favicon.png" }) {
                publicURL
            }
        }
    `);

    const path = pathname.replace(/^\/|\/$/g, "");
    const metaTitle = title || site.siteMetadata.title;
    const template = titleTemplate || site.siteMetadata.titleTemplate;
    const metaDescription = description || site.siteMetadata.description;
    const language = lang || site.siteMetadata.siteLanguage;
    const siteUrl = site.siteMetadata.siteUrl.replace(/\/$/, "");
    const mainUrl = site.siteMetadata.mainUrl.replace(/\/$/, "");
    const bannerImage = faviconImage.publicURL || `${siteUrl}/${site.siteMetadata.image}`;
    let canonicalLink = canonical ? `${mainUrl}${canonical}` : site.siteMetadata.canonical;
    const imgWidth = metaImage?.width ? metaImage.width : 875;
    const imgHeight = metaImage?.height ? metaImage.height : 554;
    let siteTitle = pathname === "/" ? `${site.siteMetadata.titleTemplate} ${site.siteMetadata.title}` : `${template} ${metaTitle}`;

    const schemaOrgWebPage = {
        "@context": "http://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": `${siteUrl}/#organization`,
                name: siteTitle,
                url: siteUrl,
                logo: {
                    "@type": "ImageObject",
                    url: site.siteMetadata.logo,
                },
            },
            {
                "@type": "WebSite",
                "@id": `${siteUrl}/#website`,
                url: siteUrl,
                name: siteTitle,
                publisher: {
                    "@id": `${siteUrl}/#organization`,
                },
                inLanguage: language,
                potentialAction: {
                    "@type": "SearchAction",
                    target: `${siteUrl}/?s={search_term_string}`,
                    "query-input": "required name=search_term_string",
                },
            },
        ],
    };

    return (
        <Helmet htmlAttributes={{ lang: language }}>
            <title>{siteTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="image" content={bannerImage} />
            <link rel="canonical" href={canonicalLink} />
            <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
            {prevPage && <link rel="prev" href={`${rootPath}${prevPage}`} />}
            {nextPage && <link rel="next" href={`${rootPath}${nextPage}`} />}
            <meta property="og:locale" content={language} />
            {isBlogPost && <meta property="og:type" content="article" />}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalLink} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={bannerImage} />
            <meta property="og:image:secure_url" content={bannerImage} />
            <meta property="og:image:width" content={`${imgWidth}px`} />
            <meta property="og:image:height" content={`${imgHeight}px`} />
            <meta property="og:image:alt" content={siteTitle} />
            <meta property="og:image:type" content="image/png" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={site.siteMetadata.twitterUsername} />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={bannerImage} />
            <script type="application/ld+json">{JSON.stringify(schemaOrgWebPage)}</script>
        </Helmet>
    );
};

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    title: PropTypes.string,
    titleTemplate: PropTypes.string,
    image: PropTypes.shape({
        src: PropTypes.string,
        width: PropTypes.string,
        height: PropTypes.string,
    }),
    pathname: PropTypes.string.isRequired,
    canonical: PropTypes.string,
    nextPage: PropTypes.string,
    prevPage: PropTypes.string,
    rootPath: PropTypes.string,
    isBlogPost: PropTypes.bool,
};

SEO.defaultProps = {
    lang: "en",
    description: "",
    pathname: "/",
};

export default SEO;
