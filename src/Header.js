import Nav from 'react-bootstrap/Nav';
import "./Header.css"
function Header()
{
    return(
        <div className="header1">
        <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/">Getdata</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="/delete">Deletedata</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="/post">Postdata</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link href="/put">Putdata</Nav.Link>
        </Nav.Item>
      </Nav>
      </div>
    )
}
export default Header
