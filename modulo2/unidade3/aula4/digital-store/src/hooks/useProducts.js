import { useQuery } from "react-query"
import { API } from "../service";

export const useProducts = () => {
    return useQuery(['products'], async () => {
        const response = await API.get('products');
        return response.data;
    });
}