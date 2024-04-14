import { createStore, combineReducers, applyMiddleware } from "redux";
import { todos,isLoading } from "./todos/reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"; // Import thunk middleware correctly
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const reducers = {
    todos,
    isLoading,
};

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () => createStore(
    persistedReducer,
    composeWithDevTools(
        applyMiddleware(thunk) // Apply thunk middleware
    )
);

export default configureStore;
