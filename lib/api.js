export async function getPosts() {
  const response = await fetch(`${process.env.CMS_BASE_URL}/posts`, {
    headers: { 'X-API-KEY': process.env.CMS_API_KEY },
  })
  return response.json()
}

export async function getPost(id) {
  const response = await fetch(`${process.env.CMS_BASE_URL}/posts/${id}`, {
    headers: { 'X-API-KEY': process.env.CMS_API_KEY },
  })
  return response.json()
}

export async function getPostBySlug(slug) {
  const posts = await getPosts()
  const post = posts.contents.find((post) => post.slug === slug)
  return post
}
