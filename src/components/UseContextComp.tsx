//CompA => CompB => CompC

// 1. Create context
// 2. Provider
// 3. Consumer

import { useState, createContext, useContext, memo } from "react"

const ThemeContext = createContext<string>('light')

const Content = memo(() => {
  console.log('re-render content...')

  return (
    <div>
      <p className="bg-success">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio molestiae, ut nihil, numquam dolorem sed, tempora debitis officia enim hic dignissimos laborum quam vitae! Nostrum nesciunt repellat est incidunt eveniet.
      </p>
      <Paragraph />
    </div>
  )
})

const Paragraph = () => {
  console.log('re-render paragraph...')

  const theme = useContext(ThemeContext)

  return (
    <p className={theme}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius nobis beatae obcaecati enim animi! Nemo esse ut neque facilis distinctio nostrum, repudiandae similique possimus officiis maxime, iste ea nulla illum?</p>
  )
}

export const UseContextComp = () => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  console.log('re-render comp...')

  return (
    <ThemeContext.Provider value={theme}>
      <div className="p-3">
        <button onClick={toggleTheme}>Toggle theme</button>
        <Content />
      </div>
    </ThemeContext.Provider>
  )
}
