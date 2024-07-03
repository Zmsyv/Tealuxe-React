function PrioritiseListItem(props) {
  return (
    <div>
      <div className="single">
        <div className="priortise-heading">
          <h2>{props.item.head}</h2>
        </div>
        <div className="description">
          <strong>{props.item.body}</strong>
        </div>
        <div className="priortise-img">
          <img src={props.item.src} alt="" />
        </div>
      </div>
    </div>
  );
}

export default PrioritiseListItem;
