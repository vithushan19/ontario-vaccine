import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Ontario Vaccines" />
    <p>
      This a list of select pharmacies that are offering the
      @AstraZeneca/COVISHIELD vaccine in Ontario. Most of these pharmacies are
      only accepting appointments only. If there is any issues with the data
      displayed below please{" "}
      <a href="mailto:vithushan19@gmail.com">contact me</a> and let me know.
    </p>
    <iframe
      width="100%"
      height="520"
      frameborder="0"
      src="https://vithushan19.carto.com/builder/c32f064f-6d14-4852-8131-e3e210f55298/embed"
      allowfullscreen
      webkitallowfullscreen
      mozallowfullscreen
      oallowfullscreen
      msallowfullscreen
    ></iframe>
  </Layout>
)

export default IndexPage
