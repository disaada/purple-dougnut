/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Nav, Loader } from "components";
import { useRouter } from "next/router";
import { gsap } from "gsap";

const Layout = ({ children }) => {
  const router = useRouter();
  const [el, setEl] = useState(null);
  const q = gsap.utils.selector(el);

  useEffect(() => {
    let loader;
    let slideIndex = 0;
    loader = window.document.getElementById("loader");

    if (loader) {
      changeIcon();
      loader.style.top = 0;
      loader.style.transition = "1.5s";

      setTimeout(() => {
        loader.style.top = "100%";
      }, 2000);

      function changeIcon() {
        let i;
        let icon = window.document.getElementsByClassName("icon-loader");

        for (i = 0; i < icon.length; i++) {
          icon[i].style.display = "none";
        }

        slideIndex++;
        if (slideIndex > icon.length) {
          slideIndex = 1;
        }
        icon[slideIndex - 1].style.display = "inline";
        const moveIcon = setTimeout(changeIcon, 300);
        if (slideIndex === 8) clearTimeout(moveIcon);
      }
    }
  }, [router.asPath]);

  useEffect(() => {
    // FADEIN PAGE
    if (!el) return;
    gsap.from(q(".home__data"), { opacity: 0, duration: 1, delay: 3, y: 30 });
    gsap.from(q(".home__button"), { opacity: 0, duration: 1, delay: 5, y: 30 });
    gsap.from(q(".home__img"), { opacity: 0, duration: 1, delay: 3, y: 30 });
  }, [el])

  return (
    <div ref={setEl}>
      <Loader />
      <header className="l-header">
        <nav className="nav bd-grid">
          <div>
            <a href="/" className="nav__logo">
              Purple Donut
            </a>
          </div>

          <div className="nav__toggle" id="nav-toggle">
            <i className="bx bx-menu"></i>
          </div>

          <div className="nav__menu" id="nav-menu">
            <div className="nav__close" id="nav-close">
              <i className="bx bx-x"></i>
            </div>
            <Nav />
          </div>
        </nav>
      </header>

      <main>
        <section className="home">
          <div id="content" className="home__container bd-grid">
            {children}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Layout;
