import NextLink from 'next/link'
import { Box, Heading, Text, Divider, Link } from '@chakra-ui/react'

import { getPost, getPosts } from '../lib/api'

export default function Post({ post }) {
  return (
    <Box m={4} w={2 / 3}>
      <Box m={2}>
        <Heading>{post.title}</Heading>
        <Text>date : {post.createdAt.substr(0, 10)}</Text>
      </Box>
      <Divider />
      <Box m={2}>
        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </Box>
      <Divider />
      <Box m={2}>
        <NextLink href="/">
          <Link color="teal.500">TOP</Link>
        </NextLink>
      </Box>
    </Box>
  )
}
export async function getStaticPaths(content) {
  const posts = await getPosts()
  const paths = posts.contents.map((post) => `/${post.id}`)
  return { paths, fallback: false }
}
export async function getStaticProps({ params }) {
  const post = await getPost(params.id)
  return { props: { post } }
}
