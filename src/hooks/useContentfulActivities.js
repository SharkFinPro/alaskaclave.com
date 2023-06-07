import { graphql, useStaticQuery } from "gatsby";

const useContentfulActivities = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulConclaveActivity {
            edges {
                node {
                    id
                    inCamp
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

export default useContentfulActivities;