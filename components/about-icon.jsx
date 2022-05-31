import Image from "next/image";

const AboutIcon = () => {
  return (
    <div className="about-icon">
      <Image
        layout="raw"
        width={5000}
        height={5000}
        src="/img/plant-1.png"
        className="about1-down"
        data-speed="5"
        alt=""
        style={{
          top: '3%',
          left: '-5%',
          width: '30%'
        }}
      />
      <Image
        layout="raw"
        width={5000}
        height={5000}
        src="/img/plant-5.png"
        className="about1-down"
        data-speed="5"
        alt=""
        style={{
          top: '7%',
          right: '1%',
          width: '20%'
        }}
      />
      <Image
        layout="raw"
        width={5000}
        height={5000}
        src="/img/plant-4.png"
        className="about1-up"
        data-speed="5"
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
        className="about1-up"
        data-speed="-5"
        alt=""
        style={{
          top: '55%',
          right: '5%',
          width: '20%'
        }}
      />
    </div>
  );
};

export default AboutIcon;
