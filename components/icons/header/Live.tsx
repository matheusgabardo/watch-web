import { SVGProps } from "react"

interface LiveIconProps extends SVGProps<SVGSVGElement> {
  size?: number
}

const LiveIcon = ({ size = 16, ...props }: LiveIconProps) => (
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
        d="M10.828 3.862a4 4 0 0 1 0 5.657m-5.657 0a4 4 0 0 1 0-5.657m-1.885 7.543a6.667 6.667 0 0 1 0-9.428m9.428 0a6.667 6.667 0 0 1 0 9.428M8 8.024a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667Zm0 0v6"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default LiveIcon
