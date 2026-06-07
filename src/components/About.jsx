import './About.css'

function About() {
  return (
    <section id="about" className="about animate-in">
      <div className="container">
        <h2 className="section-header">01 about</h2>
        <div className="about__content">
          <p className="about__text">
            I am a backend-focused software engineer and undergraduate student at Boston University,
            pursuing a Bachelor of Arts in Mathematics and Computer Science. I specialize in building
            and scaling distributed systems, with internship experience at PayPal and DragonGC.
          </p>
          <p className="about__text">
            Proficient in Python, Java, TypeScript, and C++, I have hands-on infrastructure experience
            across AWS, Docker, Kubernetes, and Terraform. I am passionate about tackling complex backend
            architectures, database optimizations, and system design challenges.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
