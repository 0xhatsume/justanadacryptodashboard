import { createReducer } from '@reduxjs/toolkit';
import {
    updateShortList, syncShortList, setLoading
} from './actions';

export interface GsState {
    shortlist: Array<any>
    loading: boolean
}

const initialState: GsState = {
    shortlist: [],
    loading: false
}

export default createReducer(initialState, (builder) => 
    builder
        .addCase(updateShortList, (state, action) => {
            //console.log("update shortlist")
            console.log(state.shortlist)
        })
        .addCase(setLoading, (state, action) => {
            //console.log(`loading shortlist: ${action.payload}`)
            state.loading = action.payload
        })
        .addCase(syncShortList, (state, action) => {
            //console.log('sync shortlist')
            state.shortlist = action.payload? action.payload : []
        })
)