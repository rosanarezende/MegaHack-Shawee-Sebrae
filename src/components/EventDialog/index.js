import React from 'react'
import { Dialog, DialogTitle, DialogContent, Button, TextField, MenuItem, Select, FormControl, InputLabel, FormLabel, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';
import { DivButton } from './styles'

class EventDialog extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			serviceSelected: undefined,
			localSelected: undefined,
			timeSelected: undefined,
			observeSelected: undefined
		}
	}

	handleClose = (event) => {
		event.preventDefault()
		const { addEvent, setOpenDialog, eventDate } = this.props

		const { serviceSelected, timeSelected, localSelected, observeSelected } = this.state

		const start = `${eventDate.dateStr}T${timeSelected}:00-03:00`
		const startTimeStamp = Date.parse(start)
		// console.log(startTimeStamp)

		// const milisecondsService = serviceSelected.durationTime * 60000
		// const endTimeStamp = startTimeStamp + milisecondsService
		// // console.log(endTimeStamp)

		const eventFormated = {
			// id: new Date().getTime(),
			title: serviceSelected,
			// duration: serviceSelected.durationTime,
			startTime: startTimeStamp,
			// endTime: endTimeStamp,
			localId: localSelected,
			observation: observeSelected,
		}
		console.log(eventFormated)

		// addEvent(eventFormated)
		// setOpenDialog(false)
	}

	handleTextFieldChange = (event) => {
		const { name, value } = event.target
		this.setState({
			...this.state,
			[name]: value
		})
	}

	getMinDate = () => {
		const today = new Date()
		const stringIsoToday = today.toISOString()
		const splitDateFromTime = stringIsoToday.split("T")
		return splitDateFromTime[0]
	}
 
	atualizaCheckBox = nomeInput => event => {
		let metodoPgcp = this.state.serviceSelected
		Object.keys(metodoPgcp).forEach(elemento => {
			if (elemento === event.target.name) {
				metodoPgcp[elemento] = event.target.checked
			}
		})
		this.setState({
			serviceSelected: metodoPgcp
		})

		this.geraArrayPagamentos(nomeInput, event.target.checked)
	}

	geraArrayPagamentos = (stringPagamento, estadoChecked) => {
		let arrayPagamentos = this.state.serviceSelected
		if (estadoChecked === true) {
			arrayPagamentos.push(stringPagamento)
		}
		else {
			arrayPagamentos.splice(arrayPagamentos.indexOf(stringPagamento), 1)
		}
		this.setState({
			serviceSelected: arrayPagamentos
		})
	}

	render() {
		const {
			eventDate, services, locations,
			dialogOpen,
		} = this.props

		return (
			<Dialog
				disableBackdropClick
				disableEscapeKeyDown
				open={dialogOpen}
				onClose={this.handleClose}
				BackdropProps={{
					style: {
						backgroundColor: 'black',
						opacity: 0.1,
					},
				}}
				PaperProps={{ style: { boxShadow: "none" } }}
				id="dialog"
			>
				<DialogTitle>
					Preencha os campos abaixo para agendar um serviço.
				</DialogTitle>

				<form onSubmit={this.handleClose}>
					<DialogContent>
						<TextField
							disabled
							name="dateSelected"
							margin='normal'
							variant='outlined'
							fullWidth
							label="Data"
							InputLabelProps={{
								shrink: true,
							}}
							type='date'
							InputProps={{
								min: this.getMinDate()
							}}
							value={eventDate && eventDate.dateStr}
						/>


						<TextField
							required
							margin='normal'
							name="timeSelected"
							variant='outlined'
							fullWidth
							label="Horário"
							InputLabelProps={{
								shrink: true,
							}}
							type='time'
							// min
							// max
							value={this.state.timeSelected}
							onChange={this.handleTextFieldChange}
						/>


						<TextField
							required
							select
							name='localSelected'
							margin='normal'
							variant='outlined'
							fullWidth
							label="Local"
							value={this.state.localSelected || ''}
							onChange={this.handleTextFieldChange}
							SelectProps={{ native: true }}
						// InputLabelProps={{
						// 	shrink: true,
						//   }}
						>
							<option value="" hidden></option>
							{locations.map(local => (
								<option value={local.id}>
									{local.name} {local.value && ` (acréscimo de ${local.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })})`}
								</option>
							))}
						</TextField>


						{/* checkbox */}

						<FormControl required>
							<FormLabel component="legend">Serviços</FormLabel>

							<FormGroup>
								{services.map(service => (
									<FormControlLabel
										control={
											<Checkbox
												name={service.name}
												value={this.state.serviceSelected}
												onChange={this.atualizaCheckbox}
											/>
										}
										label={`${service.name} - ${service.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}
									/>
								))}

							</FormGroup>

						</FormControl>

						{/* <FormControl
							required
							fullWidth
							margin="normal"
							variant="outlined"
						>
							<InputLabel
								id="servicos"
							>Serviços</InputLabel>
							<Select
								required
								labelId="servicos"
								name='serviceSelected'
								value={this.state.serviceSelected}
								onChange={this.handleTextFieldChange}
							>
								<MenuItem value="" hidden></MenuItem>
								{services.map(service => (
									<MenuItem value={service.id}>
										{service.name} - {service.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
									</MenuItem>
								))}
							</Select>
						</FormControl> */}

						<TextField
							margin='normal'
							name="observeSelected"
							variant='outlined'
							fullWidth
							label="Observações"
							multiline
							rows="3"
							value={this.state.observeSelected}
							onChange={this.handleTextFieldChange}

						/>

						{/* Mostrar valor total */}


					</DialogContent>

					<DivButton>

						{/* Se der tempo... pagamento */}

						<Button variant='contained' color='primary' type="submit">
							Agendar
						</Button>
					</DivButton>

				</form>

			</Dialog>
		)
	}

}

export default EventDialog