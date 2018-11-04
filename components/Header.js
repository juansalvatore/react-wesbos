import Nav from './Nav'
import Link from 'next/link'
import styled from 'styled-components'

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  a {
    padding: 0.5rem 1rem;
    background: ${props => props.theme.red};
    color: white;
    text-transform: uppercase;
    text-decoration: none;
  }
  @media (max-width: 1200px) {
    margin: 0;
    text-align: center;
  }
`

const Header = () => (
  <header>
    <div>
      <Logo>
        <Link href="/">
          <a>Sick Fits</a>
        </Link>
      </Logo>
      <Nav />
    </div>
    <div>
      <p>Search</p>
    </div>
    <div>Cart</div>
  </header>
)

export default Header
