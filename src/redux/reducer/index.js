import { combineReducers } from 'redux';
import citySlice from '../feature/city/citySlice';

const rootReducer = combineReducers({
  city: citySlice, // Add other reducers here
});

export default rootReducer;