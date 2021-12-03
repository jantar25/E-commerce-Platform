import { Link,useLocation } from "react-router-dom";
import {Container,TitleContainer,ButtonTop,Top,TopLeft,TopRight,InfoTop,Image,Name,InfoBottom,InfoItem,InfoValue,
    InfoKey,Form,FormLeft,FormRight,Upload,UploadImage,Label,Bottom,ButtonUpdate,LeftInput,LeftSelect } from './style'
import Chart from "../../components/chart/Chart"
import { Publish } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { useState,useEffect } from "react";
import { useMemo } from "react";
import {userRequest} from '../../requestMethode'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../../firebase'
import {useDispatch} from 'react-redux'
import {updateProduct} from '../../Redux/apiCalls'


export default function Product() {
    const location = useLocation();
    const productId = location.pathname.split("/")[2];
    const product = useSelector(state => state.product.products.find((product)=>product?._id===productId));
    const [pStats,setPStats] = useState([])
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
      const fileName = new Date().getTime() + file?.name;
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
          console.log(downloadURL)
          const updatedProduct = {...inputs,img: downloadURL,categories:cat,content:content,size:size};
          const id=product._id;
          updateProduct(id,updatedProduct,dispatch);
          console.log(updateProduct)
        });
      }
    );
    }

    const MONTHS = useMemo(
        ()=>[
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
      ],[]);

      useEffect(()=>{
        const getStats = async () =>{
          try {
            const res = await userRequest.get("/orders/income? paid=" + productId)
            const list = res.data.sort((a,b)=>{
                return a._id - b._id
            })
            list.map((item)=>{
              setPStats(prev=>[...prev,{name:MONTHS[item._id-1], Sales:item.total}]);
            })
          } catch (error) {
            console.log(error)
          }
        }
        getStats();
      },[MONTHS])
    
  return (
    <Container>
      <Top>
          <TopLeft>
              <Chart data={pStats} dataKey="Sales" title="Sales Performance"/>
          </TopLeft>
          <TopRight>
              <InfoTop>
                  <Image src={product?.img} alt="" />
                  <Name>{product?.title}</Name>
              </InfoTop>
              <InfoBottom>
                  <InfoItem>
                      <InfoKey>Id:</InfoKey>
                      <InfoValue>{product?._id}</InfoValue>
                  </InfoItem>
                  <InfoItem>
                      <InfoKey>sales:</InfoKey>
                      <InfoValue>5123</InfoValue>
                  </InfoItem>
                  <InfoItem>
                      <InfoKey>in Stock</InfoKey>
                      <InfoValue>{product?.inStock}</InfoValue>
                  </InfoItem>
              </InfoBottom>
          </TopRight>
      </Top>
      <Bottom>
          <Form>
              <FormLeft>
                  <Label>Product Name</Label>
                  <LeftInput type="text" placeholder={product?.title} onChange={handleChange}/>
                  <Label>Description</Label>
                  <LeftInput type="text" placeholder={product?.description} onChange={handleChange}/>
                  <Label>Categories</Label>
                  <LeftInput type="text" placeholder={product?.categories} onChange={handleCat} />
                  <Label>Size</Label>
                  <LeftInput type="text" placeholder={product?.size} onChange={handleSize} />
                  <Label>Content</Label>
                  <LeftInput type="text" placeholder={product?.content} onChange={handleContent} />
                  <Label>Price</Label>
                  <LeftInput type="text" placeholder={product?.price} onChange={handleChange} />
                  <Label>In Stock</Label>
                  <LeftSelect name="inStock" id="idStock" onChange={handleChange}>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                  </LeftSelect>
              </FormLeft>
              <FormRight>
                  <Upload>
                      <UploadImage src={product?.img} alt="" />
                      <label for="file">
                          <Publish style={{color:'#6a9113',cursor:"pointer"}} />
                      </label>
                      <input type="file" id="file" style={{display:"none"}} onChange={e=>setFile(e.target.files[0])} />
                  </Upload>
                  <ButtonUpdate onClick={handleClick} >Update</ButtonUpdate>
              </FormRight>
          </Form>
      </Bottom>
    </Container>
  );
}
