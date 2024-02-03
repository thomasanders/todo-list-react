import { useHistory, useLocation }  from "react-router-dom";

export const useQueryParameter = key => {
    const useLocation = useLocation();
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get(key);
}

export const useReplaceParameter = ()=>{
    const location = useLocation();
    const history = useHistory();

    return ({key, value}) => {
        const searchParams = new URLSearchParams(location.search);

        if(value===undefined){
            searchParams.delete(key);
            
        }else{
            searchParams.set(key, value);
        }

        const newSearch = searchParams.toString();
        history.push(`${location.pathme}?${newSearch}`);
    }
}