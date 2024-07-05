function HeaderNavItem(props) {
  return (
    <li className="header-title">
      <a href={props.item.href} className="header-link">
        {props.item.name}
      </a>
    </li>
  );
}

export default HeaderNavItem;
