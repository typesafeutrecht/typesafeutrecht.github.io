declare module 'meetup-api';

type GetEventsParams = {
group_id?: number
status?: string[]
}

export interface Venue {
    name: string
    city: string;
    address_1: string;
}

export interface MeetupEvent {
    name: string;
    event_url: string;
    time: number;
    utc_offset: number;
    venue: Venue
    visibility: boolean;
    announced: boolean;
    time: number;
    description: string;
    event_url: string;
    yes_rsvp_count: number;

}

interface MeetupOps {
    getEvents: (params: GetEventsParams, callback: (error: object, response: { results: MeetupEvent[] }) => void) => any
}

export default (settings: object) => MeetupOps