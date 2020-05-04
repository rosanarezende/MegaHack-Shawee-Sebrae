import React from 'react'

import ptbrLocale from '@fullcalendar/core/locales/pt-br'

import '@fullcalendar/core/main.css'
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/timegrid/main.css'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import EventDialog from '../EventDialog'


class EventCalendar extends React.Component {
	calendarComponentRef = React.createRef()
	
	handleDateClick = (event) => {
		const { setOpenDialog, setDate } = this.props
		setDate(event)
		setOpenDialog(true)
	}

	render() {

		const eventsHere = this.props.events.map(event => {
			const start = new Date(Number(event.startTime))
			
			let month
			if(start.getMonth() + 1 < 10){ month = `0${start.getMonth() + 1}`} 
			else { month = start.getMonth() + 1}
			let day
			if(start.getDate() < 10){ day = `0${start.getDate()}`} 
			else { day = start.getDate()}
			const startHour = start.toString().substr(16, 8)
			const startFormated = `${start.getFullYear()}-${month}-${day}T${startHour}-03:00`		

			const end = new Date(Number(event.endTime))
			let monthEnd
			if(end.getMonth() + 1 < 10){ monthEnd = `0${end.getMonth() + 1}`} 
			else { monthEnd = end.getMonth() + 1}
			let dayEnd
			if(end.getDate() < 10){ dayEnd = `0${end.getDate()}`} 
			else { dayEnd = end.getDate()}
			const endHour = end.toString().substr(16, 8)
			const endFormated = `${end.getFullYear()}-${monthEnd}-${dayEnd}T${endHour}-03:00`

			return {
				id: event.id,
				title: event.service && event.service.name,
				start:  startFormated,
				end: endFormated,
			}
		})

		const { 
			eventDate, 
			services,
			locations,
			user,

			setOpenDialog, 
			dialogOpen, 
			addEvent 
		} = this.props

		return (
			<>
				<FullCalendar
					defaultView="dayGridMonth"
					plugins={[dayGridPlugin, timeGridPlugin,
						interactionPlugin
					]}
					locale={ptbrLocale}
					ref={this.calendarComponentRef}
					weekends={true} // pode bloquear o fim de semana
					// validRange={{
					// 	start: new Date() // não consegue marcar pra dias atrás
					//  }}
					height={420}
					events={eventsHere}
					dateClick={this.handleDateClick}
				/>

				<EventDialog
					eventDate={eventDate}
					services={services}
					locations={locations}
					user={user}

					setOpenDialog={setOpenDialog}
					dialogOpen={dialogOpen}
					addEvent={addEvent}
				/>
			</>
		)
	}
}

export default EventCalendar