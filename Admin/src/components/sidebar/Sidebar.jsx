import {
  LineStyle,Timeline,TrendingUp,PermIdentity,
  Storefront,AttachMoney,BarChart,MailOutline,
  DynamicFeed,ChatBubbleOutline,WorkOutline,Report,
} from "@material-ui/icons";
import { StyledLink,Container,Wrapper,Menu,Title, List, ListItems } from "./style";

export default function Sidebar() {
  return (
    <Container>
      <Wrapper>
        <Menu>
          <Title>Dashboard</Title>
          <List>
            <StyledLink to="/">
              <ListItems>
                <LineStyle fontSize="small" />
                Home
              </ListItems>
            </StyledLink>
            <ListItems>
              <Timeline fontSize="small"  />
              Analytics
            </ListItems>
            <ListItems>
              <TrendingUp fontSize="small"  />
              Sales
            </ListItems>
          </List>
        </Menu>
        <Menu>
          <Title>Quick Menu</Title>
          <List>
            <StyledLink to="/users">
              <ListItems>
                <PermIdentity fontSize="small"  />
                Users
              </ListItems>
            </StyledLink>
            <StyledLink to="/products">
              <ListItems>
                <Storefront fontSize="small"  />
                Products
              </ListItems>
            </StyledLink>
            <ListItems>
              <AttachMoney fontSize="small"  />
              Transactions
            </ListItems>
            <ListItems>
              <BarChart fontSize="small"  />
              Reports
            </ListItems>
          </List>
        </Menu>
        <Menu>
          <Title>Notifications</Title>
          <List>
            <ListItems>
              <MailOutline fontSize="small" />
              Mail
            </ListItems>
            <ListItems>
              <DynamicFeed fontSize="small" />
              Feedback
            </ListItems>
            <ListItems>
              <ChatBubbleOutline fontSize="small"  />
              Messages
            </ListItems>
          </List>
        </Menu>
        <Menu>
          <Title>Staff</Title>
          <List>
            <ListItems>
              <WorkOutline fontSize="small" />
               Manage
            </ListItems>
            <ListItems>
              <Timeline fontSize="small"  />
              Analytics
            </ListItems>
            <ListItems>
              <Report fontSize="small"  />
              Reports
            </ListItems>
          </List>
        </Menu>
      </Wrapper>
    </Container>
  );
}
