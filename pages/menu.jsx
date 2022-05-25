import { Layout } from "components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from 'swiper'
import "swiper/css";
import Image from "next/image";

const Menu = () => {
  return (
    <Layout>
      <div className="home__data menu-slider">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          direction="vertical"
          style={{ height: '75vh' }}
          mousewheel
          modules={[Mousewheel]}
        >
          <SwiperSlide>
            <div></div>
            <Image layout="raw" width={700} height={700} src="/img/purple-basic.png" alt="" />
            <div className="product">
              <p>PURPLE ORIGINAL</p>
              <i>
                Original doughnut with sweet purple sauce and pink sprinkles
              </i>
              <br />
              <br />
              <small>Rp. 10.000</small>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="product">
              <p>PURPLE COFFEE</p>
              <i>
                Hot robusta coffee drink with brown sugar and packed with cool
                purple cup
              </i>
              <br />
              <br />
              <small>Rp. 20.000</small>
            </div>
            <Image layout="raw" width={700} height={700} src="/img/purple-coffee-cup.png" alt="" />
            <div></div>
          </SwiperSlide>
          <SwiperSlide>
            <div></div>
            <Image layout="raw" width={700} height={700} src="/img/purple-box.png" alt="" />
            <div className="product">
              <p>PURPLE SQUARE</p>
              <i>Square shaped doughnut filled with vanilla cream</i>
              <br />
              <br />
              <small>Rp. 15.000</small>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="product">
              <p>PURPLE COFFEE LITER</p>
              <i>Hot robusta coffee drink with brown sugar but liter version</i>
              <br />
              <br />
              <small>Rp. 100.000</small>
            </div>
            <Image layout="raw" width={700} height={700} src="/img/purple-coffee-liter.png" alt="" />
            <div></div>
          </SwiperSlide>
          <SwiperSlide>
            <div></div>
            <Image layout="raw" width={700} height={700} src="/img/purple-cross.png" alt="" />
            <div className="product">
              <p>PURPLE CROSS</p>
              <i>Cross shaped doughnut filled with chocolate cream</i>
              <br />
              <br />
              <small>Rp. 15.000</small>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="product">
              <p>PURPLE COFFEE POUCH</p>
              <i>
                From the finest quality west java beans original premium coffee
                hot air roasted without flavoring essence
              </i>
              <br />
              <br />
              <small>Rp. 50.000</small>
            </div>
            <Image layout="raw" width={700} height={700} src="/img/purple-coffee-pouch.png" alt="" />
            <div></div>
          </SwiperSlide>
          <SwiperSlide>
            <div></div>
            <Image layout="raw" width={700} height={700} src="/img/purple-full.png" alt="" />
            <div className="product">
              <p>PURPLE TARO PUFF</p>
              <i>Original shaped but filled with taro cream</i>
              <br />
              <br />
              <small>Rp. 20.000</small>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="product">
              <p>PURPLE TRIANGLE</p>
              <i>Triangle shaped doughnut filled with strawberry cream</i>
              <br />
              <br />
              <small>Rp. 15.000</small>
            </div>
            <Image layout="raw" width={700} height={700} src="/img/purple-triangle.png" alt="" />
            <div></div>
          </SwiperSlide>
        </Swiper>
        text
        {/* <div className="thumb">
          <div className="swiper-wrapper">
            <div className="swiper-slide" style="--i: 1">
              <img src="/assets/img/purple-basic.png" alt="" />
            </div>
            <div className="swiper-slide" style="--i: 2">
              <img src="/assets/img/purple-coffee-cup.png" alt="" />
            </div>
            <div className="swiper-slide" style="--i: 3">
              <img src="/assets/img/purple-box.png" alt="" />
            </div>
            <div className="swiper-slide" style="--i: 4">
              <img src="/assets/img/purple-coffee-liter.png" alt="" />
            </div>
            <div className="swiper-slide" style="--i: 5">
              <img src="/assets/img/purple-cross.png" alt="" />
            </div>
            <div className="swiper-slide" style="--i: 6">
              <img src="/assets/img/purple-coffee-pouch.png" alt="" />
            </div>
            <div className="swiper-slide" style="--i: 7">
              <img src="/assets/img/purple-full.png" alt="" />
            </div>
            <div className="swiper-slide" style="--i: 8">
              <img src="/assets/img/purple-triangle.png" alt="" />
            </div>
          </div>
        </div> */}
      </div>
    </Layout>
  );
};

export default Menu;
