import React from 'react';
import logo from '../assets/static/img/logo.png';
import user from '../assets/static/img/user.png';
import sale from '../assets/static/img/sale.png';
import icon_ham from '../assets/static/img/beer.png';
import sale_white from '../assets/static/img/sale_white.png'
import Link from './Link'
import {connect, styled, css} from 'frontity'
import {Fuente1, size_menu_1920, menu_width} from '../styles/Variables'

const ContainerHeader = styled.div`
  max-width: 1920px;
  position: fixed;
  z-index: 5;
`
const StyleHeader = styled.header`
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  padding: 0;
  background-color: rgba(244, 239, 226, 0.99);
`
const Menu = styled.nav`
  visibility: visible;
  position: initial;
  opacity: 1;
  left: 0;
  right: 0;
  text-align: center;
  font-family: ${Fuente1};
  font-size: ${size_menu_1920};
  font-weight: 700;
  text-transform: uppercase;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  color: #2d292b;
`
const UWraper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: auto;
  align-items: center;
  padding: 20px 0px;
`
const ContainerLeft = styled.div`
  width: ${menu_width};
  @media (max-width: 600px) {
    display: none;
  }
`
const ContainerRight = styled.div`
  width: ${menu_width};
  @media (max-width: 600px) {
    display: none;
  }
`
const ContainerCenter = styled.div`
  margin-left: auto;
  margin-right: auto;
`
const MenuItem = styled.li`
  padding-left: 1.5em;
  padding-right: 1.5em;
  height: 31px;
  line-height: 2;
  color: #2d292b;
  float: left;
  transition: all 300ms ease;
  &:hover{
    text-shadow: 2px 0px 3px #bbb7ac;
    cursor: pointer;
  }
`
const MenuLeftRight = styled.ul`
  list-style: none;
  display: inline-block;
  margin: auto;
  padding: 0;
`
const MenuItemImg = styled.img`
  width: 31px;
  height: auto;
  padding-left: 7px;
  padding-bottom: 5px;
  display: inline-block;
  vertical-align: middle;
`
const MenuLogo = styled.img`
  width: 141px;
  height: auto;
  display: block;
  margin: auto;
`

const Header = () => {
  return(
    <ContainerHeader>
      <StyleHeader>
        <label className="menu-open" style={{backgroundImage:`url(${icon_ham})`}}></label>
        <label className="sale_white" style={{backgroundImage:`url(${sale_white})`}}></label>
        <Menu>
          <UWraper>
              <ContainerLeft>
                <MenuLeftRight>
                    <Link href="/beers">
                      <MenuItem>Nuestras Cervezas</MenuItem>
                    </Link>
                    <MenuItem>Sobre Nosotros</MenuItem>
                </MenuLeftRight>
              </ContainerLeft>
              <Link href="/">
                <ContainerCenter>
                    <MenuLogo src={logo} alt="logo yucay brewery" />
                </ContainerCenter>
              </Link>
              <ContainerRight>
                <MenuLeftRight>
                  <Link href="/blogs">
                    <MenuItem>
                      Blog
                    </MenuItem>
                  </Link>
                  <Link href="/contact">
                    <MenuItem>Contacto</MenuItem>
                  </Link>
                    <MenuItem>
                          Login
                      <MenuItemImg src={user} alt=""/>
                    </MenuItem>
                    <MenuItem><MenuItemImg src={sale} alt=""/></MenuItem>
                </MenuLeftRight>
              </ContainerRight>
          </UWraper>
        </Menu>
         </StyleHeader>
      </ContainerHeader>
   )
}

export default connect(Header);