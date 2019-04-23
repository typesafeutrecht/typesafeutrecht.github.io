import React, { Component } from 'react';
import './Meetups.css';
import {MeetupEvent} from "../../../scripts/@types/meetup-api";
import moment  from "moment";



const Meetup = (props: {event: MeetupEvent}) => {
  const { event } = props;
  const isPast = new Date().getTime() > event.time;
  const timestampString = moment(event.time).endOf('day').fromNow();
  const classNames = "meetup" + (isPast ? ' past' : ' future');
  const goWord = isPast ? "went" : "are joining";
    return (<div className={classNames} key={event.event_url}>
        <div className="title">{event.name}</div>
        <div className="location">📍 {event.venue.name}</div>
        <div className="going">{event.yes_rsvp_count} type ninjas {goWord} { timestampString }</div>
        { !isPast && <a href={event.event_url}>🗓 Join in {timestampString}</a>}
    </div>);
};


export default () => (<div className="meetups">
    { meetupsData ?
        meetupsData.reverse().slice(0, 4).map(meetupEvent => <Meetup key={meetupEvent.event_url} event={meetupEvent}/> ) :
        <div>No meetups found </div>
    }
</div>)


const meetupsDataString = process.env.REACT_APP_MEETUPS_DATA!;
console.log(meetupsDataString)
const meetupsData: MeetupEvent[] | null = JSON.parse(meetupsDataString);