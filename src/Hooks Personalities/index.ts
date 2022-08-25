import { useSelector } from 'react-redux';
import { reducer } from '../main';
export const useData=()=>{
    return useSelector((state:reducer)=>state.data.data)
}
export const useShowMovie=()=>{
    return useSelector((state:reducer)=>state.data.showMovie)
}
export const usePopulars=()=>{
    return useSelector((state:reducer)=>state.data.popular)
}
export const useProfiles=()=>{
    return useSelector((state:reducer)=>state.profiles)
}