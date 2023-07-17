import React from "react"

const Head = ({ location, params, data, pageContext }) => (
  <>
    <html lang="en" />
    <title>{pageContext.title}</title>
    <meta name="description" content={data.page.description} />
    <meta
      name="twitter:url"
      content={`https://terran.io/${location.pathname}`}
    />
    <meta
      name="twitter:title"
      content={pageContext.title}
    />
    <meta
      name="twitter:description"
      content={data.page.description}
    />
    <meta
      name="og:title"
      content={pageContext.title}
    />
    <meta
      name="og:description"
      content={data.page.description}
    />
  </>
)

