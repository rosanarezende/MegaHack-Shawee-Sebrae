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
			return {
				id: event.id,
				title: event.title,
				description: event.description,
				end: event.endTime,
				start: event.startTime,
				// 		extendedProps: event,
				// 		url: `/agenda/${event.slug}`
			}
		})
	}

	handleDateClick = (event) => {
		const {setOpenDialog, setDate} = this.props

		// enviar o event.date
		setDate(event.dateStr)
		
		setOpenDialog(true)

	}

	render() {

		const {setOpenDialog, dialogOpen, eventDate} = this.props

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
					events={ this.state.calendarEvents }
					dateClick={ this.handleDateClick }
				/>

				<EventDialog 
				setOpenDialog={setOpenDialog}
				dialogOpen={dialogOpen}
				eventDate={eventDate}
				/>
			</>
		)
	}
}

export default EventCalendar