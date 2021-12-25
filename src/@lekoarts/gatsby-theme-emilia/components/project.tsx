/** @jsx jsx */
import React from "react"
import { jsx, Container } from "theme-ui"
import { animated, useSpring, config } from "react-spring"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import  Layout  from "@lekoarts/gatsby-theme-emilia/src/components/layout"
import  HeaderProject  from "@lekoarts/gatsby-theme-emilia/src/components/header-project"
import  ProjectPagination  from "@lekoarts/gatsby-theme-emilia/src/components/project-pagination"
import  SEO  from "@lekoarts/gatsby-theme-emilia/src/components/seo"

type ProjectProps = {
  data: {
    project: {
      body: string
      excerpt: string
      date: string
      slug: string
      title: string
      areas: string[]
      cover: {
        childImageSharp: {
          resize: {
            src: string
          }
        }
      }
    }
    images: {
      nodes: {
        name: string
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }[]
    }
  }
  pageContext: {
    prev: {
      slug: string
      parent: {
        fileAbsolutePath: string
      }
      title: string
      cover: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
    }
    next: {
      slug: string
      parent: {
        fileAbsolutePath: string
      }
      title: string
      cover: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
    }
  }
  [key: string]: any
}

const Project = ({ data: { project, images }, pageContext: { prev, next } }: ProjectProps) => {
  const imageFade = useSpring({ config: config.slow, delay: 800, from: { opacity: 0 }, to: { opacity: 1 } })

  return (
    <Layout>
      <SEO
        title={project.title}
        description={project.excerpt}
        pathname={project.slug}
        image={project.cover.childImageSharp.resize.src}
      />
      <HeaderProject title={project.title} description={project.body} areas={project.areas} date={project.date} />
      <Container sx={{ mt: [`-6rem`, `-6rem`, `-8rem`] }}>
        <ProjectPagination prev={prev} next={next} />
      </Container>
    </Layout>
  )
}

export default Project