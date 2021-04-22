import React from "react"
import styled from "styled-components"
import "normalize.css"
import BackgroundImage from "./src/components/BackgroundImage"

export const wrapRootElement = ({ element }) => {
  return (
    <WrapperElement>
      {element}
      <BackgroundImage />
    </WrapperElement>
  )
}

const WrapperElement = styled.div`
  height: 100%;
  min-height: 100vh;
`
