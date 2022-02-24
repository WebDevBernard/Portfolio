import Image from "next/image";
export default function Hero() {
  return (
    <div className="flex justify-evenly items-center flex-col md:flex-row">
      {/* left */}
      <div className="flex flex-col justify-center items-center md:items-start md:w-1/2">
        <h1 className="text-2xl leading-tight tracking-wider">
          <span className="font-bold text-4xl text-indigo-900 mb-24">
            Hello!
          </span>
          <span>
            <br />
            I am Bernard,
            <br />a{" "}
            <span className="underline underline-offset-2 decoration-4 decoration-pink-500">
              software developer
            </span>{" "}
          </span>
          in Vancouver
        </h1>
        <div className="flex justify-start mt-12 md:mt-6">
          <button className="btn btn-primary mr-2">CONTACT ME</button>
          <a
            href="/resume.pdf"
            // target="_blank" rel="noreferrer"
          >
            <button className="btn btn-primary">VIEW RESUME</button>
          </a>
        </div>
        {/* right */}
      </div>
      <Image
        className="h-[360px] md:h-[420px] mt-16 md:object-contain"
        src={
          "https://raw.githubusercontent.com/WebDevBernard/Portfolio/48b9f22660231fc9dfa6e2c7f20f00a91a0998af/docs/programming-animate.svg"
        }
        alt="programmer guy"
      />
    </div>
  );
}
