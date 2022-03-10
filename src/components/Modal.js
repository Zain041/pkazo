import crossIcon from '../assets/svgs/close.svg'
const Modal =({open, onClose, children, size, className})=> {
  return (
    <>
       <div className={`${open ? '' : 'hidden'} modal-container-overlay`}>
        <div className={`${ size ? `modal-container-${size}` : 'modal-container-lg'}`}>
          { size !== 'sm' &&
           <button onClick={onClose} className="btn-close-modal">
                <img src={crossIcon} alt=""/>
            </button> }
            <div className={`${className} modal-content`}>
              {children}
            </div>
        </div>
    </div>
    </>
  )
}
export default Modal