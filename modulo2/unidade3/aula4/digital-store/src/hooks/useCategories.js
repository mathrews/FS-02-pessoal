import { useQuery } from "react-query"
import { API } from "../service";

export const useCategories = () => {
    return useQuery(['categories'], async () => {
        const response = await API.get('categories');
        return response.data;
    });
}