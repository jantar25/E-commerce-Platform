import pay from '../../Images/payment1.png'
import {Email, Facebook, Instagram, LocalPhone, Room, Spa, Twitter, WhatsApp} from '@material-ui/icons'
import {Container,Left,Center,Right,Logo,Description,
    SocialMedia,SocialIcon,Title,List,ListItem,ContactItem,Payment} from './Style'



const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>KIVUGREEN <Spa style={{color:'#6a9113',fontSize:16}} /></Logo>
                <Description>
                Full of goodness. We have a passion for fresh, healthy food. 
                Our ambition is simple: To make healthy food yummier, easier to get ...
                </Description>
                <SocialMedia>
                    <SocialIcon color='3B5999'>
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color='E4405F'>
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color='55ACEE'>
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color='6a9113'>
                        <WhatsApp />
                    </SocialIcon>
                </SocialMedia>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>  
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
            <Title>Contact Us</Title>
            <ContactItem><Room style={{marginRight:"10px"}} /> ST.3456 Gisozi,Kigali</ContactItem>
            <ContactItem><LocalPhone style={{marginRight:"10px"}} /> +243 990 921 809</ContactItem>
            <ContactItem><Email style={{marginRight:"10px"}} /> contacts@kivugreen.co</ContactItem>
            <Payment src={pay} />
            </Right>
        </Container>
    )
}

export default Footer
