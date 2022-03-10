import React , {useState} from 'react'


 const BaseIcon  = (props) => {
  return(
    <>
  <i {...props}>
   {props.children}
  </i>
    </>
   )

 }
 export default BaseIcon