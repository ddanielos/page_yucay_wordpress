import React from 'react';
import { connect, styled } from 'frontity';
import LogoImg from '../assets/static/img/logo-alt.png'
import Burger from '../assets/static/img/burger.jpg'

const Container = styled.div`
  background-color: #1B1A17;
  width: 100vw;
  height: 100%;

  & ul{
    display: flex;
    justify-content: space-around;
    padding: 40px 10px 40px 10px;

    & li{
      font-family: 'Lydian BT';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.085em;
      color: #E6D5B8;
      list-style-type: none;
    }
  }
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 53px;
  padding-right: 23px;
`
const Logo = styled.img`
  width: 106px;
  height: 115px;
  margin-top:11px;
  margin-left:31px;
`
const Title = styled.h2`
  text-transform:uppercase;
  width: 102px;
  height: 44px;
  left: 3px;
  font-family: 'Lydian BT';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  letter-spacing: 0.09em;
  color: #E6D5B8;
`
const Slogan = styled.h3`
  width: 129px;
  height: 29px;
  font-family: 'Lydian BT';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.085em;
  color: #F0A500;
`
const ListItems = styled.div`

`

const MealItem = styled.div`
  margin: 0px auto 51px auto;
  width: 279px;
  height: 128px;
  border: 1px solid #E6D5B8;
  border-radius: 7px;
  display: flex;

  & h2{
    width: 91px;
    height: 48px;
    left: 61px;
    top: 231px;
    font-family: 'Lydian BT';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.2em;
    color: #F0A500;
  }
  & h3{
    width: 123px;
    height: 12px;
    left: 61px;
    top: 279px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    /* identical to box height */
    letter-spacing: 0.085em;
    color: #E6D5B8;
  }
  & h4{
    width: 78px;
    height: 24px;
    left: 84px;
    top: 321px;
    font-family: 'Lydian BT';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: -0.02em;
    color: #E6D5B8;
  }
`
const ItemDescription = styled.div`
`


const Menu = ({state}) => {
  const data = state.source.get(state.router.link)
  return(
    <>
      <Container>
        <Header>
          <Logo src={LogoImg}/>
          <TitleContainer>
            <Title>Menu</Title>
            <Slogan>beer & food</Slogan>
          </TitleContainer>
        </Header>
        <ul>
          <li>cervezas</li>
          <li>burguers</li>
          <li>pizzas</li>
          <li>tapas</li>
          <li>sin-alcohol</li>
        </ul>
        <ListItems>
          {
            data.items.map(({id})=>{
              const meal = state.source.meal[id]
              return(
                <MealItem key={id}>
                  <ItemDescription>
                    <h2>{meal.acf.title}</h2>
                    <h3>{meal.acf.extract}</h3>
                    <h4>{`S/. ${meal.acf.price}.00`}</h4>
                  </ItemDescription>
                  <img />
                  {
                  /*
                  */
                  }
                </MealItem>
              )
            })
          }
        </ListItems>
      </Container>
    </>
  )
}

export default connect( Menu );
