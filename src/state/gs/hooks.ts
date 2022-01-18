import { useAppSelector } from '../index';

export function useUpdateShortList(){
    return useAppSelector((state) => state.gs.loading)
}

export function useSyncShortList(){
    return useAppSelector((state) => state.gs.loading)
}

export function useGsLoading(): boolean {
    return useAppSelector((state) => state.gs.loading)
}

export function useGetShortList(): Array<any>{
    return useAppSelector((state)=>state.gs.shortlist)
}