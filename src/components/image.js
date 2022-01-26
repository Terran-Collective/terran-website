import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
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
                 fluid(maxWidth: 600) {
                   ...GatsbyImageSharpFluid
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
        <GatsbyImage alt={alt} fluid={image.node.childImageSharp.fluid} />
        <figcaption style={{margin: `0 auto`, opacity: `.5`, fontStyle: `italic`, fontSize: `16px`}}>{showCaption ? alt : ``}</figcaption>
      </figure>
    );
}

export default Image
