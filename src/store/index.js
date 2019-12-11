import { createStore } from "redux"
import rootReducer from "../reducers"

export const configureStore = () => {
    let store = createStore(rootReducer)
    return store
}
