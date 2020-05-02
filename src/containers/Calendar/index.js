import React from 'react'
import { connect } from 'react-redux'

import EventCalendar from '../../components/EventCalendar'
import MyBottonNav from '../../components/BottonNav'

import { setOpenDialog, setDate, addEvent } from '../../actions/calendar'

import { Typography } from '@material-ui/core'
import * as S from './styles'

function Calendar(props) {
    const {
        events,
        dialogOpen,
        eventDate,
        services,
        locations,

        setOpenDialog,
        setDate,
        addEvent,
    } = props
    return (
        <>
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

                        setOpenDialog={setOpenDialog}
                        setDate={setDate}
                        addEvent={addEvent}
                    />
                </S.EventCalendarWrapper>

                <Typography align='center' variant='h3' gutterBottom color="primary">
                    Histórico de atendimentos
                </Typography>

                <Typography>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium laborum quae dicta iure consequatur! Quisquam, temporibus cumque! Ad, quia dolorum sunt officiis dignissimos minus est velit suscipit dolores explicabo illum.
                </Typography>

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
    locations: state.professional.locations
})

const mapDispatchToProps = dispatch => ({
    setOpenDialog: (option) => dispatch(setOpenDialog(option)),
    setDate: (date) => dispatch(setDate(date)),
    addEvent: (event) => dispatch(addEvent(event))
})

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)