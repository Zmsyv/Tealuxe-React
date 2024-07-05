import BlogItem from "./BlogItem";

let blogData = [
  {
    src: "./src/assets/images/blog1.svg",
    say: "Tea Time Travels: Funny Moments from Around the World",
    author: "by Robinson Crusoe",
  },
  {
    src: "./src/assets/images/blog1.svg",
    say: "The Role of Tea in Mental Health",
    author: "by Joker",
  },
  {
    src: "./src/assets/images/blog1.svg",
    say: "Tea-rific Tales: Hilarious Stories from Tea Lovers",
    author: "by Casper the Friendly Ghost",
  },
  {
    src: "./src/assets/images/blog1.svg",
    say: "Tea and Caffeine: Effects on the Brain and Behavior",
    author: "by Author Authorius",
  },
];

function Blog() {
  return (
    <div className="for-blog">
      {blogData.map((blog, index) => (
        <BlogItem item={blog} key={index} />
      ))}
    </div>
  );
}

export default Blog;
