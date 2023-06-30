import github from '../assets/github.webp'
import linkedin from '../assets/linkedinn.webp'

function Contact() {
  return (
    <div className="contact">
      
        <a className="contact-link" href="https://github.com/MariamAtef226" target="_blank">
          <img src={github} alt="github" />
        </a>
        <a className="contact-link" href="https://www.linkedin.com/in/mariam-atef-53a8031b1/" target="_blank">
          <img src={linkedin} alt="linkedin" />
        </a>
      
    </div>
  );
}
export default Contact;
