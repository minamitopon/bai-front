interface Props {
  src: string
  alt: string
}

const Img = (props: Props) => {
  const { src, alt } = props
  return (
    <img src={src} alt={alt} />
  )
}

export default Img