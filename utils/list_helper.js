const _ = require('lodash');

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

const mostBlogs = (blogs) => {
  const blogsCount = _.countBy(blogs, 'author');
  const authorName = _.maxBy(
    Object.keys(blogsCount),
    (author) => blogsCount[author]
  );
  const numberOfBlogs = blogsCount[authorName];
  return {
    author: authorName,
    blogs: numberOfBlogs,
  };
};

const mostLikes = (blogs) => {
  const likesCount = _.reduce(
    blogs,
    (result, blog) => {
      if (blog.author in result === false) {
        result[blog.author] = 0;
      }
      result[blog.author] += blog.likes;
      return result;
    },
    {}
  );
  const authorName = _.maxBy(
    Object.keys(likesCount),
    (author) => likesCount[author]
  );
  const numberOfLikes = likesCount[authorName];
  return {
    author: authorName,
    likes: numberOfLikes,
  };
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
};
