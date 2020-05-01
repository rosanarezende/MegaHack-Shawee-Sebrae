import React from 'react'

import ptbrLocale from '@fullcalendar/core/locales/pt-br'

import '@fullcalendar/core/main.css'
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/timegrid/main.css'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
// import interactionPlugin from '@fullcalendar/interaction'


class EventCalendar extends React.Component {

	calendarComponentRef = React.createRef()

	state = {
		calendarWeekends: true,
		calendarEvents: [ // initial event data
			{ title: 'Event Now', start: new Date() }
		]
	}

	handleDateClick = (arg) => {
		const title = prompt('Título')
		// const horario = prompt('horario')
		console.log(arg)

		// if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
		this.setState({  // add new event data
			calendarEvents: this.state.calendarEvents.concat({ // creates a new array
				title: title,
				start: arg.date
				//   allDay: arg.allDay
			})
		})
		//   }  
	}

	render() {

		const { events } = this.props

		const eventViews = events.map(event => {
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

		return (
			<>
				<FullCalendar
					defaultView="dayGridMonth"
					plugins={[dayGridPlugin, timeGridPlugin,
						// interactionPlugin
					]}
					locale={ptbrLocale}
					header={{
						left: 'prev,next today',
						center: 'title',
						right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
					}}
					events={eventViews}
					ref={this.calendarComponentRef}
					weekends={this.state.calendarWeekends}
				// events={ this.state.calendarEvents }
				// dateClick={ this.handleDateClick }
				/>
			</>
		)
	}
}

export default EventCalendar