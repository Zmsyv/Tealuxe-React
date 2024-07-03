function BlogItem(props) {
  return (
    <div className="blog-main">
      <div className="blog-title">
        <div class="blog-img">
          <img src={props.item.src} alt="" />
        </div>
        <div class="blog-text">
          <div class="blog-text-item">
            <h3>{props.item.say}</h3>
            <p>{props.item.author}</p>
          </div>
          <a href="" class="a">
            read
          </a>
        </div>
      </div>
    </div>
  );
}

export default BlogItem;
