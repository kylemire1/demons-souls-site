import * as React from "react"
import Container from "../components/Container"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <Container className="mt-14">
        <div className="mx-auto prose bg-white p-6 rounded">
          <h1 className="">Welcome to Boletaria</h1>
          <p>
            Demon's Souls takes place in the kingdom of Boletaria. In ancient
            times, due to the misuse of magic known as the Soul Arts, Boletaria
            was attacked by a being called the Old One. The world was nearly
            consumed by the magical "Deep Fog" and the soul-eating demons it
            created. The Old One was eventually lulled to slumber, saving what
            remained of Boletaria, while some survivors became long-lived
            Monumentals to warn future generations. In the game's present,
            Boletaria's ruler King Allant restored the Soul Arts, awakening the
            Old One and its demon army. Boletaria is now being consumed by
            demons, with those humans without souls turning into insane
            monsters. Players take the role of an adventurer entering the fog
            engulfing Boletaria. After being killed, the player wakes up in the
            Nexus and meets a benevolent demon called the Maiden in Black, as
            well as various other characters.
          </p>
          <p>
            Now bound to the Nexus until the Old One is returned to slumber, the
            player travels to five regions of Boletaria, killing the powerful
            demons controlling those areas and absorbing their souls to increase
            their power so they can face King Allant. However, the King Allant
            the player faces is revealed to be a demon imposter. After defeating
            the false King Allant, the Maiden in Black takes the player—now
            dubbed the "Slayer of Demons"—to the Old One. The Slayer of Demons
            faces the true King Allant, who has been transformed into a helpless
            blob-like demon, within the Old One's body. The Maiden in Black then
            arrives to put the Old One to sleep again. If the Slayer of Demons
            leaves the Old One, they are hailed as the hero of the restored,
            though damaged, Boletaria, becoming a new Monumental to support the
            world as the knowledge of Soul Arts is lost. If the Slayer of Demons
            kills the Maiden in Black, they serve the Old One and sate their
            hunger for souls as the fog continues to spread.
          </p>
        </div>
      </Container>
    </Layout>
  )
}

export default IndexPage
