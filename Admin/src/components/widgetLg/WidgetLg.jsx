import { Container,Title,Table,Tr,Th,Td,Image,Name,Date,Amount,Btn} from "./style";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <Btn type={type}>{type}</Btn>;
  };
  return (
    <Container>
      <Title>Latest transactions</Title>
      <Table>
        <Tr>
          <Th>Customer</Th>
          <Th>Date</Th>
          <Th>Amount</Th>
          <Th>Status</Th>
        </Tr>
        <Tr>
          <Td>
            <Image src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            <Name>Susan Carol</Name>
          </Td>
          <Date>2 Jun 2021</Date>
          <Amount>$122.00</Amount>
          <Td className="widgetLgStatus">
            <Button type="Approved" />
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Image src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            <Name>Susan Carol</Name>
          </Td>
          <Date>2 Jun 2021</Date>
          <Amount>$122.00</Amount>
          <Td className="widgetLgStatus">
            <Button type="Declined" />
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Image src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            <Name>Susan Carol</Name>
          </Td>
          <Date>2 Jun 2021</Date>
          <Amount>$122.00</Amount>
          <Td className="widgetLgStatus">
            <Button type="Pending" />
          </Td>
        </Tr>
        <Tr>
          <Td>
            <Image src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            <Name>Susan Carol</Name>
          </Td>
          <Date>2 Jun 2021</Date>
          <Amount>$122.00</Amount>
          <Td className="widgetLgStatus">
            <Button type="Approved" />
          </Td>
        </Tr>
        
      
      </Table>
    </Container>
  );
}
