import styless from "./styles.module.css"

export default function ProfileSection (props) {
  return (
    <div className={styless.wrapper}>
      {props.children}
    </div>
  )
}