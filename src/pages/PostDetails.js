import React, {useState} from 'react'
import sliderImg from '../assets/images/slider-image-1.jpg'
import dots from '../assets/svgs/dots.svg'
import arrowRight from '../assets/svgs/arrow_right.svg'
import like from '../assets/svgs/like.svg'
import share from '../assets/svgs/share.svg'
import save from '../assets/svgs/save.svg'
import Img1 from '../assets/images/image-1.jpg'
import Img2 from '../assets/images/image-2.jpg'
import Img3 from '../assets/images/image-3.jpg'
import Img4 from '../assets/images/image-4.jpg'
import avatar from '../assets/images/profile.png'
 
const  PostDetails = () =>{
    const [following, setFollowing] = useState(false)
    const [unfollow, setUnfollow] = useState(false)
      const onFollow = () =>{
      setFollowing(true)
      }
      const onHover =()=>{
        setUnfollow(true)
      }
      const onHoverLeave =()=>{
        setUnfollow(false)
      }
    return (
      <>
    <div class="post-image-container">
                    <img class="post-image" src={sliderImg} alt="post-image-1"/>
                </div>
                <div class="post-details-container">
                    <div class="post-header">
                        <div class="avatar">
                            <img class="avatar-image" src={avatar} alt="profile"/>
                            <div class="avatar-body">
                                <h5 class="avatar-user-name">Erin Hanson</h5>
                                <p class="avatar-user-location">McMinnville, OR</p>
                            </div>
                        </div>
                        <div class="post-header-options">
                            <button onMouseEnter={onHover} onMouseLeave={onHoverLeave} onClick={onFollow} class={ ` ${following ? 'hover:bg-red-500 hover:bg-opacity-40 hover:text-red-600' : ''} btn btn-small btn-outline-black`}>
                             {following && !unfollow ? 'Following' : following && unfollow ? 'Unfollow' : 'Follow'}
                            </button>
                            <div class="dropdown-container">
                                <button>
                                    <img src={dots} alt=""/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <p class="post-desc">
                        Left panel of a diptych oil painting of Paso Robles, the beautiful wine country of central California. 
                        This large painting spans 10 feet of wall space, creating quite an impact in a home or office.
                    </p>
                    <div class="more-posts-container">
                        <h4 class="text-subtitle">More from Erin Hanson</h4>
                        <hr class="divider divider-1" />
                        <div class="more-images-container">
                            <div><img src={Img1} alt="image-1"/></div>
                            <div><img src={Img2} alt="image-1"/></div>
                            <div><img src={Img3} alt="image-1"/></div>
                            <div><img src={Img4} alt="image-1"/></div>
                        </div>
                    </div>
                    <div class="purchase-list">
                        <div class="purchase-list-item">
                            <div class="purchase-item-content">
                                <h3 class="purchase-item-heading">Pasoscapes Diptych Left Panel Print</h3>
                                <p class="purchase-item-desc">Framed Oil Painting </p>
                            </div>
                            <div class="purchase-item-price-wrapper">
                                <span class="purchase-item-price">$150</span>
                                <a href="#" class="btn-link">
                                    <img src={arrowRight} alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="post-purchase-buttons">
                        <button class="btn btn-large btn-block btn-outline-black">Buy Now</button>
                        <button class="btn btn-large btn-block btn-solid-black">Add to cart</button>
                    </div>
                    <hr class="divider divider-2" />
                    <div class="post-action-buttons">
                        <button><img src={like} alt="like"/></button>
                        <button><img src={save} alt="like"/></button>
                        <button><img src={share} alt="like"/></button>
                    </div>
                    <p class="post-likes-info">
                        Liked by <a class="font-semibold" href="#">Amanda Evans</a> and <a class="font-semibold" href="#">10 others</a>
                    </p>
                </div>
      </>
  )
}
export default  PostDetails
