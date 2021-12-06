import { useState } from "react"
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons"
import { Container,Arrow,Wrapper,Slide,ImgContainer,InfoContainer,Image,Title,Intro,Description,Button } from "./Styles"
import {SlideItems} from '../Data'


const Slider = () => {
    const [slideIndex,setSlideIndex]= useState(0);
    const handleClick=(direction)=>{
        if(direction==="left") {
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
        }
    }

    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick('left')}>
                <KeyboardArrowLeft />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {SlideItems.map(item=>(
                <Slide bg={item.bg} key={item.id} >
                <InfoContainer>
                    <Intro>{item.intro}</Intro>
                    <Title>{item.title}</Title>
                    <Description>{item.description}</Description>
                    <Button href="https://blog.agrivi.com/post/the-most-important-facts-about-organic-farming">LEARN MORE</Button>
                </InfoContainer>
                <ImgContainer>
                    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
                        <path id="blob" d="M425.5,288.5Q356,327,338.5,398.5Q321,470,249,471.5Q177,473,149,408.5Q121,344,84.5,297Q48,250,64,188.5Q80,127,140.5,112.5Q201,98,259,71Q317,44,334.5,110Q352,176,423.5,213Q495,250,425.5,288.5Z" fill={item.bg}></path>
                    </svg>
                    <Image src={item.img} />
                </ImgContainer>
            </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick('right')}>
                <KeyboardArrowRight />
            </Arrow>
            
        </Container>
    )
}

export default Slider
