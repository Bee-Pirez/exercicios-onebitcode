import LinkButton from "../LinkButton"
import ProfileSection from "./ProfileSection"
import styles from "./styles.module.css"

export default function Profile(props) {
  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={props.avatar} alt={props.name} />
      <h2 className={styles.name}>{props.name}</h2>
      <ProfileSection>{props.bio}</ProfileSection>
      <ProfileSection>{props.email}</ProfileSection>
      <ProfileSection>
        <div className={styles.links}>
          <LinkButton href={props.githubUrl} target="_blank">GitHub</LinkButton>
          <LinkButton href={props.linkedinUrl} target="_blank">LinkedIn</LinkButton>
          <LinkButton href={props.behanceUrl} target="_blank">Twitter</LinkButton>
        </div>
      </ProfileSection>
    </div>
  )
}