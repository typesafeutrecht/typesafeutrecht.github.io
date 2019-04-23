
/// <reference types="./@types/meetup-api" />

import {MeetupEvent} from "./@types/meetup-api";

const meetup = require('meetup-api');

const key = process.env.MEETUP_API_KEY;
const groupId = 30411303;

if (!key) {
    console.error("No API key found :-( Please set the env variable MEETUP_API_KEY up!")
    process.exit(2);
}


const params = {'group_id': groupId, 'status': ['upcoming', 'past']};
meetup({ key }).getEvents(params, (err: object, response: {results: MeetupEvent[]}) => {

    if (err) {
        console.error(err);
        process.exit(1);
    }
    const events = response.results;
    console.log(JSON.stringify(events)); // This console.log is important for the shell script, which reads this as an input!

});