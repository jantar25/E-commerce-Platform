import { Container,Title,Table,Tr,Th,Td,Name,Date,Amount,Btn} from "./style";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
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
            <Th>View</Th>
          </Tr>
          { orders.map((order)=>(
              <Tr key={order._id}>
                <Td>
                  <Name>{order.address.name}</Name>
                </Td>
                <Date>{format(order.createdAt)}</Date>
                <Amount>{`Rwf ${order.amount}`}</Amount>
                <Td className="widgetLgStatus">
                  <Button type={order.status} />
                </Td>
                <Link to={"/orders/" + order._id} style={{textDecoration:'none',color:'green'}}>
                  <Visibility fontSize="medium" />
                </Link>
            </Tr>
        ))  }  
        </tbody>   
      </Table>
    </Container>
  );
}
