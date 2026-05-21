export default function CrossIcon({color}: {color:string}) {
    return (
    <svg
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>cross-outline</title>
      <path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.5"
        d="m8.464 15.535l7.072-7.07m-7.072 0l7.072 7.07"
      />
    </svg>
    )
}
