import Image from "next/image";

const Loader = () => {
  return (
    <div id="loader" className="home__container bd-grid">
      <div>
        <Image
          width={500}
          height={500}
          className="icon-loader"
          src="/img/purple-basic.png"
          alt=""
          layout="raw"
        />
        <Image
          width={500}
          height={500}
          className="icon-loader"
          src="/img/purple-coffee-cup.png"
          alt=""
          layout="raw"
        />
        <Image
          width={500}
          height={500}
          className="icon-loader"
          src="/img/purple-box.png"
          alt=""
          layout="raw"
        />
        <Image
          width={500}
          height={500}
          className="icon-loader"
          src="/img/purple-coffee-liter.png"
          alt=""
          layout="raw"
        />
        <Image
          width={500}
          height={500}
          className="icon-loader"
          src="/img/purple-cross.png"
          alt=""
          layout="raw"
        />
        <Image
          width={500}
          height={500}
          className="icon-loader"
          src="/img/purple-coffee-pouch.png"
          alt=""
          layout="raw"
        />
        <Image
          width={500}
          height={500}
          className="icon-loader"
          src="/img/purple-full.png"
          alt=""
          layout="raw"
        />
        <Image
          width={500}
          height={500}
          className="icon-loader"
          src="/img/purple-triangle.png"
          alt=""
          layout="raw"
        />
        <div className="loader-text">loading...</div>
      </div>
    </div>
  );
};

export default Loader;
