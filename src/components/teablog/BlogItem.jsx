function BlogItem(props) {
  return (
    <div className="blog-main">
      <div className="blog-title">
        <div className="blog-img">
          <img src={props.item.src} alt="" />
        </div>
        <div className="blog-text">
          <div className="blog-text-item">
            <h3 className="blog-h3">{props.item.say}</h3>
            <p>{props.item.author}</p>
          </div>
          <a href="" className="a">
            read
          </a>
        </div>
      </div>
    </div>
  );
}

export default BlogItem;
