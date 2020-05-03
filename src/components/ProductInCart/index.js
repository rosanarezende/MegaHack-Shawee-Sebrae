import React from 'react'

import * as S from './styles'
import { CardContent, Typography } from '@material-ui/core'

function ProductInCart(props){
    const { product } = props
    return (
        <S.CardProductInCart>
            
            <S.CardImageProductInCart
                image={product.img}
                title={product.name}
            />

            <CardContent>
                <Typography variant="h6">
                    {product.name}
                </Typography>

                <Typography variant="body1">
                    Valor: {product.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </Typography>

            </CardContent>


        </S.CardProductInCart>
    )
}

export default ProductInCart