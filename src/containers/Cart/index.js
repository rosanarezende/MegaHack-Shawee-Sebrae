import React, { useState } from 'react'
import { connect } from 'react-redux'

import * as S from './styles'

import MyBottonNav from '../../components/BottonNav'
import { Card, CardHeader, Avatar, Typography } from '@material-ui/core'
import ProductInCart from '../../components/ProductInCart'
import MyPageTitle from '../../components/PageTitle'

function Cart(props) {
  const { user, products } = props

  /* const products = [
      {
          id: 1,
          name: 'Sampoo Herbal',
          value: 20.5,
          img: 'https://user-images.githubusercontent.com/45580434/80917398-00894280-8d35-11ea-9892-beedc8447fc2.jpg',
          date: 1588448549809,
      },
      {
          id: 2,
          name: 'Esmalte',
          value: 12.95,
          img: 'https://user-images.githubusercontent.com/45580434/80917325-6e813a00-8d34-11ea-9879-9bc0390698e1.jpg',
          date: 1588448549809,
      }
  ] */

  const productsTotal = products.reduce((prevVal, product) => { return prevVal + product.value }, 0)

  const frete = 5

  const cashBack = 12.5

  const [payment, setpayment] = useState('')

  function savePaymentMethod(e) {
    setpayment(e.target.id)
  }

  function onPlaceOrder(e) {
    e.preventDefault()
    // const placeOrderData = {
    //     products: infoQuantity,
    //     paymentMethod: payment
    // }
    //  if (products.length === 0) {
    //     alert('Adicione produtos ao carrinho para realizar um pedido!')
    // }
    // else {
    //     placeOrder(placeOrderData)
    // }
  }

  return (
    <>
      <MyPageTitle showBack pageTitle='Carrinho' />
      <S.CartWrapper>
        <Card>
          <CardHeader
            avatar={
              <Avatar
                src={user.photo}
                alt={user.name}
              />
            }
            title={user.name}
            subheader={user.address}
          />
        </Card>

        <S.ProducstTitle gutterBottom variant="body1">
          Produtos selecionados:
                </S.ProducstTitle>

        {products.map(product => (
          <ProductInCart key={product.id} product={product} />
        ))}

        <S.DivValue>
          <Typography align="right">
            Subtotal: <strong>{productsTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
          </Typography>
          <Typography align="right" >
            Frete: <span style={{ color: '#CE3145' }}>+ {frete.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
          </Typography>
          <Typography align="right">
            Cashback disponível: <span style={{ color: '#4B6BD6' }}>- {cashBack.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
          </Typography>
          <S.DivTotal>
            <Typography>
              TOTAL
                        </Typography>
            <Typography align="right">
              <strong>{(productsTotal + frete - cashBack).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
            </Typography>
          </S.DivTotal>
        </S.DivValue>

        <S.Title>
          Formas de pagamentos:
                </S.Title>

        <S.FormWrapper onSubmit={onPlaceOrder}>

          <S.PayementOptionBoxWrapper>
            <S.RadioButtonWrapper
              name="payementOption"
              type="radio"
              value={payment || ''}
              id='money'
              required
              onClick={savePaymentMethod}
              disabled={products.length === 0 ? true : false}
            />

            <S.Text> Dinheiro </S.Text>
          </S.PayementOptionBoxWrapper>

          <S.PayementOptionBoxWrapper>
            <S.RadioButtonWrapper
              name="payementOption"
              type="radio"
              value={payment || ''}
              id='creditcard'
              onClick={savePaymentMethod}
              disabled={products.length === 0 ? true : false}
            />

            <S.Text> Cartão de crédito </S.Text>
          </S.PayementOptionBoxWrapper>

          <S.ConfirmButtonWrapper
            marginTop={products.length === 0 ? '145px' : '19px'}
            color={products.length === 0 ? 'rgba(232, 34, 46, 0.5)' : '#e8222e'}
            type='onsubmit'
          >
            Confirmar
                </S.ConfirmButtonWrapper>

        </S.FormWrapper>


      </S.CartWrapper>

      <MyBottonNav />

    </>
  )
}

const mapStateToProps = state => ({
  user: state.user.user,
  products: state.shopping.cartList
})

// const mapDispatchToProps = dispatch => ({

// })

export default connect(mapStateToProps)(Cart)