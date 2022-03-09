import { useState } from 'react'
import Modal from './components/Modal';
import PostDetails from './pages/PostDetails';
const  App =()=> {
  const  [isOpen, setIsOpen] = useState(true)
  const closeModal=()=> {
    setIsOpen(false)
  }

  const openModal=()=> {
    setIsOpen(true)
  }
  return (
    <div className="App">
      <Modal open={isOpen} onClose={closeModal}>
        <PostDetails/>
        </Modal>
    </div>
  );
}

export default App;
