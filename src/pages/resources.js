import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Panel from "../components/panel"
import Headline from "../components/headline"
import Button from "../components/button"
import JSONData from "../d/teachers.json"

const ResourcesPage = ({ data }) => (
  <Layout>
    <div className="heroPanel resourcesHero">
      <Panel justification="center">
        <div className="pageHero">
          <Headline
            title="Books, sources, and teachers that have shaped our understanding of the world"
            subtitle="LIBRARY OF RESOURCES"
          />
          <Button link="/resources/#peers-and-allies" label="Peers &amp; Allies" />
          <Button link="/resources/#books" label="Books" />
          <Button link="/resources/#articles" label="Articles" />
          <Button link="/resources/#podcasts" label="Podcasts" />
          <Button link="/resources/#authors-artists-teachers" label="Authors &amp; Artists" />
        </div>
      </Panel>
      <div className="heroPanelBg"></div>
    </div>

    <Panel justification="center">
      <div id="peers-and-allies" className="resourceHeadline">
        <Headline title="Peers &amp; Allies" />
        <p>Communities of practice we see working on similar issues</p>
      </div>
      <div className="communitiesList">
        <ul>
          <li>
            <h2>Tamera</h2>
            <div>
              <p>Tamera is a peace research village with the goal of becoming "a self-sufficient, sustainable and duplicable communitarian model for nonviolent cooperation and cohabitation between humans, animals, nature, and Creation for a future of peace for all." It is also often called a "healing biotope".</p>
            </div>
            <div>
              <a href="https://www.tamera.org/">Learn More</a>
            </div>
          </li>
          <li>
            <h2>Commonweal</h2>
            <div>
              <p>Today, Commonweal works in three core fields—health and healing, art and education, and environment and justice.</p>
            </div>
            <div>
              <a href="https://www.commonweal.org/">Learn More</a>
            </div>
          </li>
          <li>
            <h2>Canticle Farms</h2>
            <div>
              <p>Canticle Farm is an urban farm and educational center, an intentional community, and an experiment in faith-based activism, nonviolence, and restorative justice. </p>
            </div>
            <div>
              <a href="https://canticlefarmoakland.org/">Learn More</a>
            </div>
          </li>
          <li>
            <h2>Mondragon Corporation</h2>
            <div>
              <p>The Mondragon Corporation is a corporation and federation of worker cooperatives based in the Basque region of Spain.</p>
            </div>
            <div>
              <a href="https://en.wikipedia.org/wiki/Mondragon_Corporation">Learn More</a>
            </div>
          </li>
          <li>
            <h2>Guerilla Translation (DISCO.coop)</h2>
            <div>
              <p>Guerrilla Translation is a communications collective building an knowledge commons while also providing livelihoods for activist translators, using open value accounting and feminist economic principles. Activists can seldom afford to be activists.</p>
            </div>
            <div>
              <a href="https://www.guerrillatranslation.org/">Learn More</a>
            </div>
          </li>
          <li>
            <h2>Enspiral</h2>
            <div>
              <p>Enspiral is a network of groups and people, a DIY collective of social enterprises, ventures, and individuals working collaboratively across the world while fulfilling their purpose. ... From software to design to facilitation to organisational strategy and impact driven business, we have people that help you.</p>
            </div>
            <div>
              <a href="https://enspiral.com/">Learn More</a>
            </div>
          </li>
          <li>
            <h2>Burning Man</h2>
            <div>
              <p>Burning Man is an annual experiment in temporary community dedicated to radical self-expression, radical self-reliance and occurs within a decommodified, market-free context.</p>
            </div>
            <div>
              <a href="https://burningman.org/">Learn More</a>
            </div>
          </li>
          <li>
            <h2>Aethos</h2>
            <div>
              <p>A creative guild for the new renaissance.</p>
            </div>
            <div>
              <a href="https://www.aethos.studio/">Learn More</a>
            </div>
          </li>
          <li>
            <h2>Friends and Lovers</h2>
            <div>
              <p>A community based in the northeast of the United States centered around long-term friendship.</p>
            </div>
            <div>
            </div>
          </li>
          <li>
            <h2>Amah Mutsun Land Trust</h2>
            <div>
              <p>From archaeological and fire research to educational gardens, the Amah Mutsun Land Trust is bringing indigenous stewardship back to the lands of the Amah Mutsun.</p>
            </div>
            <div>
              <a href="http://amahmutsun.org/land-trust">Learn More</a>
            </div>
          </li>
          <li>
            <h2>The Sogorea Te Land Trust</h2>
            <div>
              <p>The Sogorea Te Land Trust is an urban Indigenous women-led community organization that facilitates the return of Chochenyo and Karkin Ohlone lands in the San Francisco Bay Area to Indigenous stewardship.</p>
            </div>
            <div>
              <a href="https://sogoreate-landtrust.com/">Learn More</a>
            </div>
          </li>
          <li>
            <h2>Cultural Evolution Center</h2>
            <div>
              <p>The Center for Applied Cultural Evolution was created to help communities guide their own social change efforts using integrated social science tools and frameworks. </p>
            </div>
            <div>
              <a href="https://culturalevolutioncenter.org/">Learn More</a>
            </div>
          </li>
          <li>
            <h2>DAOstack</h2>
            <div>
              <p>DAOstack is designed to catalyze the future of collaboration. It's a platform for decentralized governance that enables collectives to self-organize around shared goals or values, easily and efficiently. DAOstack is sometimes called an operating system for collective intelligence, or a Wordpress for DAOs</p>
            </div>
            <div>
              <a href="http://daostack.io">Learn More</a>
            </div>
          </li>
          <li>
            <h2>Game B</h2>
            <div>
              <p>A community gathering around a better future referred to as <strong>Game B</strong></p>
            </div>
            <div>
              <a href="https://www.facebook.com/groups/1447251258838263/">Learn More</a>
            </div>
          </li>
          <li>
            <h2>Digital Life Collective</h2>
            <div>
              <p>The Digital Life Collective researches, develops, funds and supports Tech We Trust: technologies that prioritize our autonomy, privacy and dignity. Our tech, not their tech.</p>
            </div>
            <div>
              <a href="http://diglife.com">Learn More</a>
            </div>
          </li>
          <li>
            <h2>Earth Nation</h2>
            <div>
              <p>The Earth Nation is an International Society of positive change organizations and people that are dedicated to finding, developing, and implementing solutions for every major challenge the human race deals with today.</p>
            </div>
            <div>
              <a href="https://earthnation.world/">Learn More</a>
            </div>
          </li>
          <li>
            <h2>Esalen</h2>
            <div>
              <p>The Esalen Institute, commonly called Esalen, is a non-profit American retreat center and intentional community in Big Sur, California, which focuses on humanistic alternative education. The Institute played a key role in the Human Potential Movement beginning in the 1960s.</p>
            </div>
            <div>
              <a href="https://www.esalen.org/">Learn More</a>
            </div>
          </li>
          <li>
            <h2>Impact Hub</h2>
            <div>
              <p>Impact Hub is a community centre headquartered in Vienna Austria that acts as the parent body of the global network of hubs which aim to foster entrepreneurship, idea incubation, business development and offers co-working spaces.</p>
            </div>
            <div>
              <a href="https://impacthub.net/">Learn More</a>
            </div>
          </li>
          <li>
            <h2>International Bateson Institute</h2>
            <div>
              <p>The International Bateson Institute is a non-profit research and educational organization focused on exploring possible solutions to some of our most pressing problems through approaches to research that are consistent with the nature of complex systems.</p>
            </div>
            <div>
              <a href="https://batesoninstitute.org/">Learn More</a>
            </div>
          </li>
          <li>
            <h2>Ouishare</h2>
            <div>
              <p>Ouishare is an international network of freelancers, entrepreneurs, and thought leaders. Next to Connectors (Ouishare's core and highly active members), our members demonstrate a wide range of skills that range from design, project management, research, and organizational communication.</p>
            </div>
            <div>
              <a href="https://www.ouishare.net/">Learn More</a>
            </div>
          </li>
          <li>
            <h2>Regen Network</h2>
            <div>
              <p>Regen Network is a global marketplace and contracting platform for Earth's ecosystem assets, services, and data.</p>
            </div>
            <div>
              <a href="https://www.regen.network/">Learn More</a>
            </div>
          </li>
          <li>
            <h2>Transformation Agency</h2>
            <div>
              <p>On a mission to empower today’s leaders with tomorrow’s social technologies, and organizational infrastructures, to accelerate a positive paradigm shift worldwide.</p>
            </div>
            <div>
              <a href="https://www.facebook.com/transformationagency/">Learn More</a>
            </div>
          </li>
          <li>
            <h2>Odyssey</h2>
            <div>
              <p>ODYSSEY is a co-creative visionary incubator for the new companies, brands, infrastructure, identities and narratives that we require as support in our desired evolution.</p>
            </div>
            <div>
              <a href="https://www.visionarysouls.com/odyssey">Learn More</a>
            </div>
          </li>
        </ul>
        <div>
        </div>
      </div>
    </Panel>

    <Panel justification="center">
      <div className="books">
        <div id="books" className="resourceHeadline">
          <Headline
            title="Reading list"
          />
          <p>This is an incomplete list of some of the books we’ve read that are important to our work. If you know of books that we should read in order to do our best work, please send your recommendations to <a href="info@terran.io">info@terran.io</a></p>
        </div>
        <div className="library">
        <div>
          <a href="https://duckduckgo.com/?q=a+finer+future+hunter+lovins" target="_blank" rel="noreferrer">
            <StaticImage src="../images/resources/books/a_finer_future2x.jpg" alt="A Finer Future by Hunter Lovins" />
          </a>
        </div>
        <div>
          <a href="https://duckduckgo.com/?q=becoming+animal+david+abram" target="_blank" rel="noreferrer">
            <StaticImage src="../images/resources/books/becoming_animal2x.jpg" alt="Becoming Animal by David Abram" />
          </a>
        </div>
        <div>
          <a href="https://duckduckgo.com/?q=emergent+strategy+adrienne+marie+brown" target="_blank" rel="noreferrer">
            <StaticImage src="../images/resources/books/emergent_strategy2x.jpg" alt="Emergent Strategy by adrienne marie brown" />
          </a>
        </div>
        <div>
          <a href="https://duckduckgo.com/?q=finite+and+infinite+games+james+carse" target="_blank" rel="noreferrer">
            <StaticImage src="../images/resources/books/finite_and_infinite_games2x.jpg" alt="Finite and Infinite Games by James P. Carse" />
          </a>
        </div>
        <div>
          <a href="https://duckduckgo.com/?q=governing+the+commons+elinor+ostrom" target="_blank" rel="noreferrer">
            <StaticImage src="../images/resources/books/governing_the_commons2x.jpg" alt="Governing the Commons by Elinor Ostrom" />
          </a>
        </div>
        <div>
          <a href="https://duckduckgo.com/?q=ishmael+daniel+quinn" target="_blank" rel="noreferrer">
            <StaticImage src="../images/resources/books/ishmael2x.jpg" alt="Ishmael by Daniel Quinn" />
          </a>
        </div>
        <div>
          <a href="https://duckduckgo.com/?q=reinventing+organizations+frederic+laloux" target="_blank" rel="noreferrer">
            <StaticImage src="../images/resources/books/reinventing_organizations2x.jpg" alt="Reinventing Organizations by Frederic Laloux" />
          </a>
        </div>
        <div>
          <a href="https://duckduckgo.com/?q=sacred+economics+charles+eisenstein" target="_blank" rel="noreferrer">
            <StaticImage src="../images/resources/books/sacred_economics2x.jpg" alt="Sacred Economics by Charles Eisenstein" />
          </a>
        </div>
        <div>
          <a href="https://duckduckgo.com/?q=fifth+sacred+thing+starhawk" target="_blank" rel="noreferrer">
            <StaticImage src="../images/resources/books/the_fifth_sacred_thing2x.jpg" alt="The Fifth Sacred Thing by Starhawk" />
          </a>
        </div>
        <div>
          <a href="https://duckduckgo.com/?q=practice+of+the+wild+gary+snyder" target="_blank" rel="noreferrer">
            <StaticImage src="../images/resources/books/the_practice_of_the_wild2x.jpg" alt="The Practice of the Wild by Gary Snyder" />
          </a>
        </div>
        <div>
          <a href="https://duckduckgo.com/?q=tao+of+democracy+tom+atlee" target="_blank" rel="noreferrer">
            <StaticImage src="../images/resources/books/the_tao_of_democracy2x.jpg" alt="The Tao of Democracy by Tom Atlee" />
          </a>
        </div>
        <div>
          <a href="https://www.prosocial.world" target="_blank" rel="noreferrer">
            <StaticImage src="../images/resources/books/prosocial.jpg" alt="Prosocial: Using Evolutionary Science to Build Productive, Equitable, and Collaborative Groups by Paul W.B. Atkins PhD, David Sloan Wilson PhD, Steven C. Hayes PhD," />
          </a>
        </div>
        <div>
          <a href="https://newsociety.com/books/f/free-fair-and-alive" target="_blank" rel="noreferrer">
            <StaticImage src="../images/resources/books/free_fair_and_alive.jpg" alt="Free, Fair, and Alive: The Insurgent Power of the Commons by David Bollier and Silke Helfrich" />
          </a>
        </div>
        </div>
      </div>
    </Panel>

    <Panel justification="center">
      <div className="articles">
        <div id="articles" className="resourceHeadline">
          <Headline
            title="Articles and Posts"
          />
          <p>Share with us what you’re reading on <a href="https://www.facebook.com/TerranCollective/">Facebook</a>. Here are some important digital-form writings that we think you would benefit from reading.</p>
        </div>

        <ul className="smallWhiteCards">
          <li>
            <div>
              <a href="https://civilizationemerging.com/new-economics-series-part-i/">
                <h3>New Economics Series: Part I</h3>
                <span>by Daniel Schmachtenberger</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="https://slatestarcodex.com/2014/07/30/meditations-on-moloch/">
                <h3>Meditations on Moloch</h3>
                <span>by Scott Alexander</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="https://medium.com/agile-sensemaking/sensemaking-in-organizations-pt-1-e79c4aaf63ca">
                <h3>Sensemaking in Organizations Pt. 1</h3>
                <span>by Bonnitta Roy</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="https://handbook.enspiral.com/">
                <h3>Enspiral Handbook</h3>
                <span>Enspiral</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="https://medium.com/@salmonnation/salmon-nation-a-place-and-an-idea-1f18e4776362">
                <h3>Salmon Nation: People. Place. An Invitation</h3>
                <span>Salmon Nation</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="https://www.tni.org/files/profiles-downloads/disco_manifesto_v.1.pdf">
                <h3>If I Only Had a Heart: A DisCO Manifesto</h3>
                <span>DISCO.coop</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </Panel>

    <Panel justification="center">
      <div className="podcastsContainer">
        <div id="podcasts" className="resourceHeadline">
          <Headline
            title="Podcasts"
          />
        </div>
        <div className="podcasts">
          <a href="https://forthewild.world/listen">
            <StaticImage src="../images/resources/podcasts/Bitmap2x.jpg" alt="For the Wild" />
          </a>
          <a href="https://www.whatisemerging.com/emergepodcast">
            <StaticImage src="../images/resources/podcasts/emerge2x.jpg" alt="Emerge" />
          </a>
          <a href="https://futurethinkers.org/">
            <StaticImage src="../images/resources/podcasts/future_thinkers2x.jpg" alt="Future Thinkers" />
          </a>
          <a href="https://www.endoftheworldshow.org/">
            <StaticImage src="../images/resources/podcasts/how_to_survive_the_end_of_the_world2x.jpg" alt="How to Survive the End of the World" />
          </a>
          <a href="https://www.lifteconomy.com/podcast">
            <StaticImage src="../images/resources/podcasts/next_economy_now2x.jpg" alt="Next Economy Now" />
          </a>
          <a href="https://www.jimruttshow.com/">
            <StaticImage src="../images/resources/podcasts/the_jim_rutt_show2x.jpg" alt="The Jim Rutt Show" />
          </a>
        </div>
      </div>
    </Panel>

    <Panel justification="center">
      <div id="authors-artists-teachers" className="ourTeachers resourceHeadline">
        <Headline
          title="Authors, Leaders, Artists and Teachers"
        />
        <p>These are people whose work has in some way deeply informed our collective understanding of the world.</p>
        <ul>
        {JSONData.teachers.map((row) => (
          <li key={row.Name}>
              <a href={row.URL} target="_blank" rel="noopener noreferrer">
              <h3>{row.Name}</h3>
              <span>{row.Title}</span>
              </a>
          </li>
        ))}
        </ul>
      </div>
    </Panel>
  </Layout>

)

export default ResourcesPage
export { Head } from "../components/page-head"