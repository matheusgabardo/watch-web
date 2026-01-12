import { SVGProps } from "react"

interface FullScreenIconProps extends SVGProps<SVGSVGElement> {
  size?: number
}

const FullScreenIcon = ({ size = 48, ...props }: FullScreenIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M10.7 25.729v5.677c0 .26.103.508.287.692a.99.99 0 0 0 .698.286h8.036v1.956h-8.036a2.97 2.97 0 0 1-2.091-.86 2.923 2.923 0 0 1-.865-2.074V25.73h1.97Zm28.572 5.677c0 .778-.313 1.524-.867 2.075-.554.55-1.306.859-2.09.859H28.28v-1.956h8.036a.989.989 0 0 0 .697-.286.976.976 0 0 0 .289-.692V25.73h1.97v5.677ZM19.72 15.616h-8.036a.99.99 0 0 0-.698.286.975.975 0 0 0-.288.692v5.677H8.73v-5.677c0-.778.31-1.524.865-2.075a2.97 2.97 0 0 1 2.09-.859h8.037v1.956Zm16.594-1.956c.784 0 1.536.31 2.09.86.554.55.867 1.296.867 2.074v5.677H37.3v-5.677a.975.975 0 0 0-.29-.692.988.988 0 0 0-.696-.286H28.28V13.66h8.036Z"
      opacity={0.6}
    />
  </svg>
)

export default FullScreenIcon
