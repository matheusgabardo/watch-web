import { SVGProps } from "react"

const SettingsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12.036 9.636a.9.9 0 0 0 .18.993l.033.033a1.09 1.09 0 1 1-1.543 1.543l-.033-.032a.9.9 0 0 0-.993-.18.9.9 0 0 0-.545.823v.093a1.091 1.091 0 0 1-2.182 0v-.049a.9.9 0 0 0-.59-.824.9.9 0 0 0-.992.18l-.033.033a1.091 1.091 0 1 1-1.543-1.543l.032-.033a.9.9 0 0 0 .18-.993.9.9 0 0 0-.823-.545H3.09a1.09 1.09 0 0 1 0-2.182h.049a.9.9 0 0 0 .824-.59.9.9 0 0 0-.18-.992l-.033-.033a1.09 1.09 0 1 1 1.544-1.543l.032.032a.9.9 0 0 0 .993.18h.044a.9.9 0 0 0 .545-.823V3.09a1.09 1.09 0 0 1 2.182 0v.049a.9.9 0 0 0 .545.824.9.9 0 0 0 .993-.18l.033-.033a1.09 1.09 0 0 1 1.78 1.19 1.091 1.091 0 0 1-.236.354l-.033.032a.9.9 0 0 0-.18.993v.044a.9.9 0 0 0 .823.545h.093a1.091 1.091 0 0 1 0 2.182h-.049a.9.9 0 0 0-.824.545Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 9.8a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z"
    />
  </svg>
)

export default SettingsIcon
