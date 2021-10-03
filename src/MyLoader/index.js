import React from "react"
import ContentLoader from "react-content-loader"
import './MyLoader.css';
const MyLoader = (props) => (
  <ContentLoader 
    className='loader'
    speed={2}
    viewBox="0 0 400 200"
    backgroundColor="#d1d1d1"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="5" cx="10" ry="5" width="100%" height="25" /> 
    <rect x="0" y="35" rx="5" ry="5" width="100%" height="25" /> 
    <rect x="0" y="70" rx="5" ry="5" width="100%" height="25" /> 
    <rect x="0" y="105" rx="5" ry="5" width="100%" height="25" /> 
    <rect x="0" y="140" rx="5" ry="5" width="100%" height="25" /> 
    <rect x="0" y="175" rx="5" ry="5" width="100%" height="25" /> 
    <rect x="0" y="210" rx="5" ry="5" width="100%" height="25" /> 
  </ContentLoader>
  
)

export {MyLoader}