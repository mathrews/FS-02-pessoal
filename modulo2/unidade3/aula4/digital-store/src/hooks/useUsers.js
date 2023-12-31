import { useMutation, useQuery } from "react-query"
import { API, queryClient } from "../service";

export const useUsers = () => {
    return useQuery(['users'], async () => {
        const response = await API.get('users');
        return response.data;
    });
}

export const useUserCreate = () => {
    return useMutation(async (data) => {
        return await API.post('users', data);
    },
    {
        onSuccess: () => {
            queryClient.invalidateQueries(['users'])
        }
    });
}

export const useUserDelete = () => {
    return useMutation(async (id) => {
        return await API.delete(`users/${id}`);
    },
    {
        onSuccess: () => {
            queryClient.invalidateQueries(['users']);
        }
    });
}

export const useUserUpdate = () => {
    return useMutation(async (data) => {
        console.log(data);
        return await API.put(`users/${data.id}`, data)
    },
    {
        onSuccess: () => {
            queryClient.invalidateQueries(['users']);
        }
    })
}