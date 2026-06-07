import './About.css'

function About() {
  return (
    <section id="about" className="about animate-in">
      <div className="container">
        <h2 className="section-header">§01 about</h2>
        <div className="about__content">
          <p className="about__text">
            I am a software engineer and undergraduate at Boston University,
            pursuing a joint B.A. in Mathematics and Computer Science. My
            focus is on engineering robust, scalable applications that
            address complex technical challenges.
          </p>
          <p className="about__text">
            Currently, I am driving social impact as a Software Engineer at
            Hack4Impact and developing a high-performance key-value storage engine in C++.
            I prioritize clean, maintainable architecture and adhere to best
            practices like Test-Driven Development.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
