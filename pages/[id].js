import Link from 'next/link'

export default function Post({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
      <Link href="/">
        <a>Top</a>
      </Link>
    </div>
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
