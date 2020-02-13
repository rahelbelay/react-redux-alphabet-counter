import {
    createStore
} from 'redux';

import {
    count
} from './reducers';
import React from 'react'
import Counter from './containers/CounterContainers'
import { Provider } from 'react-redux'


const store = createStore(count)
export default function CounterApp() {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    )
}