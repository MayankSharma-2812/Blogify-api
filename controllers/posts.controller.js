const samplePosts = [
  { id: 1, title: "First post", content: "Hello world" },
  { id: 2, title: "Second post", content: "Another post" }
]

export const getAllPosts = async (req, res) => {
  res.status(200).json({ posts: samplePosts })
}

export const getPostById = async (req, res) => {
  const { postId } = req.params
  const id = Number(postId)
  const post = samplePosts.find((p) => p.id === id)

  if (!post) {
    return res.status(404).json({ message: `Post with ID ${postId} not found` })
  }

  res.status(200).json({ post })
}
