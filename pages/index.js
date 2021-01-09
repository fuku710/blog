import Head from 'next/head'
import Link from 'next/link'

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>記事一覧</div>
        <ul>
          {posts.contents.map((post) => (
            <li>
              <Link href={`/${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${process.env.CMS_BASE_URL}/posts`, {
    headers: { 'X-API-KEY': process.env.CMS_API_KEY },
  })
  const posts = await res.json()

  return { props: { posts } }
}
