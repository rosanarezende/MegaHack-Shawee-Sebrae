import React from 'react'
import * as S from './styles'
import { connect } from 'react-redux'

import EventCalendar from '../../components/EventCalendar'

import { setOpenDialog, setDate, addEvent } from '../../actions/calendar'

function Calendar(props){
    const { events, setOpenDialog, dialogOpen, setDate, eventDate, addEvent } = props
    console.log(props.local)
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
                addEvent={addEvent}
            />

            <h1>Histórico de atendimentos</h1>

        </S.CalendarWrapper>
        
        </>
    )
}

const mapStateToProps = (state) => ({
    events: state.calendar.events,
    dialogOpen: state.calendar.dialogOpen,
    eventDate: state.calendar.eventDate,
    local: state.navigation.actualPage
})

const mapDispatchToProps = dispatch => ({
    setOpenDialog: (option) => dispatch(setOpenDialog(option)), 
    setDate: (date) => dispatch(setDate(date)),
    addEvent: (event) => dispatch(addEvent(event))
})

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)