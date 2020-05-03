import React from 'react'
import { connect } from 'react-redux'

import * as S from './styles'

import MyBottonNav from '../../components/BottonNav'

function Cart(props){

    return (
        <>
            <S.CartWrapper>
                Carrinho
            </S.CartWrapper>

            <MyBottonNav/>
            
        </>
    )
}

export default connect()(Cart)