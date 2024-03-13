import logo from '../assets/images/CodeTyping.svg';
import avatar from '../assets/images/MaleAvatar.svg';
import bottomOfHeader from '../assets/images/imgBottomOfHeader.svg';
export const NavBar = () => {
  (
    <>
      <a href="#header" className="back__to__top">
        <i className="fa fa-arrow-up"></i>
      </a>
      <div className="container">
        <header id="header">
          <nav>
            <div className="logo">
              <a href="#"><img src={logo} alt="Logo" /></a>
            </div>
            <div className="links">
              <ul>
                <li><a href="#footer">Say Hello</a></li>
                <li><a href="#">Mentorship</a></li>
              </ul>
            </div>
          </nav>
          <div className="content">
            <h2>Designer, Front-end Developer & Mentor</h2>
            <p>
              I design and code beautifully simple things, and I love what I do.
            </p>
            <img src={avatar} alt="Person" />
            <img src={bottomOfHeader} alt="CALS" />
          </div>
        </header>
      </div>

    </>
  )
}