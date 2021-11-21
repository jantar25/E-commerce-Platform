import {Container,Item,Title,MoneyContainer,Money,MoneyRate,Sub} from './style'
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <Container>
      <Item>
        <Title>Revenue</Title>
        <MoneyContainer>
          <Money>Rwf 5,350,000</Money>
          <MoneyRate>
            -11.4 <ArrowDownward style={{ color: 'red' }} />
          </MoneyRate>
        </MoneyContainer>
        <Sub>Compared to last month</Sub>
      </Item>
      <Item>
        <Title>Sales</Title>
        <MoneyContainer>
          <Money>Rwf 25,460,000</Money>
          <MoneyRate>
            -1.4 <ArrowDownward style={{ color: 'red' }} />
          </MoneyRate>
        </MoneyContainer>
        <Sub>Compared to last month</Sub>
      </Item>
      <Item>
        <Title>Cost</Title>
        <MoneyContainer>
          <Money>Rwf 3,500,000</Money>
          <MoneyRate>
          +2.4 <ArrowUpward style={{ color: 'green' }} />
          </MoneyRate> 
        </MoneyContainer>
        <Sub>Compared to last month</Sub>
      </Item>
    </Container>
  );
}
