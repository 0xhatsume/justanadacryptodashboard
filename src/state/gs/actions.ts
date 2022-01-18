import { createAction } from '@reduxjs/toolkit'

export const updateShortList = createAction('gs/updateShortList')
export const syncShortList = createAction<Array<any>>('gs/syncShortList')
export const setLoading = createAction<boolean>('gs/setLoading')