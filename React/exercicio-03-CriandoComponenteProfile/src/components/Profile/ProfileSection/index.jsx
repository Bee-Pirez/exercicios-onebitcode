import styles from "./styles.module.css"

export default function ProfileSection (props) {
  return (
    <div 
      //pegando todas as props e colocando direto nas divs
      {...props}
      //template literal - dentro de string - acrescentar classes extras no css modules
      className={`${styles.wrapper} ${props.className}`}
    >
      {props.children}
    </div>
  )
}