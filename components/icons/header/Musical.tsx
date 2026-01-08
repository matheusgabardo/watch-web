import { SVGProps } from "react"

interface MusicalIconProps extends SVGProps<SVGSVGElement> {
  size?: number
}

const MusicalIcon = ({ size = 16, ...props }: MusicalIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 7.334v1.333m2.667-2.666v4m2.667-5.334v6.667m2.667-4v1.333m2.666-.666A6.667 6.667 0 1 1 1.334 8a6.667 6.667 0 0 1 13.333 0Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default MusicalIcon
