import Image from "next/image";

const AboutIcon2 = () => {
  return (
    <div className="about about-icon">
      <Image
        layout="raw"
        width={5000}
        height={5000}
        src="/img/flour-1.png"
        className="about-down"
        alt=""
        style={{
          top: '120px',
          left: '-50px',
          width: '35%'
        }}
      />
      <Image
        layout="raw"
        width={5000}
        height={5000}
        src="/img/flour-2.png"
        className="about-down"
        alt=""
        style={{
          top: '80px',
          right: '-50px',
          width: '30%'
        }}
      />
      <Image
        layout="raw"
        width={5000}
        height={5000}
        src="/img/flour-3.png"
        className="about-up"
        alt=""
        style={{
          top: '55%',
          right: '20%',
          width: '30%'
        }}
      />
    </div>
  );
};

export default AboutIcon2;
