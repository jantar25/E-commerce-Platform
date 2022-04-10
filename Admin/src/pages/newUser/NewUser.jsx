import {Container,Title,Form,Label,Input,Item,Button,Select,InputG,LabelG} from './style'

export default function NewUser() {
  return (
    <Container>
      <Title>New User</Title>
      <Form>
        <Item>
          <Label>Username</Label>
          <Input type="text" placeholder="john" />
        </Item>
        <Item>
          <Label>Full Name</Label>
          <Input type="text" placeholder="John Smith" />
        </Item>
        <Item>
          <Label>Email</Label>
          <Input type="email" placeholder="john@gmail.com" />
        </Item>
        <Item>
          <Label>Password</Label>
          <Input type="password" placeholder="password" />
        </Item>
        <Item>
          <Label>Phone</Label>
          <Input type="text" placeholder="+1 123 456 78" />
        </Item>
        <Item>
          <Label>Address</Label>
          <Input type="text" placeholder="New York | USA" />
        </Item>
        <Item>
          <Label>Gender</Label>
          <div>
            <InputG type="radio" name="gender" id="male" value="male" />
            <LabelG for="male">Male</LabelG>
            <InputG type="radio" name="gender" id="female" value="female" />
            <LabelG for="female">Female</LabelG>
            <InputG type="radio" name="gender" id="other" value="other" />
            <LabelG for="other">Other</LabelG>
          </div>
        </Item>
        <Item>
          <Label>Active</Label>
          <Select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Select>
        </Item>
        <Button>Create</Button>
      </Form>
    </Container>
  );
}
