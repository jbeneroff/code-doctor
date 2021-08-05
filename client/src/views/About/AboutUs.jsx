import './About.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import Layout from '../../components/Layout/Layout'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
export default function AboutUs(props) {
  return (
    <Layout user={props.user} setUset={props.setUser}>
    <div className="wrapper">
      <h1>About Us</h1>

      <div className="description">
        <h1>Who we are</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis vero quae assumenda minima quod animi commodi. Voluptates molestias porro perspiciatis? Dignissimos quia vitae quasi ea dolor dicta blanditiis eligendi sequi.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem sint modi excepturi mollitia molestiae saepe illo deserunt fugiat, md vm itaque,inventore ipsa assumenda blanditiis? In accusantium mollitia voluptate voluptates tempora consequatur!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dolorum, reiciendis corporis debitis deserunt porro aliquam explicabo mollitia, voluptatibus expedita doloremque? Sequi consectetur omnis eligendi nisi eveniet repudiandae, harum minus.
        </p>

      </div>


<h1>Meet the creators of Code Doctor &copy; 2021</h1>


{/*
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
         */}
        <div className="g4">
      <ProfileCard
          src={'https://media-exp1.licdn.com/dms/image/C4D03AQE6nCe_ENCmTA/profile-displayphoto-shrink_800_800/0/1575228409633?e=1633564800&v=beta&t=uK7UVK7bHUGwp6UpNqdxqErD1Kq1kv46BNRSRRVHeEk'}
          alt={"Coo dud"}
          name={"Ziyad Hammad"}
          jobTitle={""}
          LI={'https://www.linkedin.com/in/ziyad-hammad/' }
          GH={'https://github.com/ZiyadHammad'}
          currentEmployer={"GA"}
          email={"mailto:"}
          />

      <ProfileCard
          src={'https://media-exp1.licdn.com/dms/image/C5603AQGSnCK1Hyw5eg/profile-displayphoto-shrink_800_800/0/1536625204616?e=1633564800&v=beta&t=h_FDjPOq68kpNYJRJlg-qV618RL1KfDv4yDEoTByHPc'}
          alt={"Coo dud"}
          name={"Jared Beneroff"}
          LI={"https://www.linkedin.com/in/jared-beneroff/" }
          GH={"https://github.com/jbeneroff"}
          jobTitle={""}
          currentEmployer={"GA"}
          email={"mailto:"}
          />


      <ProfileCard
          src={'https://media-exp1.licdn.com/dms/image/C5603AQFLGU4kt68DYw/profile-displayphoto-shrink_800_800/0/1537233787677?e=1633564800&v=beta&t=686FQLIu1ib8jsuGUCq9K9-uGepMSFLs6ir-CTk7wGc'}
          alt={"Coo dud"}
          name={"Stefanie Nussbaum"}
          jobTitle={""}
          GH={"https://github.com/stefanie-nussbaum" }
          LI={"https://www.linkedin.com/in/stefanie-nussbaum/"}
          currentEmployer={"GA"}
          email={"mailto:"}
          />


      
      <ProfileCard
          src={'https://media-exp1.licdn.com/dms/image/C5603AQHYymq1Sg8MXg/profile-displayphoto-shrink_800_800/0/1593224120300?e=1633564800&v=beta&t=4ht4CnAza0_gQ1jw55S9Ow0Ryh0BLv2eDgwSYSRK9Is'}
          alt={"Au Natueral"}
          name={"Kheyyon D. Parker"}
          GH={"https://github.com/keyy123" }
          LI={"https://www.linkedin.com/in/kheyyon-parker/"}
          jobTitle={"Owner of the Banned Lunk, Co-Founder of SoLo's Food, Fitness Enthusiast, Programmer"}
          currentEmployer={"GA"}
          email={"mailto:kheyyon.parker@gmail.com"}
          />
          </div>


      </div>
      </Layout>
  )
}
