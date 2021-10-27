import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons"
import { Container,Arrow,Wrapper,Slide,ImgContainer,InfoContainer,Image,Title,Description,Button } from "./Styles"
import mango from "../../Images/mango.png"


const Slider = () => {
    return (
        <Container>
            <Arrow direction="left">
                <KeyboardArrowLeft />
            </Arrow>
            <Wrapper>
                <Slide>
                    <ImgContainer>
                        <Image src={mango} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>Mango fashion</Title>
                        <Description>footwear and accessories. Shop the best outfits for this season at our online store.</Description>
                        <Button>SHOW NOW</Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction="right">
                <KeyboardArrowRight />
            </Arrow>
            
        </Container>
    )
}

export default Slider
