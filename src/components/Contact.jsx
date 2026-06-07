import './Contact.css'

const links = [
  {
    label: 'email',
    href: 'mailto:nathan.stanislavsky16@gmail.com',
    text: 'nathan.stanislavsky16@gmail.com',
  },
  {
    label: 'github',
    href: 'https://github.com/NathanStanislavsky',
    text: 'NathanStanislavsky',
  },
  {
    label: 'linkedin',
    href: 'https://www.linkedin.com/in/nathan-stanislavsky/',
    text: 'nathan-stanislavsky',
  },
]

function Contact() {
  return (
    <section id="contact" className="contact animate-in">
      <div className="container">
        <h2 className="section-header">§06 contact</h2>
        <div className="contact__links">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="contact__link"
              target={link.label !== 'email' ? '_blank' : undefined}
              rel={link.label !== 'email' ? 'noopener noreferrer' : undefined}
            >
              <span className="contact__label">{link.label}</span>
              <span className="contact__arrow">→</span>
              <span className="contact__text">{link.text}</span>
            </a>
          ))}
        </div>
        <p className="contact__footer">
          © {new Date().getFullYear()} Nathan Stanislavsky
        </p>
      </div>
    </section>
  )
}

export default Contact
