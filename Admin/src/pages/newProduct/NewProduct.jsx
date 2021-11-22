import {Container,Title,Form,Item,Label,Input,Select,Option,Button} from './style'

export default function NewProduct() {
  return (
    <Container>
      <Title>New Product</Title>
      <Form>
        <Item>
          <Label>Image</Label>
          <Input type="file" id="file" />
        </Item>
        <Item>
          <Label>Name</Label>
          <Input type="text" placeholder="Apple Airpods" />
        </Item>
        <Item>
          <Label>Stock</Label>
          <Input type="text" placeholder="123" />
        </Item>
        <Item>
          <Label>Active</Label>
          <Select name="active" id="active">
            <Option value="yes">Yes</Option>
            <Option value="no">No</Option>
          </Select>
        </Item>
        <Button>Create</Button>
      </Form>
    </Container>
  );
}
