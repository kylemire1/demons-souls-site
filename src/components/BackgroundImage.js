import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const BackgroundImage = () => {
  return (
    <ImageWrapper>
      <StaticImage src="../images/bg-img.png" alt="" />
    </ImageWrapper>
  )
}

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`

export default BackgroundImage
