function ListItem(props) {
  return (
    <div>
      <p className="forsays">{props.item.says}</p>
      <h2 className="for-list-h2"><strong>{props.item.author}</strong></h2>
    </div>
  );
}
export default ListItem;