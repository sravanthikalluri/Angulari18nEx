import {HttpErrorResponse} from '@angular/common/http';

export const LOGIN_ENDPOINT = 'assets/json/login.json';

function setLoginData(details) {
    let result = details.payload.filter(item => {
        return item.email === details.data.email && item.password === details.data.password;
    }).length > 0;
    return result ? true : false ;

}

export function getDataTokenReducer(state: string = '', action) {
    switch (action.type) {
        case 'setLoginData':
             return setLoginData(action) ? {status: 200, token: 'Authorized'} : {status: 403};
        default:
            return '';
    }
}
export function getDataUrlReducer(state: string = '', action) {
    switch (action.type) {
        case 'getLogin':
            return LOGIN_ENDPOINT;
        default:
            return '';
    }
}

