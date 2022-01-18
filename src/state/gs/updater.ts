import { useCallback, useEffect } from "react";
import { useAppDispatch } from "..";
import { setLoading, syncShortList} from './actions';

import useGetGSData from '../../services/gs';

export default function GoogleSheetSync(): null {
    const dispatch = useAppDispatch()

    const getGSdata = useGetGSData()

    const fetchGSdata = useCallback(
        async()=>{
            const data = await getGSdata();
            //dispatch if data is present 
            if(data){dispatch(syncShortList(data))}
            //console.log(data)
            return
        }, [dispatch, getGSdata]
    )
    useEffect(()=>{
        // set loading
        dispatch(setLoading(true))

        //fetch data
        fetchGSdata().then(()=>{
            dispatch(setLoading(false))
        })
    })

    return null
}