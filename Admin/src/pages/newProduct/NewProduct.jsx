import { useState } from 'react';
import {Container,Title,Form,Item,Label,Input,Select,Option,Button} from './style'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../../firebase'

export default function NewProduct() {
const [inputs,setInputs] = useState({});
const [file,setFile] = useState(null);
const [cat,setCat] = useState([]);

const handleChange = (e)=>{
  setInputs(prev=>{
    return  {...prev,[e.target.name]:e.target.value} 
  })
}

const handleCat = (e)=>{
  setCat(e.target.value.split(","))
}

const handleClick = (e)=>{
  e.preventDefault();
  const fileName = new Date().getTime() + file.name;
  const storage = getStorage(app); 
  const storageRef = (storage,fileName);
  
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
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
    });
  }
);
}

  return (
    <Container>
      <Title>New Product</Title>
      <Form>
        <Item>
          <Label>Title</Label>
          <Input name="title" type="text" placeholder="Mango" onChange={handleChange} />
        </Item>
        <Item>
          <Label>Description</Label>
          <Input name="description" type="text" placeholder="Good Fruits" onChange={handleChange}  />
        </Item>
        <Item>
          <Label>Categories</Label>
          <Input type="text" placeholder="Fruits,vegetables..." onChange={handleCat} />
        </Item>
        <Item>
          <Label>Price/Kg</Label>
          <Input name="price" type="number" placeholder="200" onChange={handleChange} />
        </Item>
        <Item>
        <Label>In Stock</Label>
          <Select name="inStock" name="inStock" id="idStock" onChange={handleChange} >
              <Option value="true">Yes</Option>
              <Option value="false">No</Option>
          </Select>
        </Item>
        <Item>
          <Label>Image</Label>
          <Input type="file" id="file" onChange={e=>setFile(e.target.files[0])} />
        </Item>
        <Button onClick={handleClick} >Create</Button>
      </Form>
    </Container>
  );
}
