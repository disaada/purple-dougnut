import Image from "next/image";

const AboutIcon3 = () => {
  return (
    <div className="about about-icon">
      <Image
        layout="raw"
        width={5000}
        height={5000}
        src="/img/sugar-1.png"
        className="about3-down"
        data-speed="-5"
        alt=""
        style={{
          top: '0',
          left: '30%',
          width: '30%'
        }}
      />
      <Image
        layout="raw"
        width={5000}
        height={5000}
        src="/img/sugar-2.png"
        className="about3-up"
        data-speed="5"
        alt=""
        style={{
          top: '60%',
          left: '0',
          width: '30%'
        }}
      />
      <Image
        layout="raw"
        width={5000}
        height={5000}
        src="/img/sugar-3.png"
        className="about3-up"
        data-speed="5"
        alt=""
        style={{
          top: '60%',
          right: '0',
          width: '30%'
        }}
      />
    </div>
  );
};

export default AboutIcon3;
