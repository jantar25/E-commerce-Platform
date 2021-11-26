import { Link } from "react-router-dom";
import {Container,TitleContainer,ButtonTop,Top,TopLeft,TopRight,InfoTop,Image,Name,InfoBottom,InfoItem,InfoValue,
    InfoKey,Form,FormLeft,FormRight,Upload,UploadImage,Label,Bottom,ButtonUpdate,LeftInput,LeftSelect } from './style'
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import { Publish } from "@material-ui/icons";


export default function Product() {
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
              <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
          </TopLeft>
          <TopRight>
              <InfoTop>
                  <Image src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                  <Name>Apple Airpods</Name>
              </InfoTop>
              <InfoBottom>
                  <InfoItem>
                      <InfoKey>id:</InfoKey>
                      <InfoValue>123</InfoValue>
                  </InfoItem>
                  <InfoItem>
                      <InfoKey>sales:</InfoKey>
                      <InfoValue>5123</InfoValue>
                  </InfoItem>
                  <InfoItem>
                      <InfoKey>active:</InfoKey>
                      <InfoValue>yes</InfoValue>
                  </InfoItem>
                  <InfoItem>
                      <InfoKey>in stock:</InfoKey>
                      <InfoValue>no</InfoValue>
                  </InfoItem>
              </InfoBottom>
          </TopRight>
      </Top>
      <Bottom>
          <Form>
              <FormLeft>
                  <Label>Product Name</Label>
                  <LeftInput type="text" placeholder="Apple AirPod" />
                  <Label>In Stock</Label>
                  <LeftSelect name="inStock" id="idStock">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </LeftSelect>
                  <Label>Active</Label>
                  <LeftSelect name="active" id="active">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </LeftSelect>
              </FormLeft>
              <FormRight>
                  <Upload>
                      <UploadImage src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
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
