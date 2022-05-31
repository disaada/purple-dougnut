import { Layout } from "components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { About as AboutList } from "content";
import parse from "html-react-parser";
import "swiper/css";
import "swiper/css/scrollbar";

const Menu = () => {
  const [slideIdx, setSlideIdx] = useState(0);

  const fadeIn = (target, prop) =>
    gsap.from(target, { duration: 1, opacity: 0, ...prop });

  useEffect(() => {
    if (slideIdx === 0) {
      fadeIn(".about1-up", { y: 500 }).play();
      fadeIn(".about1-down", { y: -500 }).play();
    } else if (slideIdx === 1) {
      fadeIn(".about2-left", { x: 500 }).play();
      fadeIn(".about2-right", { x: -500 }).play();
    } else if (slideIdx === 2) {
      fadeIn(".about3-up", { y: 500 }).play();
      fadeIn(".about3-down", { y: -500 }).play();
    }
  }, [slideIdx]);

  useEffect(() => {
    document.addEventListener("mousemove", move);

    function move(e) {
      this.querySelectorAll(
        ".about1-up, .about1-down, .about2-left, .about2-right, .about3-up, .about3-down"
      ).forEach((layer, idx) => {
        const speed = layer.getAttribute("data-speed");

        const x = (window.innerWidth - e.pageX * speed) / 120;
        const y = (window.innerWidth - e.pageY * speed) / 120;

        if (idx <= 1) {
          layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
        }
        else {
          layer.style.transform = `translateX(${y}px) translateY(${x}px)`;
        }
      });
    }
  }, []);

  return (
    <Layout>
      <div className="home__data menu-slider">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          direction="vertical"
          style={{ height: "100vh" }}
          mousewheel
          modules={[Mousewheel]}
          onSlideChange={(idx) => setSlideIdx(idx.activeIndex)}
          speed={1000}
          className="about-slider"
          onInit={() => {
            fadeIn(".about1-up", { y: 500, delay: 3 }).play();
            fadeIn(".about1-down", { y: -500, delay: 3 }).play();
          }}
        >
          {AboutList.map((val, idx) => (
            <SwiperSlide key={val + idx}>
              {val?.image}
              <div>
                <span>{parse(val.name)}</span>
                <i>{val.desc}</i>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Layout>
  );
};

export default Menu;
