import { SVGProps } from "react"

const XIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M13.969 10.157 22.707 0h-2.07l-7.588 8.82L6.99 0H0l9.164 13.336L0 23.988h2.07l8.013-9.314 6.4 9.314h6.989l-9.504-13.83h.001Zm-2.836 3.297-.929-1.328L2.817 1.559h3.18l5.962 8.528.929 1.328 7.75 11.085h-3.181l-6.324-9.046Z"
    />
  </svg>
)

export default XIcon
