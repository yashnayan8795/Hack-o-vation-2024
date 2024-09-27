import Image from 'next/image';
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-gradient-to-br from-gray-950 to-black text-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://i.pinimg.com/736x/3f/c7/83/3fc783d4c520e6cab16d5d4dd32b927e.jpg"
          alt="Newspaper background"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Content aligned to the left */}
      <div className="container relative z-10 text-center pl-10 w-1/2 mx-auto"> {/* Center aligned */}
  <h1 className="mb-5 text-3xl font-bold leading-tight text-1000 sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight font-oswald">
    Transform Your Insights with AI-Powered Feedback
  </h1>

  <p className="mb-12 text-base !leading-relaxed text-gray-100 sm:text-lg md:text-xl font-oswald">
    "The News Sentiment Analyzer is a web-based platform that analyzes the sentiment of news articles, classifying them as positive, neutral, or negative. It allows users to input URLs, upload articles, or scrape content for analysis. When the sentiment is excessively negative, the system automatically generates email alerts to notify the relevant departments, enabling them to take timely actions such as issuing responses or investigating further. The platform also includes a reports dashboard where users can track flagged articles and monitor actions taken. Customizable settings allow users to adjust sentiment thresholds and manage email notifications for effective news monitoring."
  </p>
</div>


     

      {/* SVG circles */}
      <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
        <svg
          width="450"
          height="556"
          viewBox="0 0 450 556"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="277"
            cy="63"
            r="225"
            fill="url(#paint0_linear_25:217)"
          />
          <circle
            cx="17.9997"
            cy="182"
            r="18"
            fill="url(#paint1_radial_25:217)"
          />
          <circle
            cx="76.9997"
            cy="288"
            r="34"
            fill="url(#paint2_radial_25:217)"
          />
          <circle
            cx="325.486"
            cy="302.87"
            r="180"
            transform="rotate(-37.6852 325.486 302.87)"
            fill="url(#paint3_linear_25:217)"
          />
          <circle
            opacity="0.8"
            cx="184.521"
            cy="315.521"
            r="132.862"
            transform="rotate(114.874 184.521 315.521)"
            stroke="url(#paint4_linear_25:217)"
          />
          <circle
            opacity="0.8"
            cx="356"
            cy="290"
            r="179.5"
            transform="rotate(-30 356 290)"
            stroke="url(#paint5_linear_25:217)"
          />
          <circle
            opacity="0.8"
            cx="191.659"
            cy="302.659"
            r="133.362"
            transform="rotate(133.319 191.659 302.659)"
            fill="url(#paint6_linear_25:217)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_25:217"
              x1="-54.5003"
              y1="-178"
              x2="222"
              y2="288"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1a1a1a" />
              <stop offset="1" stopColor="#1a1a1a" stopOpacity="0" />
            </linearGradient>
            <radialGradient
              id="paint1_radial_25:217"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
            >
              <stop offset="0.145833" stopColor="#1a1a1a" stopOpacity="0" />
              <stop offset="1" stopColor="#1a1a1a" stopOpacity="0.08" />
            </radialGradient>
            <radialGradient
              id="paint2_radial_25:217"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
            >
              <stop offset="0.145833" stopColor="#1a1a1a" stopOpacity="0" />
              <stop offset="1" stopColor="#1a1a1a" stopOpacity="0.08" />
            </radialGradient>
            <linearGradient
              id="paint3_linear_25:217"
              x1="226.775"
              y1="-66.1548"
              x2="292.157"
              y2="351.421"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1a1a1a" />
              <stop offset="1" stopColor="#1a1a1a" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_25:217"
              x1="184.521"
              y1="182.159"
              x2="184.521"
              y2="448.882"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1a1a1a" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_25:217"
              x1="356"
              y1="110"
              x2="356"
              y2="470"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1a1a1a" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_25:217"
              x1="118.524"
              y1="29.2497"
              x2="166.965"
              y2="338.63"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1a1a1a" />
              <stop offset="1" stopColor="#1a1a1a" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Bottom SVG */}
      <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
        <svg
          width="364"
          height="201"
          viewBox="0 0 364 201"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
            stroke="url(#paint0_linear_25:218)"
          />
          <path
            d="M-24.1107 72.3303C3.65992 66.4798 71.3965 64.9086 120.178 105.427C181.155 156.076 199.59 162.093 234.333 166.607C269.076 171.12 307.718 183.657 332.889 212.24"
            stroke="url(#paint1_linear_25:218)"
          />
          <path
            d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
            stroke="url(#paint2_linear_25:218)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_25:218"
              x1="362.553"
              y1="6.05783"
              x2="78.7587"
              y2="155.111"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1a1a1a" />
              <stop offset="1" stopColor="#1a1a1a" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_25:218"
              x1="362.553"
              y1="6.05783"
              x2="78.7587"
              y2="155.111"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1a1a1a" />
              <stop offset="1" stopColor="#1a1a1a" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_25:218"
              x1="362.553"
              y1="6.05783"
              x2="78.7587"
              y2="155.111"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1a1a1a" />
              <stop offset="1" stopColor="#1a1a1a" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}

export default Hero;
