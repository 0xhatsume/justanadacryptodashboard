import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
// import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
//import { useDispatch, useSelector } from 'react-redux';

import { adminReducer, adminSaga, USER_LOGOUT} from 'react-admin';
import gsReducer from './gs/reducer';


const initStore = ({
    authProvider,
    dataProvider,
    history
    }) => {

    const reducer = combineReducers({
        admin: adminReducer,
        router: connectRouter(history),
        gs: gsReducer,
        // add your own reducers here
    });
    const resettableAppReducer = (state, action) =>
        reducer(action.type !== USER_LOGOUT ? state : undefined, action);

    const saga = function* rootSaga() {
        yield all(
            [
                adminSaga(dataProvider, authProvider),
                // add your own sagas here
            ].map(fork)
        );
    };
    const sagaMiddleware = createSagaMiddleware();

    const composeEnhancers =
        (process.env.NODE_ENV === 'development' &&
            typeof window !== 'undefined' &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                trace: true,
                traceLimit: 25,
            })) ||
        compose;

    const store = createStore(
        resettableAppReducer,
        { /* set your initial state here */ },
        composeEnhancers(
            applyMiddleware(
                sagaMiddleware,
                routerMiddleware(history),
                // add your own middlewares here
            ),
            // add your own enhancers here
        ),        
    );

    sagaMiddleware.run(saga);

    // const store = configureStore({
    //     reducer: {
    //         admin: adminReducer,
    //         //router: connectRouter(history) as Reducer<unknown, AnyAction>
    //     },
    //     //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
    //     //enhancers: [composeEnhancers], //not adding enhancers here first

    // });

    return store;
};

// type typeOfStore = ReturnType<typeof initStore>
// type getState = typeOfStore["getState"];
// type a = ReturnType<getState>
export type AppDispatch = ReturnType< typeof initStore >["dispatch"]
export type AppState = ReturnType<ReturnType< typeof initStore >['getState']>
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppState>= useSelector


export default initStore;