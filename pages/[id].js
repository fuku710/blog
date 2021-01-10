import NextLink from 'next/link'

import { Box, Heading, Text, Divider, Link } from '@chakra-ui/react'

export default function Post({ post }) {
  return (
    <Box m="4">
      <Box m="2">
        <Heading>{post.title}</Heading>
        <Text>date : {post.createdAt.substr(0, 10)}</Text>
      </Box>
      <Divider />
      <Box m="2">
        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </Box>
      <Divider />
      <Box m="2">
        <NextLink href="/">
          <Link color="teal.500">TOP</Link>
        </NextLink>
      </Box>
    </Box>
  )
}
export async function getStaticPaths(content) {
  const res = await fetch(`${process.env.CMS_BASE_URL}/posts`, {
    headers: { 'X-API-KEY': process.env.CMS_API_KEY },
  })
  const posts = await res.json()
  const paths = posts.contents.map((post) => `/${post.id}`)

  return { paths, fallback: false }
}
export async function getStaticProps({ params }) {
  const res = await fetch(`${process.env.CMS_BASE_URL}/posts/${params.id}`, {
    headers: { 'X-API-KEY': process.env.CMS_API_KEY },
  })
  const post = await res.json()

  return { props: { post } }
}
