import HeaderNavItem from "./HeaderNavItem";

let navData = [
  {
    name: "Black",
    href: "#",
  },
  {
    name: "Green",
    href: "#",
  },
  {
    name: "White",
    href: "#",
  },
  {
    name: "Oolong",
    href: "#",
  },
  {
    name: "Pu-erh",
    href: "#",
  },
];

function HeaderNav() {
  return (
    <ul className="header-content">
      {navData.map((nav, index) => (
        <HeaderNavItem item={nav} key={index} />
      ))}
    </ul>
  );
}

export default HeaderNav;
