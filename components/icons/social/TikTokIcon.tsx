import { SVGProps } from "react"

const TikTokIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M20.534 9.71c-.196.019-.393.029-.59.03a6.407 6.407 0 0 1-5.36-2.897v9.865a7.292 7.292 0 1 1-7.292-7.291c.152 0 .3.013.45.023v3.593c-.15-.018-.296-.045-.45-.045a3.722 3.722 0 0 0 0 7.443c2.055 0 3.87-1.62 3.87-3.676L11.2 0h3.437a6.403 6.403 0 0 0 5.902 5.717V9.71"
    />
  </svg>
)

export default TikTokIcon
