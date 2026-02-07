import "./styles.css";

function Avatar() {
  return (
    <div className="avatar-container">
      <img className="avatar-img" src="/profile.jpeg" alt="Nazh Romar J. Arcedo" />
    </div>
  );
}

function Intro() {
  return (
    <div className="intro-content">
      <h1>Nazh Romar J. Arcedo</h1>
      <p className="subtitle">University of Santo Tomas | 3ITG</p>
      <p className="bio">
        A third-year Information Technology student at the University of Santo Tomas, specializing in Web and Mobile Development.
      </p>
    </div>
  );
}

function Skill({ name, color, logo }) {
  return (
    <div className="skill-badge" style={{ backgroundColor: color }}>
      <img src={logo} alt={name} className="skill-icon" />
      <span>{name}</span>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-section">
      <hr className="divider" />
      <h3 className="skills-title">Programming Skills</h3>
      <div className="skill-container">
        <Skill 
          name="Java" 
          color="#ea2d2e" 
          logo="public\icon-java.svg" 
        />
        <Skill 
          name="C++" 
          color="#9c033a" 
          logo="public\icon-cpp.svg" 
        />
        <Skill 
          name="HTML" 
          color="#e44d26" 
          logo="public\icon-html.svg" 
        />
        <Skill 
          name="CSS" 
          color="#1572b6" 
          logo="public\icon-css.svg" 
        />
        <Skill 
          name="JavaScript" 
          color="#f0db4f" 
          logo="public\icon-js.svg" 
        />
        <Skill 
          name="PHP" 
          color="#6181b6" 
          logo="public\icon-php.svg"
        />
        <Skill 
          name="MySQL" 
          color="#00618a" 
          logo="public\icon-mysql.svg"
        />
        <Skill 
          name="ASP .NET" 
          color="#1384c8" 
          logo="public\icon-asp.svg"
        />
        <Skill 
          name="AngularJS" 
          color="#c4473a" 
          logo="public\icon-angular.svg"
        />
        <Skill 
          name="Kotlin" 
          color="#7f6cb1" 
          logo="public\icon-kotlin.svg"
        />
        <Skill 
          name="React" 
          color="#61dafb" 
          logo="public\icon-react.svg"
        />
        <Skill 
          name="Laravel" 
          color="#fd4f31" 
          logo="public\icon-laravel.svg"
        />
        <Skill 
          name="Typescript" 
          color="#007acc" 
          logo="public\icon-ts.svg"
        />
        <Skill 
          name="Vue" 
          color="#41b883" 
          logo="public\icon-vue.svg"
        />
        <Skill 
          name="Python" 
          color="#ffd845" 
          logo="public\icon-python.svg"
        />

      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="app-container">
      <video autoPlay loop muted playsInline className="background-video">
        <source src="public\demon-slayer-bg.mp4" type="video/mp4" />
      </video>

      <div className="card">
        <div className="top">
          <Avatar />
          <Intro />
        </div>
        <SkillList />
      </div>
    </div>
  );
}