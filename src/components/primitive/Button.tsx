interface Props {
  label: string,
  onClick: () => void,
}


const Button = (props: Props) => {
  return (
    <button onClick={props.onClick}>{props.label}</button>
  )
}

export default Button