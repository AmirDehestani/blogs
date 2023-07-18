const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  const reducer = (total, blog) => {
    return total + blog.likes;
  };
  return blogs.reduce(reducer, 0);
};

const favoriteBlog = (blogs) => {
  let favoriteSoFar = blogs[0];
  blogs.forEach((blog) => {
    if (blog.likes > favoriteSoFar.likes) {
      favoriteSoFar = blog;
    }
  });
  return favoriteSoFar;
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
};
