import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero__layout">
          <div className="hero__left">
            <h1 className="hero__name">Nathan Stanislavsky</h1>
            <p className="hero__subtitle">Math · CS · Distributed Systems</p>
          </div>
          <div className="hero__right">
            <div className="hero__coord">
              <span className="hero__coord-label">x:</span>
              <span className="hero__coord-value">Boston University — Math & CS</span>
            </div>
            <div className="hero__coord">
              <span className="hero__coord-label">y:</span>
              <span className="hero__coord-value">DragonGC — SWE Intern</span>
            </div>
            <div className="hero__coord">
              <span className="hero__coord-label">∂:</span>
              <span className="hero__coord-value">GPA 3.74</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
