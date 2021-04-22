import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const BackgroundImage = () => {
  return (
    <StaticImage
      className="absolute inset-0 -z-1"
      src="../images/bg-img.png"
      alt=""
    />
  )
}

export default BackgroundImage
