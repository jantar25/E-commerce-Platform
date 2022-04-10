import { Container,Title,Table,Tr,Th,Td,Name,Date,Amount,Btn} from "./style";
import { useEffect, useState } from 'react';
import {userRequest} from '../../requestMethode'
import {format } from 'timeago.js'

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <Btn type={type}>{type}</Btn>;
  };
  const [orders,setOrders] = useState([]);

  useEffect(()=>{
    const getOrders = async ()=>{
  
      try {
        const res = await userRequest.get("/orders");
        setOrders(res.data);
      } catch (error) {
        console.log(error)
      }
     
    }
    getOrders();
  },[])
  return (
    <Container>
      <Title>Latest transactions</Title>
      <Table>
        <tbody>
        <Tr>
          <Th>Customer</Th>
          <Th>Date</Th>
          <Th>Amount</Th>
          <Th>Status</Th>
        </Tr>
        { orders.map((order)=>(
              <Tr key={order._id}>
              <Td>
                <Name>{order.userId}</Name>
              </Td>
              <Date>{format(order.createdAt)}</Date>
              <Amount>{`Rwf ${order.amount}`}</Amount>
              <Td className="widgetLgStatus">
                <Button type={order.status} />
              </Td>
            </Tr>
        ))  }  
        </tbody>   
      </Table>
    </Container>
  );
}
