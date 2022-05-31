/* eslint-disable react-hooks/exhaustive-deps */
import { Layout } from "components";
import Image from "next/image";
import { useEffect } from "react";
import { gsap } from "gsap";

const Order = () => {
  const orderClass = ["order-list-1", "order-list-2", "order-list-3"];

  function showIcon(el) {
    const wrapper = el;
    const img = wrapper.getElementsByTagName("img");
    const a = wrapper.getElementsByTagName("a");
    a[0].style.opacity = 1;
    [...img].map((image) => {
      image.style.transform = "scale(1)";
      image.style.transition = "0.5s";
    });
  }

  function hideIcon(el) {
    const wrapper = el;
    const img = wrapper.getElementsByTagName("img");
    const a = wrapper.getElementsByTagName("a");
    a[0].style.opacity = 0.5;
    [...img].map((image) => {
      image.style.transform = "scale(0)";
      image.style.transition = "0.5s";
    });
  }

  const fadeIn = (target, prop) => {
    gsap.from(target, { duration: 1, opacity: 0, delay: 3, ...prop });
  };

  useEffect(() => {
    fadeIn(".side-icon-left", { x: -500 });
    fadeIn(".side-icon-right", { x: 500 });

    orderClass.map((classname) => {
      const el = document.getElementById(classname);
      el.addEventListener("mouseover", (evt) => showIcon(el), false);
      el.addEventListener("mouseout", (evt) => hideIcon(el), false);
    });
  }, []);

  return (
    <Layout>
      <Image
        layout="raw"
        width={500}
        height={500}
        src="/img/purple-cross.png"
        alt=""
        className="side-icon-left"
        style={{ width: "50vh", position: "absolute", left: "-3%" }}
      />
      <div className="home__data order-wrapper" style={{ textAlign: "center" }}>
        <div id="order-list-1">
          <Image
            layout="raw"
            width={100}
            height={100}
            src="/img/purple-basic.png"
            alt=""
          />
          <a
            href="https://food.grab.com/id/en/restaurant/purple-doughnut"
            target="_blank"
            rel="noreferrer"
          >
            GRAB FOOD
          </a>
          <Image
            layout="raw"
            width={100}
            height={100}
            src="/img/purple-coffee-cup.png"
            alt=""
          />
        </div>
        <div id="order-list-2">
          <Image
            layout="raw"
            width={100}
            height={100}
            src="/img/purple-coffee-liter.png"
            alt=""
          />
          <a
            href="https://gofood.co.id/purple-doughnut"
            target="_blank"
            rel="noreferrer"
          >
            GO-FOOD
          </a>
          <Image
            layout="raw"
            width={100}
            height={100}
            src="/img/purple-box.png"
            alt=""
          />
        </div>
        <div id="order-list-3">
          <Image
            layout="raw"
            width={100}
            height={100}
            src="/img/purple-coffee-pouch.png"
            alt=""
          />
          <a
            href="https://shopee.co.id/m/shopeefood"
            target="_blank"
            rel="noreferrer"
          >
            SHOPEE FOOD
          </a>
          <Image
            layout="raw"
            width={100}
            height={100}
            src="/img/purple-full.png"
            alt=""
          />
        </div>
      </div>
      <Image
        layout="raw"
        width={500}
        height={500}
        src="/img/purple-basic.png"
        alt=""
        className="side-icon-right"
        style={{ width: "50vh", position: "absolute", right: "-2%" }}
      />
    </Layout>
  );
};

export default Order;
