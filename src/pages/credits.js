import React from "react"
import Helmet from "react-helmet"
import Layout from "../templates/Layout"
import Container from "../components/Container"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { withLoginStateContext } from "../contexes/LoginStateContext"

const Credits = () => (
  <Layout>
    <Container>
      <Helmet title="Credits" />
      <h1>Credits</h1>
      <p>
        The DevOps with Docker course was created by{" "}
        <a href="https://github.com/jakousa">Jami Kousa</a> with the help of
        University of Helsinki's Tietojenk√§sittelytieteen osaston
        sovelluskehitysakatemia (Toska) and{" "}
        <a href="https://github.com/docker-hy/docker-hy.github.io/graphs/contributors">
          numerous course attendees
        </a>
        . This material is based on{" "}
        <a href="https://gist.github.com/matti/0b44eb865d70d98ffe0351fd8e6fa35d">
          gist
        </a>{" "}
        by <a href="https://github.com/matti">Matti Paksula</a>. You can help{" "}
        <a href="/contributing">develop</a> the course material as well.
      </p>
      <p>
        As of 2022 the course was handed off to{" "}
        <a href="https://github.com/mluukkai">Matti Luukkainen</a> the legendary
        creator of <a href="https://fullstackopen.com">Full Stack Open</a>. You
        can contact him on{" "}
        <a href="mailto:matti.luukkainen@helsinki.fi">
          matti.luukkainen@helsinki.fi
        </a>
        .
      </p>
      <p>
        This material is following the official Docker guidelines presented on
        the{" "}
        <a href="https://www.docker.com/legal/trademark-guidelines">
          official website
        </a>
        . If you find anything conflicting or otherwise prohibited use, please
        inform us and we'll make the required changes.
      </p>
      <p>
        This material is licenced under{" "}
        <a
          rel="license"
          href="http://creativecommons.org/licenses/by-nc-sa/3.0/"
        >
          Creative Commons BY-NC-SA 3.0 -licence
        </a>
        , so you can freely use and distribute the material, as long as original
        creators are credited. If you make changes to material and you want to
        distribute altered version it must be licenced under the same licence.
        Usage of material for commercial use is prohibited without permission.
      </p>

      <h2>Kurssilla k√§yt√∂ss√§ oleva teknologia</h2>

      <p>
        Kurssisivuston ovat tehneet{" "}
        <OutboundLink
          href="https://github.com/nygrenh"
          target="_blank"
          rel="noopener noreferrer"
        >
          Henrik Nygren
        </OutboundLink>{" "}
        ja{" "}
        <OutboundLink
          href="https://github.com/redande"
          target="_blank"
          rel="noopener noreferrer"
        >
          Antti Leinonen
        </OutboundLink>
        . Helsingin yliopiston{" "}
        <OutboundLink
          href="https://www.helsinki.fi/en/researchgroups/data-driven-education"
          target="_blank"
          rel="noopener noreferrer"
        >
          Agile Education Research -tutkimusryhm√§
        </OutboundLink>{" "}
        on luonut kurssilla k√§ytetyn ohjelmointiteht√§vien palautusymp√§rist√∂n (
        <OutboundLink
          href="https://tmc.mooc.fi"
          target="_blank"
          rel="noopener noreferrer"
        >
          Test My Code
        </OutboundLink>
        ) ja sen liit√§nn√§iset ohjelmointiymp√§rist√∂ihin, kurssimateriaalissa
        olevan kyselyj√§rjestelm√§n ja muut toiminnot.
      </p>
    </Container>
  </Layout>
)

export default withLoginStateContext(Credits)
