import React from 'react'
import tw , {styled} from 'twin.macro'
import sliderImg from '../assets/images/slider-image-1.jpg'
import Img1 from '../assets/images/image-1.jpg'
import Img2 from '../assets/images/image-2.jpg'
import Img3 from '../assets/images/image-3.jpg'
import Img4 from '../assets/images/image-4.jpg'
import avatar from '../assets/images/profile.png'
const PostImageContainer = styled.div (  () => [
    tw`flex flex-shrink-0`,
  
  ])
  const PostDetailsContainer = styled.div (  () => [
    tw`flex flex-col`,
  
  ])
  const PostHeader = styled.div (  () => [
    tw`flex items-center justify-between`,
  
  ])
  const Avatar = styled.div (  () => [
    tw`flex items-center space-x-3.5`,
  
  ])
  const AvatarBody = styled.div (  () => [
    tw`flex flex-col justify-center`,
  
  ])
  const AvatarUserName = styled.h5 (  () => [
    tw`text-lg font-bold text-black-light`,
  
  ])
  const AvatarUserLocation = styled.h5 (  () => [
    tw`text-xs font-semibold`,
  
  ])
  const PostDecription = styled.p (  () => [
    tw`text-sm font-open-sans text-black`,
  
  ])
  const PostsContainer = styled.div (  () => [
    tw`flex flex-col pt-9`,
  
  ])
  const PostSubtitle = styled.h4 (  () => [
    tw`flex flex-col pt-9`,
  
  ])
  const Hr = styled.hr (  () => [
    tw`border-grey-D8 mt-1.5 mb-4`,
  
  ])
  const ImagesContainer = styled.div (  () => [
    tw`flex items-center gap-3.5 justify-between`,
  
  ])
  const PurchaseList = styled.div (  () => [
    tw`flex flex-col mt-7 mb-5`,
  
  ])
  const PurchaseListItem = styled.div (  () => [
    tw`flex items-center justify-between border border-grey-D8 hover:shadow w-full rounded-10 py-4 px-5`,
  
  ])
  const PurchaseItemContent = styled.div (  () => [
    tw`flex flex-col space-y-2`,
  
  ])
  const PurchaseItemHeading = styled.h3 (  () => [
    tw`text-lg font-semibold font-open-sans`,
  
  ])
  const PurchaseItemDescription = styled.p (  () => [
    tw`text-sm font-semibold font-open-sans`,
  
  ])
  const PurchaseItemButton = styled.div (  () => [
    tw`flex flex-col space-y-3 w-full`,
  
  ])
  const PostButtonOutlined = styled.button (  () => [
    tw`border-black-light hover:bg-black-light hover:text-white text-black-light w-full font-bold text-lg py-2 flex items-center justify-center space-x-3 border-1.5 font-semibold font-open-sans rounded-full`,
  
  ])
  const PostButtonSolid = styled.button (  () => [
    tw`border-black-light bg-black-light hover:bg-black-lighter text-white w-full font-bold text-lg py-2 flex items-center justify-center space-x-3 border-1.5 font-semibold font-open-sans rounded-full`,
  
  ])
const  PostDetails = () =>{
  return (
      <>
    <PostImageContainer>
                    <img class="post-image" src={sliderImg} alt="post-image-1"/>
                </PostImageContainer>
                <PostDetailsContainer >
                    <PostHeader >
                        <Avatar>
                            <img class="avatar-image" src={avatar} alt="profile"/>
                            <AvatarBody>
                                <AvatarUserName>Erin Hanson</AvatarUserName>
                                <AvatarUserLocation >McMinnville, OR</AvatarUserLocation>
                            </AvatarBody>
                        </Avatar>
                        <div class="post-header-options">
                            <button class="btn btn-small btn-outline-black">Follow</button>
                            <div class="dropdown-container">
                                <button>
                                    <img src="./assets/svgs/dots.svg" alt=""/>
                                </button>
                            </div>
                        </div>
                    </PostHeader>
                    <PostDecription>
                        Left panel of a diptych oil painting of Paso Robles, the beautiful wine country of central California. 
                        This large painting spans 10 feet of wall space, creating quite an impact in a home or office.
                    </PostDecription>
                    <PostsContainer>
                        <PostSubtitle>More from Erin Hanson</PostSubtitle>
                        <Hr/>
                        <ImagesContainer >
                            <div><img src={Img1} alt="image-1"/></div>
                            <div><img src={Img2} alt="image-2"/></div>
                            <div><img src={Img3} alt="image-3"/></div>
                            <div><img src={Img4} alt="image-4"/></div>
                        </ImagesContainer>
                    </PostsContainer>
                    <PurchaseList>
                        <PurchaseListItem>
                            <PurchaseItemContent>
                                <PurchaseItemHeading>Pasoscapes Diptych Left Panel Print</PurchaseItemHeading>
                                <PurchaseItemDescription>Framed Oil Painting </PurchaseItemDescription>
                            </PurchaseItemContent>
                            <div class="purchase-item-price-wrapper">
                                <span class="purchase-item-price">$150</span>
                                <a href="#" class="btn-link">
                                    <img src="./assets/svgs/arrow_right.svg" alt=""/>
                                </a>
                            </div>
                        </PurchaseListItem>
                    </PurchaseList>
                    <PurchaseItemButton>
                        <PostButtonOutlined>Buy Now</PostButtonOutlined>
                        <PostButtonSolid>Add to cart</PostButtonSolid>
                    </PurchaseItemButton>
                    <hr class="divider divider-2" />
                    <div class="post-action-buttons">
                        <button><img src="./assets/svgs/like.svg" alt="like"/></button>
                        <button><img src="./assets/svgs/save.svg" alt="save"/></button>
                        <button><img src="./assets/svgs/share.svg" alt="share"/></button>
                    </div>
                    <p class="post-likes-info">
                        Liked by <a class="font-semibold" href="#">Amanda Evans</a> and <a class="font-semibold" href="#">10 others</a>
                    </p>
                </PostDetailsContainer>
      </>
  )
}
export default  PostDetails
