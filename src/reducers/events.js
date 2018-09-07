import _ from 'lodash'
import {READ_EVENTS} from '../actions'

export default (events = {}, action) => {
    switch (action.type) {
        case READ_EVENTS:
            console.log("trace:reducers/event.js")
            console.log(_.mapKeys(action.response.data, 'id'))
            return _.mapKeys(action.response.data, 'id')
        default:
            return events
    }
}