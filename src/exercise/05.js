// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// const smallBox = (
//   <div
//     className="box box--small"
//     style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}
//   >
//     small lightblue box
//   </div>
// )
// const mediumBox = (
//   <div
//     className="box box--medium"
//     style={{backgroundColor: 'pink', fontStyle: 'italic'}}
//   >
//     medium pink box
//   </div>
// )
// const largeBox = (
//   <div
//     className="box box--large"
//     style={{backgroundColor: 'orange', fontStyle: 'italic'}}
//   >
//     large orange box
//   </div>
// )

const Box = ({size, style, children}) => {
  const className = size ? `box--${size}` : ''

  return (
    <div
      className={['box', className].join(' ')}
      style={{fontStyle: 'italic', ...style}}
    >
      {children}
    </div>
  )
}

Box.propTypes = {
  size(props, propName, componentName) {
    if (
      props[propName] !== 'small' &&
      props[propName] !== 'medium' &&
      props[propName] !== 'large'
    ) {
      throw new Error(
        `Component ${componentName} expected ${propName} to be 'small' 'medium' or 'large', but got ${props[propName]}`,
      )
    }
  },
}

const smallBox = (
  <Box size="small" style={{backgroundColor: 'lightblue'}}>
    small lightblue box
  </Box>
)
const mediumBox = (
  <Box size="medium" style={{backgroundColor: 'pink'}}>
    medium pink box
  </Box>
)
const largeBox = (
  <Box size="large" style={{backgroundColor: 'orange'}}>
    large orange box
  </Box>
)

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
