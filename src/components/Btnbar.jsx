import port from '../assets/port.webp'
import email from '../assets/email.webp'

function Btnbar() {
  return (
    <div className="btn-bar">
      <div className="email">
        <img src={email} />
      
        <a href="mariamatef226@gmail.com" title="mariamatef226@gmai.com" target="_blank">
          Email
        </a>
      </div>
      <div className="portfolio">
      <img src={port} />

        <a href="mariamatef226.github.io/mariam-atef-portfolio/" target="_blank">
          Portofolio
        </a>
      </div>
    </div>
  );
}

export default Btnbar;