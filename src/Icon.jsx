export function Icon(props) {
  const iconUrl = props.icon
    ? `${props.src}#${props.icon}`
    : props.src
    ? props.src.toString()
    : undefined;

  const imgUrl = new URL(iconUrl, import.meta.url).href

  const icon = iconUrl ? <use href={imgUrl} /> : props.children;

  return (
    <svg {...props} src icon>
      {icon}
    </svg>
  );
}