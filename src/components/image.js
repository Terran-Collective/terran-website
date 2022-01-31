import React from "react"
// import { graphql, useStaticQuery } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 */

 const Image = ({ filename, alt, showCaption }) => {

    return (
      <figure>
        <figcaption>{showCaption ? alt : ``}</figcaption>
      </figure>
    );
}

export default Image


// <StaticImage src={filename} alt={alt} />
// const data = useStaticQuery(graphql`
//     query {
//       images: allFile {
//         edges {
//           node {
//             relativePath
//             name
//             childImageSharp {
//                gatsbyImageData(layout: CONSTRAINED)
//            }
//           }
//         }
//       }
//     }
//   `)
//
//  const image = data.images.edges.find(n => {
//     return n.node.relativePath.includes(filename);
//   });
//  if (!image) { return null; }
