import crossIcon from '../assets/svgs/close.svg'
const Modal =({open, onClose, children})=> {
  


 

  return (
    <>
       <div class={`${open ? '' : 'hidden'} modal-container-overlay`}>
        <div class="modal-container">
            <button onClick={onClose} class="btn-close-modal">
                <img src={crossIcon} alt=""/>
            </button>
            <div class="modal-content">
              {children}
            </div>
        </div>
    </div>
    </>
  )
}
export default Modal