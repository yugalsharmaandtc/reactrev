import { StrictMode, createElement} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

//const heading = createElement('h1', null, 'Hello, React!') // Normal js to render 

const heading= <h1>Hello, React!</h1> // JSX syntax to render
createRoot(document.getElementById('root')).render(heading)

// NOTE: WHEN WE ARE USING CLASS IN REACT IT IS USED AS CLASSNAME NOT CLASS