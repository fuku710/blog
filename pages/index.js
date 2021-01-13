import Head from 'next/head'
import NextLink from 'next/link'
import { Box, Text, UnorderedList, ListItem, Link } from '@chakra-ui/react'

import { getPosts } from '../lib/api'

export default function Home({ posts }) {
  return (
    <Box w={2 / 3}>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box as="main" m={4}>
        <Text fontSize="2xl" borderBottom="1px" textAlign="center">
          記事一覧
        </Text>
        <UnorderedList listStyleType="none" m="0">
          {posts.contents.map((post) => (
            <ListItem key={post.id} p="1">
              <NextLink href={`/${post.id}`}>
                <Link fontSize="xl" letterSpacing="2px" color="teal.500">
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
  const posts = await getPosts()
  return { props: { posts } }
}
