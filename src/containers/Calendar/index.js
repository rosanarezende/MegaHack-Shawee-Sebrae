import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import EventCalendar from '../../components/EventCalendar'
import MyBottonNav from '../../components/BottonNav'
import MyPageTitle from '../../components/PageTitle'

import { setOpenDialog, setDate, addEvent } from '../../actions/calendar'
import { getEvents } from '../../actions/calendar'
import { getLocals, getServices } from '../../actions/professional'

import { Typography } from '@material-ui/core'
import * as S from './styles'

function Calendar(props) {

  const {
    events,
    dialogOpen,
    eventDate,
    services,
    locations,
    user,

    setOpenDialog,
    setDate,
    addEvent,
    getEvents,
    getLocals,
    getServices
  } = props

  useEffect(() => {
    getEvents()
    getLocals()
    getServices()
  }, [getEvents, getLocals, getServices])

  return (
    <>
      <MyPageTitle pageTitle='Agendamento' />
      <S.CalendarWrapper>

        <Typography align='center' variant='h3' gutterBottom color="primary">
          Agende seu atendimento
        </Typography>

        <S.EventCalendarWrapper>
          <EventCalendar
            events={events}
            dialogOpen={dialogOpen}
            eventDate={eventDate}
            services={services}
            locations={locations}
            user={user}

            setOpenDialog={setOpenDialog}
            setDate={setDate}
            addEvent={addEvent}
          />
        </S.EventCalendarWrapper>

      </S.CalendarWrapper>

      <MyBottonNav />
    </>
  )
}

const mapStateToProps = (state) => ({
  events: state.calendar.events,
  dialogOpen: state.calendar.dialogOpen,
  eventDate: state.calendar.eventDate,
  services: state.professional.services,
  locations: state.professional.locations,
  user: state.user.user
})

const mapDispatchToProps = dispatch => ({
  setOpenDialog: (option) => dispatch(setOpenDialog(option)),
  setDate: (date) => dispatch(setDate(date)),
  addEvent: (event) => dispatch(addEvent(event)),
  getEvents: () => dispatch(getEvents()),
  getLocals: () => dispatch(getLocals()),
  getServices: () => dispatch(getServices())
})

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)