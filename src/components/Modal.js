import crossIcon from '../assets/svgs/close.svg'
const Modal =({open, onClose, children, size})=> {
  


 

  return (
    <>
       <div className={`${open ? '' : 'hidden'} ${size} modal-container-overlay`}>
        <div className="modal-container">
            <button onClick={onClose} className="btn-close-modal">
                <img src={crossIcon} alt=""/>
            </button>
            <div className="modal-content">
              {children}
            </div>
        </div>
    </div>
    </>
  )
}
export default Modal