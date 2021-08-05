import './ProfileCard.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function ProfileCard(props) {
  return (
    <div className="profile">
      <img src={props.src} alt={props.alt} />
      <h1>{props.name}</h1>
      <p className="title">{props.jobTitle}</p>
      <p>{props.currentEmployer}</p>
      <a href={props.GH}><FontAwesomeIcon icon={faGithub}/></a>
      <a href={props.LI}><FontAwesomeIcon icon={faLinkedin} /></a>
      <p><button><a href={props.email}target="_blank" rel="noreferrer">Contact Me</a></button></p>
    </div>
  )
}
