import { SVGProps } from "react";
const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={52}
    height={52}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <rect
        width={52}
        height={52}
        fill="#151411"
        fillOpacity={0.6}
        rx={26}
        transform="matrix(-1 0 0 1 52 0)"
      />
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="m22.91 33.92 6.52-6.52c.77-.77.77-2.03 0-2.8l-6.52-6.52"
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
          result="effect1_backgroundBlur_2_5589"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_backgroundBlur_2_5589"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default ArrowRight;
