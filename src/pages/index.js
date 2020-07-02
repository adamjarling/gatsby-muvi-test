import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Box, Heading, Text } from "@chakra-ui/core"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Box p={8}>
      <Heading>Im a heading</Heading>
      <Text fontSize="xl">Hello World</Text>
    </Box>
  </Layout>
)

export default IndexPage
