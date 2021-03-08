import _ from 'lodash'
import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM, 
  EDIT_STREAM, 
  DELETE_STREAM 
} from '../actions/types'
export default (state = {}, action) => {
 switch (action.type) {
   case FETCH_STREAMS:
     //return {...state, ..._.mapKeys(action.payload, 'id')}
     return {...state, ...Object.fromEntries(
       action.payload.map(i => [i.id, i])
     )}
   case FETCH_STREAM: 
     return {...state, [action.payload.id]: action.payload};
   case CREATE_STREAM:
     return {...state, [action.payload.id]: action.payload};
   case EDIT_STREAM:
     return {...state, [action.payload.id]: action.payload};
   case DELETE_STREAM: /*MIND the id is payload itself*/
     //return _.omit(state, action.payload);
     return Object.fromEntries(Object.entries(state)
       .filter(i => i[1] !== action.payload)
     )
   default: 
     return state
 }
} 