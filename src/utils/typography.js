import Typography from "typography"
import stAnnesTheme from "typography-theme-st-annes"

stAnnesTheme.overrideThemeStyles = () => ({
  "h1,h2,h3,h4": {
    color: "white",
  },
})

const typography = new Typography(stAnnesTheme)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
