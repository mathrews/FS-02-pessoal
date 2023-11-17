import { useMutation, useQuery } from "react-query"
import { API, queryClient } from "../service";

export const useProducts = () => {
    return useQuery(['products'], async () => {
        const response = await API.get('products');
        return response.data;
    });
}

export const useProductCreate = () => {
    return useMutation(async (data) => {
        return await API.post('products', data);
    },
    {
        onSuccess: () => {
            queryClient.invalidateQueries(['products'])
        }
    });
}

export const useProductDelete = () => {
    return useMutation(async (id) => {
        return await API.delete(`products/${id}`);
    },
    {
        onSuccess: () => {
            queryClient.invalidateQueries(['products']);
        }
    });
}

export const useProductUpdate = () => {
    return useMutation(async (data) => {
        console.log(data);
        return await API.put(`products/${data.id}`, data)
    },
    {
        onSuccess: () => {
            queryClient.invalidateQueries(['products']);
        }
    })
}