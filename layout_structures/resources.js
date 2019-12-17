import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const resources = () => (
  <Layout>

    <Panel>
      <div>
        <Headline
          title="Books, sources of information and teachers that have helped shape our understanding of the world"
          subtitle="LIBRARY OF RESOURCES"
        />
        <Button to="#peers_and_allies">Peers & allies</Button>
        <Button to="#books">Books</Button>
        <Button to="#articles">Articles</Button>
        <Button to="#podcasts">Podcasts</Button>
        <Button to="#authors_and_artists">Authors & artists</Button>
      </div>
    </Panel>

    <Panel>
      <div>
        <Headline
          title="Peers & Allies"
        />
        <p>Communities of practice we see working on similar issues</p>
      </div>
      <div>
        <ul>
          <li>
            <h2>Tamera</h2>
            <div>
              <p>Tamera is a peace research village with the goal of becoming "a self-sufficient, sustainable and duplicable communitarian model for nonviolent cooperation and cohabitation between humans, animals, nature, and Creation for a future of peace for all." It is also often called a "healing biotope".</p>
            </div>
            <div>
              <Link to="#">Learn More</Link>
            </div>
          </li>
          <li>
            <h2></h2>
            <div>
              <p></p>
            </div>
          </li>
        </ul>
        <div>
          <Button to="/"></Button>
        </div>
      </div>
    </Panel>

    <Panel>
      <div>
        <Headline
          title=""
          subtitle=""
        />
        <p></p>
        <Button to="/"></Button>
      </div>
      <div>
        <Image filename="" alt="" />
        <span></span>
      </div>
    </Panel>

    <Panel>
      <div>
        <Headline
          title=""
          subtitle=""
        />
        <p></p>
        <Button to="/"></Button>
      </div>
    </Panel>

    <Panel>
        <Image filename="" alt="" />
        <span></span>
    </Panel>


  </Layout>

)

// export default resources
