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

	state = {
		calendarWeekends: true,
		calendarEvents: this.props.events.map(event => {

			// aqui eu vou precisar trabalhar o timestamp pro formato certo


			return {
				id: event.id,
				title: event.title,
				description: event.description,
				// end: event.endTime,
				start: event.startTime,
				// 		extendedProps: event,
				// 		url: `/agenda/${event.slug}`
			}
		})
	}

	handleDateClick = (event) => {
		const { setOpenDialog, setDate } = this.props
		// console.log(event)

		// enviar o event.date
		setDate(event)

		setOpenDialog(true)

	}

	render() {

		const { 
			eventDate, 
			services,
			locations,

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
					weekends={this.state.calendarWeekends}
					events={this.state.calendarEvents}
					dateClick={this.handleDateClick}
				/>

				<EventDialog
					eventDate={eventDate}
					services={services}
					locations={locations}

					setOpenDialog={setOpenDialog}
					dialogOpen={dialogOpen}
					addEvent={addEvent}
				/>
			</>
		)
	}
}

export default EventCalendar