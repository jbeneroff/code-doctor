import './About.css'
import React from 'react'
import Layout from '../../components/Layout/Layout'
import ProfileCard from '../../components/ProfileCard/ProfileCard'

export default function AboutUs(props) {
  return (
    <Layout user={props.user} setUser={props.setUser}>
      <div className="wrapper">
        <div className="description">
          <h1>About Us</h1>
          <h2>Who we are</h2>
          <p>Code Doctor is a resource of forums for all things coding/programming/development. Users can create accounts, create posts with their coding questions, and reply to other users' posts with comments/answers. The goal is to empower a community of developers of all levels to share knowledge and receive feedback.</p>
        </div>
        <div>
          <h1>Meet the creators of Code Doctor &copy; 2021</h1>
          <div className="profile-container">
            <div className="profile">
              <ProfileCard
                src={'https://media-exp1.licdn.com/dms/image/C4D03AQE6nCe_ENCmTA/profile-displayphoto-shrink_800_800/0/1575228409633?e=1633564800&v=beta&t=uK7UVK7bHUGwp6UpNqdxqErD1Kq1kv46BNRSRRVHeEk'}
                alt={"Ziyad Hammad"}
                name={"Ziyad Hammad"}
                jobTitle={""}
                LI={'https://www.linkedin.com/in/ziyad-hammad/'}
                GH={'https://github.com/ZiyadHammad'}
                currentEmployer={"General Assembly Software Engineering Immersive Student"}
                email={"mailto:"}
              />
            </div>

            <div className="profile">
              <ProfileCard
                src={'https://media-exp1.licdn.com/dms/image/C5603AQGSnCK1Hyw5eg/profile-displayphoto-shrink_800_800/0/1536625204616?e=1633564800&v=beta&t=h_FDjPOq68kpNYJRJlg-qV618RL1KfDv4yDEoTByHPc'}
                alt={"Jared Beneroff"}
                name={"Jared Beneroff"}
                LI={"https://www.linkedin.com/in/jared-beneroff/"}
                GH={"https://github.com/jbeneroff"}
                jobTitle={""}
                currentEmployer={"General Assembly Software Engineering Immersive Student"}
                email={"mailto:"}
              />
            </div>

            <div className="profile">
              <ProfileCard
                src={'https://media-exp1.licdn.com/dms/image/C5603AQFLGU4kt68DYw/profile-displayphoto-shrink_800_800/0/1537233787677?e=1633564800&v=beta&t=686FQLIu1ib8jsuGUCq9K9-uGepMSFLs6ir-CTk7wGc'}
                alt={"Stefanie Nussbaum"}
                name={"Stefanie Nussbaum"}
                jobTitle={""}
                GH={"https://github.com/stefanie-nussbaum"}
                LI={"https://www.linkedin.com/in/stefanie-nussbaum/"}
                currentEmployer={"General Assembly Software Engineering Immersive Student"}
                email={"mailto:stefanien001@gmail.com"}
              />
            </div>

            <div className="profile">
              <ProfileCard
                src={'https://media-exp1.licdn.com/dms/image/C5603AQHYymq1Sg8MXg/profile-displayphoto-shrink_800_800/0/1593224120300?e=1633564800&v=beta&t=4ht4CnAza0_gQ1jw55S9Ow0Ryh0BLv2eDgwSYSRK9Is'}
                alt={"Kheyyon D. Parker"}
                name={"Kheyyon D. Parker"}
                GH={"https://github.com/keyy123"}
                LI={"https://www.linkedin.com/in/kheyyon-parker/"}
                jobTitle={""}
                currentEmployer={"General Assembly Software Engineering Immersive Student"}
                email={"mailto:kheyyon.parker@gmail.com"}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
