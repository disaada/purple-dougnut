import { Layout } from "components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { About as AboutList } from "content";
import parse from "html-react-parser";
import "swiper/css";
import "swiper/css/scrollbar";

const Menu = () => {
  const boxRef = useRef();
  const [slideIdx, setSlideIdx] = useState(0);

  useEffect(() => {
    gsap.set(".about-up", { autoAlpha: 0 });
    gsap.to(".about-up", {
      duration: 1,
      startAt: { autoAlpha: 0, y: 200 },
      autoAlpha: 1,
      y: "0%",
    });

    gsap.set(".about-down", { autoAlpha: 0 });
    gsap.to(".about-down", {
      duration: 1,
      startAt: { autoAlpha: 0, y: -200 },
      autoAlpha: 1,
      y: "0%",
    });
  }, [slideIdx]);

  return (
    <Layout>
      <div className="home__data menu-slider" ref={boxRef}>
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
