function TeaListItem(props) {
  return (
    <div>
      <img className="fortips" src={props.item.src} alt="" />
      <h2 className="forh2">{props.item.name}</h2>
    </div>
  );
}

export default TeaListItem;
