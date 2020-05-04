import React, {useEffect} from 'react'
import { connect } from 'react-redux'

import { getEvents } from '../../actions/calendar'

import * as S from './styles'
import { Typography, Card, CardContent } from '@material-ui/core'

import MyBottonNav from '../../components/BottonNav'
import MyPageTitle from '../../components/PageTitle'
import CardPurchaseHistoric from '../../components/CardPurchasesHistoric'

function MyAccount(props) {
	const { shoopingEvents, getEvents, events, user } = props

	useEffect(() => {
		getEvents()
	  }, [getEvents])

	let productsTotal = 0
	for(let event of shoopingEvents){
		let number = event.products.reduce((prevVal, product) => { return prevVal + product.value }, 0)
		productsTotal += number
	}

	const filteredEvents = events.filter(event => event.costumerId === user.id)
		
	const servicesTotal = filteredEvents.reduce((prevVal, service) => { return prevVal + service.service.value }, 0)
	
	const total = servicesTotal + productsTotal

	return (
		<>
      <MyPageTitle pageTitle='Minha Conta' />
			<S.MyAccountWrapper>
				<Typography align='center' variant='h5' gutterBottom color="primary">
					Histórico de atendimentos
        </Typography>
				
				<S.ItensWrapper>
					{filteredEvents.map(item => (
						<CardPurchaseHistoric key={item.id} item={item.service} startTime={item.startTime}/>
					))}
				</S.ItensWrapper>

				<S.DivCashBack>
					<Typography gutterBottom>
						Valor total dos atendimentos: {servicesTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
					</Typography>
				</S.DivCashBack>

				<Typography align='center' variant='h5' gutterBottom color="primary">
					Histórico de compras
        		</Typography>

				{shoopingEvents.map(event => (
					<div key={event.id}>
						<Typography variant="h6">						
							Data da compra: {new Date(event.date).toLocaleDateString()}
						</Typography>

						<S.ItensWrapper>
							{event.products.map(item => (
								<CardPurchaseHistoric key={item.id} item={item}/>
							))}
						</S.ItensWrapper>
					</div>
				))}

				<S.DivCashBack>
					<Typography gutterBottom>
						Valor total dos produtos: {productsTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
					</Typography>
				</S.DivCashBack>

				<S.DivTotal>
					<Card style={ { backgroundColor: '#D12B63'}}>
						<CardContent>
							<Typography gutterBottom>
								<strong>Valor total</strong> (produtos + serviços): {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
							</Typography>
							<Typography gutterBottom>
								<strong>CashBack disponível</strong> (10% para usar em produtos do salão): <S.ValueCashBack>{(total * 0.1).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</S.ValueCashBack>
							</Typography>
						</CardContent>
					</Card>
				</S.DivTotal>

			</S.MyAccountWrapper>

			<MyBottonNav />
		</>
	)
}

const mapStateToProps = state => ({
	shoopingEvents: state.shopping.shoopingEvents,
	events: state.calendar.events,
	user: state.user.user
})

const mapDispatchToProps = dispatch => ({
	getEvents: () => dispatch(getEvents()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount)