import { graphql, useStaticQuery } from "gatsby";

const useContentfulConclaveStructureEntries = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulConclaveStructureEntry(sort: {chronologicalOrder: ASC}) {
            edges {
                node {
                    id
                    chronologicalOrder
                    name
                    description {
                        description
                    }
                    image {
                        gatsbyImageData
                    }
                    url
                }
            }
        }
    }
    `);

    return data.allContentfulConclaveStructureEntry.edges;
};

export default useContentfulConclaveStructureEntries;