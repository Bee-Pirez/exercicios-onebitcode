import Profile from "./components/Profile";
import avatarImg from "./assets/avatarImg.svg"


export default function App() {
  return (
    <div className="app">
      <Profile 
        avatar={avatarImg}
        name="Beatriz Perez"
        bio="Full-stack developer."
        email="beatrizcarmoperez@gmail.com"
        githubUrl="https://github.com/Bee-Pirez"
        linkedinUrl="https://www.linkedin.com/in/perezbeatriz/"
        behanceUrl="https://www.behance.net/beatrizperez17"
      />
    </div>
  )
}