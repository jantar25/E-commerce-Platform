import {Container,Title,List,ListItem,Image,User,Username} from './style';
import { useEffect, useState } from 'react';
import {userRequest} from '../../requestMethode'

export default function WidgetSm() {

  const [users,setUsers] = useState([]);

useEffect(()=>{
  const getUsers = async ()=>{

    try {
      const res = await userRequest.get("/newsletter/");
      setUsers(res.data);
    } catch (error) {
      console.log(error)
    }
   
  }
  getUsers();
},[])

  return (
    <Container>
      <Title>Newsletter Subscribers</Title>
      <List>
        {users.map((user)=>(
        <ListItem key= {user._id}>
          <Image src={user.img || "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"} />
          <User>
            <Username>{user.email}</Username>
          </User>
        </ListItem>
        ))}
      </List>
    </Container>
  );
}
