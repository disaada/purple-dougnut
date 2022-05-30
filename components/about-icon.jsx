import Image from "next/image";

const AboutIcon = () => {
  return (
    <div className="about-icon">
      <Image
        layout="raw"
        width={5000}
        height={5000}
        src="/img/plant-3.png"
        data-speed="5"
        alt=""
        style={{
          top: '80%',
          right: '40%',
          width: '20%'
        }}
      />
      <Image
        layout="raw"
        width={5000}
        height={5000}
        src="/img/plant-1.png"
        className="about-up"
        alt=""
        style={{
          top: '0',
          left: '-9%',
          width: '30%'
        }}
      />
      <Image
        layout="raw"
        width={5000}
        height={5000}
        src="/img/plant-5.png"
        className="about-down"
        alt=""
        style={{
          top: '30px',
          right: '-30px',
          width: '20%'
        }}
      />
      <Image
        layout="raw"
        width={5000}
        height={5000}
        src="/img/plant-4.png"
        className="about-down"
        alt=""
        style={{
          top: '65%',
          left: '80px',
          width: '20%'
        }}
      />
      <Image
        layout="raw"
        width={5000}
        height={5000}
        src="/img/plant-2.png"
        className="about-down"
        alt=""
        style={{
          top: '55%',
          right: '0',
          width: '20%'
        }}
      />
    </div>
  );
};

export default AboutIcon;
