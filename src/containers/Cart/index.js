import React, { useState } from 'react'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from  '../Router'

import * as S from './styles'
import { Card, CardHeader, Avatar, Typography } from '@material-ui/core'

import { addOrder } from '../../actions/shopping'

import MyBottonNav from '../../components/BottonNav'
import ProductInCart from '../../components/ProductInCart'
import MyPageTitle from '../../components/PageTitle'

function Cart(props) {
  const { user, products, addOrder, goHome, goProducts } = props
  const productsTotal = products.reduce((prevVal, product) => { return prevVal + product.value }, 0)
  const frete = 5
  const cashBack = 12.5

  const [payment, setpayment] = useState('')

  function savePaymentMethod(e) {
    setpayment(e.target.id)
  }

  function onPlaceOrder(e) {
    e.preventDefault()
    const placeOrderData = {
        products: products,
        paymentMethod: payment,
        date: new Date().getTime()
    }
    if (products.length === 0) {
      alert('Adicione produtos ao carrinho para realizar um pedido!')
      goProducts()
    }
    else {
      alert('Pedido realizado com sucesso!') // se tivesse integrado com back não seria assim
      addOrder(placeOrderData)
      goHome()
    }
  }


  return (
    <>
      <MyPageTitle showBack pageTitle='Carrinho' />
      <S.CartWrapper>
        <Card>
          <CardHeader
            avatar={
              // <Avatar
              //   src={user.photo}
              //   alt={user.name}
              // />
              
              // enquanto usuário não tem foto de perfil
              <Avatar style={ { backgroundColor: '#D12B63'}}>
                {user.name && user.name.slice(0, 1).toUpperCase()}
              </Avatar>
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

const mapDispatchToProps = dispatch => ({
  addOrder: (order) => dispatch(addOrder(order)),
  goHome: () => dispatch(push(routes.home)),
  goProducts: () => dispatch(push(routes.produtos))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)