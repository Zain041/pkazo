import React , {useState} from 'react'
import dots from '../assets/svgs/dots.svg'


 const OverflowMenu  = ({items}) => {
 const [ open, setOen] = useState(false)
 const handleOpen =()=>{
     setOen(!open)
 }
  return(
    <>
    <div className="dropdown-container">
         <button onClick={handleOpen}>
             <img className="cursor-pointer" src={dots} alt=""/>
         </button>
        <div className={` ${open ? '' : 'hidden'} dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95`}>
            <ul className="absolute -right-24 w-56 p-2 mt-5 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg outline-none" >
                {
                    items && items.map((item, index)=>{
                        return (
                         <li onClick={()=>{
                             item.action()
                             handleOpen()
                         }} key={index} className="text-black-light hover:bg-gray-100 rounded px-3 py-1.5 text-sm flex w-full cursor-pointer">{item.name}</li>
                        )
                    })
                } 
            </ul>
        </div>
        </div>
    </>
   )

 }
 export default OverflowMenu