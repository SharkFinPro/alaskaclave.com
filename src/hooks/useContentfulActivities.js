import { graphql, useStaticQuery } from "gatsby";

const useSiteMetadata = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulConclaveActivity {
            edges {
                node {
                    id,
                    name
                    url
                    tags
                    description {
                        description
                    }
                    image {
                        gatsbyImageData
                    }
                }
            }
        }
    }
    `);

    return data.allContentfulConclaveActivity.edges;
};

export default useSiteMetadata;