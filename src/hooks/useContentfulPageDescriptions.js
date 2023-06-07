import { graphql, useStaticQuery } from "gatsby";

const useContentfulPageDescriptions = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulInfoPageDescription {
            edges {
                node {
                    id
                    description {
                        description
                    }
                    page
                }
            }
        }
    }
    `);

    return data.allContentfulInfoPageDescription.edges;
};

export default useContentfulPageDescriptions;