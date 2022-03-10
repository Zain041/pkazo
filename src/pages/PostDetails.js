import React, {useState} from 'react'
import sliderImg from '../assets/images/slider-image-1.jpg'
import arrowRight from '../assets/svgs/arrow_right.svg'
import like from '../assets/svgs/like.svg'
import likeActive from '../assets/svgs/likeActive.svg'
import share from '../assets/svgs/share.svg'
import save from '../assets/svgs/save.svg'
import saveActive from '../assets/svgs/saveActive.svg'
import Img1 from '../assets/images/image-1.jpg'
import Img2 from '../assets/images/image-2.jpg'
import Img3 from '../assets/images/image-3.jpg'
import Img4 from '../assets/images/image-4.jpg'
import avatar from '../assets/images/profile.png'
import OverflowMenu from '../components/OverflowMenu'
import Button from '../components/Button'
import BaseIcon from '../components/BaseIcon'
import Modal from '../components/Modal'
 
const  PostDetails = () =>{
    const [following, setFollowing] = useState(false)
    const [unfollow, setUnfollow] = useState(false)
    const  [isOpen, setIsOpen] = useState(false)
    const  [liked, setLiked ] = useState(false)
    const  [saved, setSaved] = useState(false)
  
  const closeModal=()=> {
    setIsOpen(false)
  }

  const openModal=()=> {
    setIsOpen(true)
  }
      const onFollow = () =>{
          if(following){
              openModal()
              return
          }
      setFollowing(true)
      }
      const onHover =()=>{
        setUnfollow(true)
      }
      const onHoverLeave =()=>{
        setUnfollow(false)
      }
      const onUnfollow=()=>{
          setFollowing(false)
          closeModal()
      }
      const menuItems = [
          {
              name:'Report post',
              action:()=>console.log("clicked")
          },
          {
            name:'Hide post',
            action:()=>console.log("clicked")
        },
        {
            name:'Go to post',
            action:()=>console.log("clicked")
        },
        {
            name:'Share to...',
            action:()=>console.log("clicked")
        },
        {
            name:'Cancel',
            action:()=>console.log("clicked")
        }
      ]
    return (
      <>
        <div className="col-span-12 md:col-span-5 lg:col-span-7 post-image-container">
            <img className="post-image" src={sliderImg} alt="post-image-1"/>
        </div>
        <div className="col-span-12 md:col-span-7 lg:col-span-5 post-details-container">
            <div className="post-header">
                <div className="avatar">
                    <img className="avatar-image" src={avatar} alt="profile"/>
                    <div className="avatar-body">
                        <h5 className="avatar-user-name">Erin Hanson</h5>
                        <p className="avatar-user-location">McMinnville, OR</p>
                    </div>
                </div>
                <div className="post-header-options">
                    <Button onMouseEnter={onHover} onMouseLeave={onHoverLeave} onClick={onFollow} className={ ` ${following ? 'hover:bg-red-500 hover:bg-opacity-40 hover:text-red-600' : ''} btn btn-small btn-outline-black border-2 w-28`}>
                        {following && !unfollow ? 'Following' : following && unfollow ? 'Unfollow' : 'Follow'}
                    </Button>
                    <Modal className="flex flex-col items-center justify-end" open={isOpen} onClose={closeModal} size="sm">
                        <img className='h-20 w-20 border rounded-full' src={avatar} />
                        <p>Unfollow @Erin Hanson</p>
                        <div className='w-full'>
                            <Button onClick={onUnfollow} className="text-red-500 font-bold w-full py-3 border-b border-t border-grey-D8">
                                Unfollow
                            </Button>
                            <Button onClick={closeModal} className="w-full py-3">
                                Cancel
                            </Button>
                        </div>
                    </Modal>
                    <OverflowMenu items={menuItems}/>
                </div>
            </div>
            <p className="post-desc">
                Left panel of a diptych oil painting of Paso Robles, the beautiful wine country of central California. 
                This large painting spans 10 feet of wall space, creating quite an impact in a home or office.
            </p>
            <div className="more-posts-container">
                <h4 className="text-subtitle">More from Erin Hanson</h4>
                <hr className="divider divider-1" />
                <div className="more-images-container">
                    <div><img src={Img1} alt="image-1"/></div>
                    <div><img src={Img2} alt="image-1"/></div>
                    <div><img src={Img3} alt="image-1"/></div>
                    <div><img src={Img4} alt="image-1"/></div>
                </div>
            </div>
            <div className="purchase-list">
                <div className="purchase-list-item">
                    <div className="purchase-item-content">
                        <h3 className="purchase-item-heading">Pasoscapes Diptych Left Panel Print</h3>
                        <p className="purchase-item-desc">Framed Oil Painting </p>
                    </div>
                    <div className="purchase-item-price-wrapper">
                        <span className="purchase-item-price">$150</span>
                        <a href="#" className="btn-link">
                            <img src={arrowRight} alt=""/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="post-purchase-buttons">
                <Button className="btn btn-large btn-block btn-outline-black">Buy Now</Button>
                <Button className="btn btn-large btn-block btn-solid-black">Add to cart</Button>
            </div>
            <hr className="divider divider-2" />
            <div className="post-action-buttons">
                <BaseIcon><img className='cursor-pointer' onClick={()=>setLiked(!liked)} src={liked? likeActive : like} alt="like"/></BaseIcon>
                <BaseIcon><img className='cursor-pointer' onClick={()=>setSaved(!saved)} src={saved ? saveActive : save} alt="like"/></BaseIcon>
                <BaseIcon><img className='hover:opacity-70 cursor-pointer' src={share} alt="like"/></BaseIcon>
            </div>
            <p className="post-likes-info">
                Liked by <a className="font-semibold" href="#">Amanda Evans</a> and <a className="font-semibold" href="#">10 others</a>
            </p>
        </div>
      </>
  )
}
export default  PostDetails
