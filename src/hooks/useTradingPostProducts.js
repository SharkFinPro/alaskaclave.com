import { graphql, useStaticQuery } from "gatsby";

const useTradingPostProducts = () => {
  const { allContentfulTradingPostProduct } = useStaticQuery(graphql`
    query {
      allContentfulTradingPostProduct {
        edges {
          node {
            name
            description {
              description
            }
            price
            image {
              gatsbyImageData
            }
            sizes
          }
        }
      }
    }
  `);

  return allContentfulTradingPostProduct.edges;
};

export default useTradingPostProducts;