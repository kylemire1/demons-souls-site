import React from "react"
import "./src/styles/styles.css"

export const wrapRootElement = ({ element }) => {
  return <div className="min-h-screen h-full">{element}</div>
}
