import {GET_PERSONAL_DATA, GET_SHARED_DATA, UPDATE_THEME } from '../Actions/actionCreator'
import {createStore} from 'redux'

const store = createStore()

const initalState = (
    {
        user: "",
        theme: "blue",
        Personal: {},
        shared: {}
    }
)

const reducer = function(state = initalState, action){


    switch(action.type ){


        case 'GETPERSONALDATA':
            // run a get function
            return (state = {...state, data : action.data});


        case "GETSHAREDDATA":
            // run a get function
            return (state = {...state, shared : action.data});


        case "UPDATETHEME":
        // run a PUT function
        return (state.theme = action.data.theme)
        
    }

}


export default reducer;