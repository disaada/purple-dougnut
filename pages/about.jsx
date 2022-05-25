import { Layout } from "components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Thumbs } from "swiper";
import Image from "next/image";
import { useRef, useEffect, useState, Fragment } from "react";
import { gsap } from "gsap";
import { Menu as MenuList } from "content";
import "swiper/css";
import "swiper/css/thumbs";

const Menu = () => {
  const boxRef = useRef();
  const [slideIdx, setSlideIdx] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState();

  useEffect(() => {
    gsap.set(".product", { autoAlpha: 0 });
    gsap.to(".product", {
      duration: 1,
      startAt: { autoAlpha: 0, y: -100 },
      autoAlpha: 1,
      y: "4%",
    });
  }, [slideIdx]);

  return (
    <Layout>
      <div className="home__data menu-slider" ref={boxRef}>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          direction="vertical"
          style={{ height: "75vh" }}
          mousewheel
          modules={[Mousewheel, Thumbs]}
          onSlideChange={(idx) => setSlideIdx(idx.activeIndex)}
          thumbs={{ swiper: thumbsSwiper }}
        >
          {MenuList.map((val, idx) => (
            <SwiperSlide key={val + idx}>
              <div className={idx % 2 === 0 ? "product" : ""}>
                {idx % 2 === 0 && (
                  <Fragment>
                    <p>{val.name}</p>
                    <i>{val.desc}</i>
                    <br />
                    <br />
                    <small>{val.price}</small>
                  </Fragment>
                )}
              </div>
              <Image
                layout="raw"
                width={700}
                height={700}
                src={val.url}
                alt=""
              />
              <div className={idx % 2 !== 0 ? "product" : ""}>
                {idx % 2 !== 0 && (
                  <Fragment>
                    <p>{val.name}</p>
                    <i>{val.desc}</i>
                    <br />
                    <br />
                    <small>{val.price}</small>
                  </Fragment>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          spaceBetween={50}
          slidesPerView={8}
          onSwiper={setThumbsSwiper}
          modules={[Thumbs]}
          style={{ height: "20vh" }}
          watchSlidesProgress
          className="thumb"
        >
          {MenuList.map((val, idx) => (
            <SwiperSlide key={val + idx}>
              <Image
                layout="raw"
                width={700}
                height={700}
                src={val.url}
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Layout>
  );
};

export default Menu;
