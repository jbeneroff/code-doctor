import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function AboutUs() {
  return (
    <div className="wrapper">
      <h1>About Us</h1>

      <div className="description">
        <h1>Who we are</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis vero quae assumenda minima quod animi commodi. Voluptates molestias porro perspiciatis? Dignissimos quia vitae quasi ea dolor dicta blanditiis eligendi sequi.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem sint modi excepturi mollitia molestiae saepe illo deserunt fugiat, itaque,inventore ipsa assumenda blanditiis? In accusantium mollitia voluptate voluptates tempora consequatur!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dolorum, reiciendis corporis debitis deserunt porro aliquam explicabo mollitia, voluptatibus expedita doloremque? Sequi consectetur omnis eligendi nisi eveniet repudiandae, harum minus.
        </p>

      </div>






      <ul className="about-list">

        <h1>Our Contacts</h1>


        
        <li>

      <h3>Ziyad Hammad</h3>
      <a href="https://github.com/ZiyadHammad" target="_blank" rel="noreferrer" >
        <FontAwesomeIcon icon={faGithub} id="git" />
      </a>
      
      <a href="https://www.linkedin.com/in/ziyad-hammad/" target="_blank" rel="noreferrer" >
        <FontAwesomeIcon icon={faLinkedin} id="link" />
          </a>

        </li>
        
        <li>

<h3>Jared Beneroff</h3>
<a href="https://github.com/jbeneroff" target="_blank" rel="noreferrer" >
  <FontAwesomeIcon icon={faGithub} id="git" />
</a>

<a href="https://www.linkedin.com/in/jared-beneroff/" target="_blank" rel="noreferrer" >
  <FontAwesomeIcon icon={faLinkedin} id="link" />
    </a>
    
        </li>
        
        <li>

<h3>Stefanie Nussbaum</h3>
<a href="https://github.com/stefanie-nussbaum" target="_blank" rel="noreferrer" >
  <FontAwesomeIcon icon={faGithub} id="git" />
</a>

<a href="https://www.linkedin.com/in/stefanie-nussbaum/" target="_blank" rel="noreferrer" >
  <FontAwesomeIcon icon={faLinkedin} id="link" />
    </a>
    
        </li>

        <li>

<h3>Kheyyon Parker</h3>
<a href="https://www.linkedin.com/in/kheyyon-parker/" target="_blank" rel="noreferrer" >
  <FontAwesomeIcon icon={faGithub} id="git" />
</a>

<a href="https://github.com/keyy123" target="_blank" rel="noreferrer" >
  <FontAwesomeIcon icon={faLinkedin} id="link" />
    </a>
    
        </li>
        
      </ul>
      
    </div>
  )
}
