import { SVGProps } from "react";
const ArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <rect width={52} height={52} fill="#151411" fillOpacity={0.6} rx={26} />
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="m29.09 33.92-6.52-6.52c-.77-.77-.77-2.03 0-2.8l6.52-6.52"
      />
    </g>
    <defs>
      <filter
        id="a"
        width={82}
        height={82}
        x={-15}
        y={-15}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={7.5} />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_2_5587"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_backgroundBlur_2_5587"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default ArrowLeft;
