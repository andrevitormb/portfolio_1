import Networks from './Networks'
import Avatar from '../img/me.jpg'
import '../styles/components/sidebar.sass'

const sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="André Macedo" />
      <p className="title"> Development </p>
      <Networks />
      <p>Contact</p>
      <a href="" className="btn">
        Download Curriculum
      </a>
    </aside>
  )
}

export default sidebar