/* eslint-disable @next/next/no-html-link-for-pages */
import { useEffect } from "react";
import Image from "next/image";
import { Layout } from "components";

export default function Home() {
  useEffect(() => {
    document.addEventListener("mousemove", move);

    function move(e) {
      this.querySelectorAll(".move").forEach((layer, idx) => {
        const speed = layer.getAttribute("data-speed");

        const x = (window.innerWidth - e.pageX * speed) / 120;
        const y = (window.innerWidth - e.pageY * speed) / 120;

        if (idx <= 1)
          layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
        else layer.style.transform = `translateX(${y}px) translateY(${x}px)`;
      });
    }
  }, []);

  return (
    <Layout>
      <div className="home__img">
        <Image
          layout="raw"
          width={1000}
          height={1000}
          src="/img/1.png"
          alt=""
          data-speed="5"
          className="move"
        />
        <Image
          layout="raw"
          width={1000}
          height={1000}
          src="/img/3.png"
          alt=""
          data-speed="-5"
          className="move"
        />
        <Image
          layout="raw"
          width={1000}
          height={1000}
          src="/img/4.png"
          alt=""
          data-speed="5"
          className="move"
        />
        <Image
          layout="raw"
          width={1000}
          height={1000}
          src="/img/5.png"
          alt=""
          data-speed="-5"
          className="move"
        />
        <Image
          layout="raw"
          width={1000}
          height={1000}
          src="/img/2.png"
          alt=""
          data-speed="2.5"
          className="move"
        />
      </div>

      <div className="home__data">
        <h1 className="home__title">Purple Donut</h1>
        <p className="home__description">
          Fresh cute donut everyday. <br />
          Ready to delivered or take away.
        </p>
        <a href="/menu" className="home__button">
          Discover Now
        </a>
      </div>
    </Layout>
  );
}
