import { useState } from "react"
import LinkButton from "../LinkButton"
import Title from "../Title"
import ProfileSection from "./ProfileSection"
import styles from "./styles.module.css"

export default function Profile(props) {

  //[valor, funcaoModificadora]
  const [followText, setFollowText] = useState("Follow")
  function handleClick(ev) {
    console.log(ev)
    alert("Você agora está seguindo!")
    setFollowText("Following")
  }

  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={props.avatar} alt={props.name} />
      <Title>
        <span>Name: </span>
        {props.name}
        <button 
        className={styles.followButton}
          onClick={handleClick}
        >
          {followText}
        </button>
      </Title>
      <ProfileSection>{props.bio}</ProfileSection>
      <ProfileSection>{props.email}</ProfileSection>
      <ProfileSection
         className={styles.links}
         id="links-section"
         data-test="some value"
         aria-label="social links"
      >
        <LinkButton href={props.githubUrl} target="_blank">GitHub</LinkButton>
        <LinkButton href={props.linkedinUrl} target="_blank">LinkedIn</LinkButton>
        <LinkButton href={props.behanceUrl} target="_blank">Twitter</LinkButton>
      </ProfileSection>
    </div>
  )
}