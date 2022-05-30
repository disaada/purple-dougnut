import Link from "next/link";

const Nav = () => {
  const menu = [
    ["/", "Home"],
    ["/menu", "Product"],
    ["/about", "About"],
  ];

  return (
    <div>
      <ul className="nav__list">
        {menu.map((val, idx) => (
          <li key={val + idx} className="nav__item">
            <Link href={val[0]}>
              <a className="nav__link">{val[1]}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
