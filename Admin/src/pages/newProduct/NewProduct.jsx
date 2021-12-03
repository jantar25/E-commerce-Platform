import { useState } from 'react';
import {Container,Title,Form,Item,Label,Input,Select,Option,Button,InputItems} from './style'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../../firebase'
import {useDispatch} from 'react-redux'
import {addProduct} from '../../Redux/apiCalls'



export default function NewProduct() {
const [inputs,setInputs] = useState({});
const [file,setFile] = useState(null);
const [cat,setCat] = useState([]);
const [size,setSize] = useState([]);
const [content,setContent] = useState([]);
const dispatch = useDispatch();

const handleChange = (e)=>{
  setInputs(prev=>{
    return  {...prev,[e.target.name]:e.target.value} 
  })
}

const handleCat = (e)=>{
  setCat(e.target.value.split(","));
}
const handleSize = (e)=>{
  setSize(e.target.value.split(","));
}
const handleContent = (e)=>{
  setContent(e.target.value.split(","));
}


const handleClick = (e)=>{
  e.preventDefault();
  const fileName = new Date().getTime() + file.name;
  const storage = getStorage(app); 
  const storageRef = ref(storage,fileName);  
  const uploadTask = uploadBytesResumable(storageRef, file);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
        default:
    }
  }, 
  (error) => {
    console.log(error)
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      const product = {...inputs,img: downloadURL,categories:cat,content:content,size:size};
      addProduct(product,dispatch);
    });
  }
);
}



  return (
    <Container>
      <Title>New Product</Title>
      <Form>
      <InputItems>
          <Item>
            <Label>Title</Label>
            <Input name="title" type="text" placeholder="Mango" onChange={handleChange} />
          </Item>
          <Item>
            <Label>Description</Label>
            <Input name="description" type="text" placeholder="Good Fruits" onChange={handleChange}  />
          </Item>
        </InputItems>
        <InputItems>
          <Item>
            <Label>Categories</Label>
            <Input type="text" placeholder="Fruits,vegetables..." onChange={handleCat} />
          </Item>
          <Item>
            <Label>Size</Label>
            <Input type="text" placeholder="small,medium,big..." onChange={handleSize} />
          </Item>
        </InputItems>
        <InputItems>
          <Item>
            <Label>Content</Label>
            <Input type="text" placeholder="Green,white,red..." onChange={handleContent} />
          </Item>
          <Item>
            <Label>Price/Kg</Label>
            <Input name="price" type="number" placeholder="200" onChange={handleChange} />
          </Item>
        </InputItems>
        <InputItems>
          <Item>
          <Label>In Stock</Label>
            <Select name="inStock" id="idStock" onChange={handleChange} >
                <Option value="true">Yes</Option>
                <Option value="false">No</Option>
            </Select>
          </Item>
          <Item>
            <Label>Image</Label>
            <Input type="file" id="file" onChange={e=>setFile(e.target.files[0])} />
          </Item>
        </InputItems>
        <Button onClick={handleClick} >Create</Button>
      </Form>
    </Container>
  );
}
