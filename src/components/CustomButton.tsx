interface Props {
    children: any
    className: string
    onClick: () => void
}

const CustomButton = ({children, className, onClick}: Props) => {
  return (
    <div className={className} onClick={onClick}>{children}</div>
  )
}

export default CustomButton