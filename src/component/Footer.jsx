import React from 'react'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className='footer p-8 bg-neutral text-neutral-content footer-center'>
      <div>
        <p className='text-xl'>GitHubLookUp &copy; {year}</p>
      </div>
    </footer>
  )
}

export default Footer