import React from 'react'

import * as S from './styles'
import { CardContent, Typography } from '@material-ui/core'

function CardPurchaseHistoric(props) {
    const { item, startTime } = props
    const date = new Date(Number(startTime))
    let month
    if (date.getMonth() + 1 < 10) { month = `0${date.getMonth() + 1}` }
    else { month = date.getMonth() + 1 }
    let day
    if (date.getDate() < 10) { day = `0${date.getDate()}` }
    else { day = date.getDate() }
    const hour = date.toString().substr(16, 5)
    const dateFormated = `${day}/${month}/${date.getFullYear()} - ${hour}h`

    return (
        <S.CardProduct>
            <S.CardImageProduct
                image={item.img}
                title={item.name}
            />
            <CardContent>
                <Typography variant="h6">
                    {item.name}
                </Typography>

                <Typography variant="body1">
                    Valor: {item.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </Typography>

                {startTime &&
                    <Typography variant="body1">
                        Data: {dateFormated}
                    </Typography>
                }

            </CardContent>

        </S.CardProduct>
    )
}

export default CardPurchaseHistoric
