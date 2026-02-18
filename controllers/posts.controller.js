// GET /api/v1/posts
export const getAllPosts = (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      message: "All posts fetched successfully"
    }
  });
};


// GET /api/v1/posts/:id
export const getPostById = (req, res) => {
  const postId = req.params.id;

  res.status(200).json({
    success: true,
    data: {
      postId: postId
    }
  });
};
