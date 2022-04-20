import {Container,Item,Title,MoneyContainer,Money,MoneyRate,Sub} from './style'
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useEffect, useState } from 'react';
import {userRequest} from '../../requestMethode'

export default function FeaturedInfo() {

  const [income,setIncome] = useState([]);
  const [percentage,setPercentage] = useState(0);
  console.log(income[0])
  useEffect(()=>{
    const getIncome = async ()=> {
      try {
        const res = await userRequest.get("/orders/income");
        setIncome(res.data);
        setPercentage((res.data[0].total * 100)/ res.data[0].total - 100);
      } catch (error) {
        console.log(error)
      }
    }  
    getIncome();
  },[]);

  return (
    <Container>
      <Item>
        <Title>Revenue</Title>
        <MoneyContainer>
          <Money>{`Rwf ${income[0]?.total}`}</Money>
          <MoneyRate>
          % {Math.floor(percentage)}{""} 
          {percentage<0? <ArrowDownward style={{ color: 'red' }} /> :
            <ArrowUpward style={{ color: 'green' }} />
          }
          </MoneyRate>
        </MoneyContainer>
        <Sub>Compared to last month</Sub>
      </Item>
      <Item>
        <Title>Sales</Title>
        <MoneyContainer>
          <Money>Rwf 460,000</Money>
          <MoneyRate>
            -1.4 <ArrowDownward style={{ color: 'red' }} />
          </MoneyRate>
        </MoneyContainer>
        <Sub>Compared to last month</Sub>
      </Item>
      <Item>
        <Title>Cost</Title>
        <MoneyContainer>
          <Money>Rwf 500,000</Money>
          <MoneyRate>
          +2.4 <ArrowUpward style={{ color: 'green' }} />
          </MoneyRate> 
        </MoneyContainer>
        <Sub>Compared to last month</Sub>
      </Item>
    </Container>
  );
}
