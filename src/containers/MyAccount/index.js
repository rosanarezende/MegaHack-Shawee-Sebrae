import React from 'react'
import { connect } from 'react-redux'

import * as S from './styles'
import { Typography, Card, CardContent } from '@material-ui/core'

import MyBottonNav from '../../components/BottonNav'
import CardPurchaseHistoric from '../../components/CardPurchasesHistoric'

function MyAccount() {

	// dados mocados... depois precisamos trabalhar isso, vindo do events... filtrar a pessoa

	const products = [
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
	]

	const productsTotal = products.reduce((prevVal, product) => { return prevVal + product.value }, 0)


	const services = [
		{
			id: 1,
			name: 'Corte de cabelo masculino',
			value: 30,
			img: 'https://static1.belezaextraordinaria.com.br/articles/6/24/02/6/@/241661-o-corte-curto-com-maquina-e-uma-boa-opca-article_news-3.jpg',
			date: 1588448549809,
		},
		{
			id: 2,
			name: 'Corte de cabelo feminino',
			value: 50,
			img: 'https://static1.belezaextraordinaria.com.br/articles/1/23/87/1/@/241011-veja-os-nomes-dos-cortes-mais-famosos-e-article_news-4.jpg',
			date: 1588448549809,
		},
		{
			id: 3,
			name: 'Descoloração',
			value: 60,
			img: 'https://correio-cdn1.cworks.cloud/fileadmin/_processed_/f/c/csm_shutterstock_249360427_d9678da4c4.jpg',
			date: 1588448549809,
		}
	]

	const servicesTotal = services.reduce((prevVal, service) => { return prevVal + service.value }, 0)

	const total = servicesTotal + productsTotal

	return (
		<>
			<S.MyAccountWrapper>

				<Typography align='center' variant='h5' gutterBottom color="primary">
					Histórico de atendimentos
        </Typography>
				
				<S.ItensWrapper>
					{services.map(item => (
						<CardPurchaseHistoric key={item.id} item={item}/>
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

				<S.ItensWrapper>
					{products.map(item => (
							<CardPurchaseHistoric key={item.id} item={item}/>
					))}
				</S.ItensWrapper>

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

})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount)