import { Layout } from "components";
import Image from "next/image";
import { useRef, useEffect } from "react";

const Order = () => {
  const boxRef = useRef();

  useEffect(() => {
    const el = document.getElementById("order-list-1");
    el.addEventListener("mouseover", (evt) => showIcon(el), false);
    el.addEventListener("mouseout", (evt) => hideIcon(el), false);

    const el2 = document.getElementById("order-list-2");
    el2.addEventListener("mouseover", (evt) => showIcon(el2), false);
    el2.addEventListener("mouseout", (evt) => hideIcon(el2), false);

    const el3 = document.getElementById("order-list-3");
    el3.addEventListener("mouseover", (evt) => showIcon(el3), false);
    el3.addEventListener("mouseout", (evt) => hideIcon(el3), false);

    function showIcon(el) {
      const wrapper = el;
      const img = wrapper.getElementsByTagName("img");
      const a = wrapper.getElementsByTagName("a");
      a[0].style.opacity = 1;
      [...img].map((image) => {
        image.style.transform = 'scale(1)'
        image.style.transition = '0.5s'
      });
    }

    function hideIcon(el) {
      const wrapper = el;
      const img = wrapper.getElementsByTagName("img");
      const a = wrapper.getElementsByTagName("a");
      a[0].style.opacity = 0.5  ;
      [...img].map((image) => {
        image.style.transform = 'scale(0)'
        image.style.transition = '0.5s'
      });
    }
  }, []);

  return (
    <Layout>
      <div
        ref={boxRef}
        className="home__data order-wrapper"
        style={{ textAlign: "center" }}
      >
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
    </Layout>
  );
};

export default Order;
