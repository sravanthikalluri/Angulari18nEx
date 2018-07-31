import {getDataTokenReducer, getDataUrlReducer} from './app.reducer';
import {combineReducers} from '@ngrx/store';

export const rootReducer = combineReducers({
     getData: getDataUrlReducer ,
      getToken: getDataTokenReducer
});
