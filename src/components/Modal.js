
import tw , {styled} from 'twin.macro'
import crossIcon from '../assets/svgs/close.svg'
const Modal =({open, onClose, children})=> {
  
const Modal = styled.div (  () => [
    tw` w-full h-full lg:h-screen lg:overflow-y-auto p-6 lg:p-14 items-center justify-center bg-black bg-opacity-70`,
    open ? tw`flex` : tw`hidden`
  ])
const ModalContainer = styled.div(() => [
    tw` relative flex max-w-7xl w-full h-full p-3 md:p-5 lg:p-7 bg-white rounded-lg lg:rounded-2xl`
])
const CloseButton = styled.button(() => [
    tw`absolute h-6 lg:h-auto w-6 lg:w-auto -top-2 lg:top-0 -right-2.5 lg:-right-10 border-1.5 border-transparent bg-black lg:bg-transparent text-white hover:border-white rounded-full p-1 lg:p-1.5`
])
const ModalBody = styled.div(() => [
    tw`flex flex-col lg:flex-row gap-9`
])
const Img  = styled.div`
background-image: url(${crossIcon});
width: 16px;
height: 16px;
`

 

  return (
    <>
      <Modal>
        <ModalContainer>
            <CloseButton onClick={onClose}>
            <Img/>
            </CloseButton>
            <ModalBody>
               {children}
            </ModalBody>
        </ModalContainer>
    </Modal>
    </>
  )
}
export default Modal