import { SVGProps } from "react"

interface CameraIconProps extends SVGProps<SVGSVGElement> {
  size?: number
}

const CameraIcon = ({ size = 20, ...props }: CameraIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.25}
      d="M18.333 7.442c0-.505 0-.757-.1-.874a.417.417 0 0 0-.35-.145c-.153.012-.331.19-.688.548l-3.029 3.028 3.029 3.029c.357.357.535.535.688.547a.417.417 0 0 0 .35-.144c.1-.117.1-.37.1-.874V7.441Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.25}
      d="M1.666 8.166c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.092c.535-.273 1.235-.273 2.635-.273h4.5c1.4 0 2.1 0 2.635.272a2.5 2.5 0 0 1 1.092 1.093c.273.535.273 1.235.273 2.635v3.667c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092c-.535.273-1.235.273-2.635.273h-4.5c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092c-.272-.535-.272-1.235-.272-2.635V8.166Z"
    />
  </svg>
)

export default CameraIcon
