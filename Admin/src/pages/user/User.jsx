import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import {Container,Title,UserContainer,Show,Update,ShowImage,ShowTop,ShowTitle,Username,UserTitle,
  Bottom,UserShowTitle,ShowInfo,InfoTitle,UpdateTitle,UpdateImage,UpdateForm,UpdateLeft,UpdateItem,
  UpdateItemLabel,UpdateItemInput,UpdateRight,UpdateUpload,ButtonUpdate} from './styles'
 
export default function User() {
  return (
    <Container>
      <Title>
        <h1>Edit User</h1>
      </Title>
      <UserContainer>
        <Show>
          <ShowTop>
            <ShowImage
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <ShowTitle>
              <Username>Anna Becker</Username>
              <UserTitle>Software Engineer</UserTitle>
            </ShowTitle>
          </ShowTop>
          <Bottom>
            <UserShowTitle>Account Details</UserShowTitle>
            <ShowInfo>
              <PermIdentity fontSize='small'/>
              <InfoTitle>annabeck99</InfoTitle>
            </ShowInfo>
            <ShowInfo>
              <CalendarToday fontSize='small' />
              <InfoTitle>10.12.1999</InfoTitle>
            </ShowInfo>
            <UserShowTitle>Contact Details</UserShowTitle>
            <ShowInfo>
              <PhoneAndroid fontSize='small'  />
              <InfoTitle>+1 123 456 67</InfoTitle>
            </ShowInfo>
            <ShowInfo>
              <MailOutline fontSize='small'  />
              <InfoTitle>annabeck99@gmail.com</InfoTitle>
            </ShowInfo>
            <ShowInfo>
              <LocationSearching fontSize='small' />
              <InfoTitle>New York | USA</InfoTitle>
            </ShowInfo>
          </Bottom>
        </Show>
        <Update>
          <UpdateTitle>Edit</UpdateTitle>
          <UpdateForm>
            <UpdateLeft>
              <UpdateItem>
                <UpdateItemLabel>Username</UpdateItemLabel>
                <UpdateItemInput
                  type="text"
                  placeholder="annabeck99"
                />
              </UpdateItem>
              <UpdateItem>
                <UpdateItemLabel>Full Name</UpdateItemLabel>
                <UpdateItemInput
                  type="text"
                  placeholder="Anna Becker"
                />
              </UpdateItem>
              <UpdateItem>
                <UpdateItemLabel>Email</UpdateItemLabel>
                <UpdateItemInput
                  type="text"
                  placeholder="annabeck99@gmail.com"
                />
              </UpdateItem>
              <UpdateItem>
                <UpdateItemLabel>Phone</UpdateItemLabel>
                <UpdateItemInput
                  type="text"
                  placeholder="+1 123 456 67"
                />
              </UpdateItem>
              <UpdateItem>
                <UpdateItemLabel>Address</UpdateItemLabel>
                <UpdateItemInput
                  type="text"
                  placeholder="New York | USA"
                />
              </UpdateItem>
            </UpdateLeft>
            <UpdateRight>
              <UpdateUpload>
                <UpdateImage
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish style={{color:'#6a9113',cursor:"pointer"}} />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </UpdateUpload>
              <ButtonUpdate>Update</ButtonUpdate>
            </UpdateRight>
          </UpdateForm>
        </Update>
      </UserContainer>
    </Container>
  );
}
