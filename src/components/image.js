import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

 const Image = ({ filename, alt, showCaption }) => {
   const data = useStaticQuery(graphql`
       query {
         images: allFile {
           edges {
             node {
               relativePath
               name
               childImageSharp {
                 sizes(maxWidth: 600) {
                   ...GatsbyImageSharpSizes
                 }
               }
             }
           }
         }
       }
     `)

    const image = data.images.edges.find(n => {
       return n.node.relativePath.includes(filename);
     });
    if (!image) { return null; }

    return (
    <figure style={{textAlign: `center`}}>
      <Img alt={alt} sizes={image.node.childImageSharp.sizes} />
      <figcaption style={{margin: `0 auto`, opacity: `.4`, fontStyle: `italic`}}>{showCaption ? alt : ``}</figcaption>
    </figure>
    )
}

export default Image
