import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
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
              <a
                className="nav__link"
                /* onClick={() =>
                  router
                    .reload()
                    .then(() => router.push(val[0], "", { shallow: true }))
                } */
              >
                {val[1]}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
