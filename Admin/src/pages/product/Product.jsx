import { Link,useLocation } from "react-router-dom";
import {Container,TitleContainer,ButtonTop,Top,TopLeft,TopRight,InfoTop,Image,Name,InfoBottom,InfoItem,InfoValue,
    InfoKey,Form,FormLeft,FormRight,Upload,UploadImage,Label,Bottom,ButtonUpdate,LeftInput,LeftSelect } from './style'
import Chart from "../../components/chart/Chart"
import { Publish } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { useState,useEffect } from "react";
import { useMemo } from "react";
import {userRequest} from '../../requestMethode'


export default function Product() {
    const location = useLocation();
    const productId = location.pathname.split("/")[2];
    const product = useSelector(state => state.product.products.find((product)=>product._id===productId));
    const [pStats,setPStats] = useState([])


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
      <TitleContainer>
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <ButtonTop>Create</ButtonTop>
        </Link>
      </TitleContainer>
      <Top>
          <TopLeft>
              <Chart data={pStats} dataKey="Sales" title="Sales Performance"/>
          </TopLeft>
          <TopRight>
              <InfoTop>
                  <Image src={product.img} alt="" />
                  <Name>{product.title}</Name>
              </InfoTop>
              <InfoBottom>
                  <InfoItem>
                      <InfoKey>Id:</InfoKey>
                      <InfoValue>{product._id}</InfoValue>
                  </InfoItem>
                  <InfoItem>
                      <InfoKey>sales:</InfoKey>
                      <InfoValue>5123</InfoValue>
                  </InfoItem>
                  <InfoItem>
                      <InfoKey>in Stock</InfoKey>
                      <InfoValue>{product.inStock}</InfoValue>
                  </InfoItem>
              </InfoBottom>
          </TopRight>
      </Top>
      <Bottom>
          <Form>
              <FormLeft>
                  <Label>Product Name</Label>
                  <LeftInput type="text" placeholder={product.title} />
                  <Label>Description</Label>
                  <LeftInput type="text" placeholder={product.description} />
                  <Label>Price</Label>
                  <LeftInput type="text" placeholder={product.price} />
                  <Label>In Stock</Label>
                  <LeftSelect name="inStock" id="idStock">
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                  </LeftSelect>
              </FormLeft>
              <FormRight>
                  <Upload>
                      <UploadImage src={product.img} alt="" />
                      <label for="file">
                          <Publish style={{color:'#6a9113',cursor:"pointer"}} />
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </Upload>
                  <ButtonUpdate>Update</ButtonUpdate>
              </FormRight>
          </Form>
      </Bottom>
    </Container>
  );
}
