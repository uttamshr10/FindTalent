import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'

function Contact() {
  return (
    <div>
      <h1 className="text-6xl mb-4 font-bold">Contact Me👇</h1>
      <p className='mb-4 text-4xl font-light'><a target='_blank' href="https://github.com/uttamshr10/"><FaGithub className='inline pr-2 pb-2 text-4xl'/>GitHub</a></p>
      <p className='mb-4 text-4xl font-light'><a target='_blank' href="https://linkedin.com/in/uttamshr/"><FaLinkedin className='inline pr-2 pb-1 text-4xl' />LinkedIn</a></p>
      <p className='text-4xl font-light'><a target='_blank' href="mailto:@uttamshr10@gmail.com"><FaEnvelope className='inline pr-2 pb-1 text-4xl' />Send me an Email</a></p>
    </div>
  )
}

export default Contact