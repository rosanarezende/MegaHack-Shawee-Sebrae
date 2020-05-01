import React from 'react'
import * as S from './styles'
import { connect } from 'react-redux'

import EventCalendar from '../../components/EventCalendar'

function Calendar(props){
    const { events } = props

    return (
        <>
        <S.CalendarWrapper>
            
            <h1>Agende um horário</h1>

            <EventCalendar events={events}/>

        </S.CalendarWrapper>
        </>
    )
}

const mapStateToProps = (state) => ({
    events: state.calendar.events,
})

export default connect(mapStateToProps)(Calendar)