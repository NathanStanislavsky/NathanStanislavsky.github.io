import './Education.css'

const coursework = [
  'Distributed Systems',
  'Time Series & Forecasting',
  'Algorithms',
  'Computer Systems',
  'Databases',
  'Data Structures',
  'Linear Algebra',
  'Multivariate Calculus',
  'Probability',
]

function Education() {
  return (
    <section id="education" className="education animate-in">
      <div className="container">
        <h2 className="section-header">§03 education</h2>
        <div className="education__content">
          <div className="education__row">
            <div className="education__info">
              <h3 className="education__school">Boston University</h3>
              <p className="education__degree">B.A. Mathematics & Computer Science</p>
            </div>
            <span className="education__date">Expected May 2027</span>
          </div>
          <p className="education__meta">GPA: 3.74 · Dean's List</p>
          <div className="education__courses">
            {coursework.map((course) => (
              <span key={course} className="tag">{course}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
