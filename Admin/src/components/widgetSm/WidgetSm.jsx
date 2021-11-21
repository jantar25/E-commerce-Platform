import {Container,Title,List,ListItem,Image,User,Username,UserTitle,Button} from './style';
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <Container>
      <Title>New Join Members</Title>
      <List>
        <ListItem>
          <Image src={"https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"} />
          <User>
            <Username>Anna Keller</Username>
            <UserTitle>Software Engineer</UserTitle>
          </User>
          <Button>
            <Visibility fontSize="small" />
            Display
          </Button>
        </ListItem>
        <ListItem>
          <Image src={"https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"} />
          <User>
            <Username>Jantar Man</Username>
            <UserTitle>Telecom Engineer</UserTitle>
          </User>
          <Button >
            <Visibility fontSize="small" />
            Display
          </Button>
        </ListItem>
      </List>
    </Container>
  );
}
