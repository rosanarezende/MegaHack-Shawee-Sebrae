import React from 'react'
import * as S from './styles'
import { connect } from 'react-redux'

import EventCalendar from '../../components/EventCalendar'

import { setOpenDialog, setDate } from '../../actions/calendar'

function Calendar(props){
    const { events, setOpenDialog, dialogOpen, setDate, eventDate } = props

    return (
        <>
        <S.CalendarWrapper>
            
            <h1>Agende um horário</h1>

            <EventCalendar 
                events={events}
                setOpenDialog={setOpenDialog}
                dialogOpen={dialogOpen}
                setDate={setDate}
                eventDate={eventDate}
            />

            <h1>Histórico de atendimentos</h1>

        </S.CalendarWrapper>
        </>
    )
}

const mapStateToProps = (state) => ({
    events: state.calendar.events,
    dialogOpen: state.calendar.dialogOpen,
    eventDate: state.calendar.eventDate
})

const mapDispatchToProps = dispatch => ({
    setOpenDialog: (option) => dispatch(setOpenDialog(option)), 
    setDate: (date) => dispatch(setDate(date))
})

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)