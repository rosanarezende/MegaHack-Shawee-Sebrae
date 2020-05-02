import React from 'react'
import { Dialog, DialogTitle, DialogContent, Button, TextField, MenuItem } from '@material-ui/core';
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

		const milisecondsService = serviceSelected.durationTime * 60000
		const endTimeStamp = startTimeStamp + milisecondsService
		// console.log(endTimeStamp)

		const eventFormated = {
			id: new Date().getTime(),
			title: serviceSelected.name,
			duration: serviceSelected.durationTime,
			startTime: startTimeStamp,
			endTime: endTimeStamp,
			localId: localSelected.id,
			observation: observeSelected,
		}
		// console.log(eventFormated)

		addEvent(eventFormated)
		setOpenDialog(false)
	}

	handleTextFieldChange = (event) => {
		const { name, value } = event.target
		this.setState({
			[name]: value
		})
	}

	getMinDate = () => {
		const today = new Date()
		const stringIsoToday = today.toISOString()
		const splitDateFromTime = stringIsoToday.split("T")
		return splitDateFromTime[0]
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
							SelectProps={{
								native: true,
							  }}
						>
							<option value="" hidden></option>
							{locations.map(local => (
								<option value={local}>
									{local.name} {local.value && ` (acréscimo de ${local.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })})`}
								</option>
							))}
						</TextField>

						<TextField
							required
							select
							name='serviceSelected'
							margin='normal'
							variant='outlined'
							fullWidth
							label="Serviços"
							value={this.state.serviceSelected || ''}
							onChange={this.handleTextFieldChange}
							SelectProps={{
								native: true,
							  }}
						>
							<option value="" hidden></option>
							{services.map(service => (
								<option value={service}>
									{service.name} - {service.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
								</option>
							))}
						</TextField>

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

					</DialogContent>

					<DivButton>
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