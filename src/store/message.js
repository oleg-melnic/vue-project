import { createStore } from 'vuex'
import {getMessages} from '../api/my-app'

export const store = createStore({
    state: {
        all: []
    },
    actions: {
        getMessages ({ state }) {
            return getMessages()
                .then((response) => {state.all = response.data; console.log('ssss', response.data); return response.data});
        }
    }
})
