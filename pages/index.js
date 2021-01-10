import Head from 'next/head'
import NextLink from 'next/link'

import { Box, Text, UnorderedList, ListItem, Link } from '@chakra-ui/react'

export default function Home({ posts }) {
  return (
    <Box>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box as="main" m="4">
        <Text fontSize="2xl">記事一覧</Text>
        <UnorderedList>
          {posts.contents.map((post) => (
            <ListItem key={post.id}>
              <NextLink href={`/${post.id}`}>
                <Link>
                  {post.title} [{post.createdAt.substr(0, 10)}]
                </Link>
              </NextLink>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </Box>
  )
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${process.env.CMS_BASE_URL}/posts`, {
    headers: { 'X-API-KEY': process.env.CMS_API_KEY },
  })
  const posts = await res.json()

  return { props: { posts } }
}
