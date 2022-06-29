import react from 'react'
import reactDOM from 'react-dom'
import App from './App';


//connecting to the div with an id of root
//reactDOM.render is no longer suppoted
//src:[https://stackoverflow.com/questions/71668256/deprecation-notice-reactdom-render-is-no-longer-supported-in-react-18]
reactDOM.render(<App />, document.getElementById('root'));