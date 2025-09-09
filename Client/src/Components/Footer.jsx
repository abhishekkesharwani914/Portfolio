import React from 'react'

const Footer = () => {
  return (
    <div className="copy-right py-5 px-10 lg:py-10 lg:px-15 flex flex-col justify-center align-center bg-[#286f6b] text-[#e2eddf] text-xs md:text-md md:text-lg">
        <p className="text-center">&#169; Copyright 2025. All rights reserved.</p>
        <p className="text-center">Design, Develop & Managed by <strong>Abhishek Kesharwani</strong></p>
        <p className="text-center">Version: {__APP_VERSION__}</p>
    </div>
  )
}

export default Footer
