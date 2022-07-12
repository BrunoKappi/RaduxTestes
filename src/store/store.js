import { combineReducers, createStore } from 'redux'

import chamados from './reducers/chamados'

const store = createStore(
    combineReducers({
        chamados: chamados
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)



store.subscribe(() => {
    console.log("CHANGED",store.getState() )
})


export default store



