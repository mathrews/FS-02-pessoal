import axios from "axios";
import { QueryClient } from "react-query";

// eslint-disable-next-line react-refresh/only-export-components
export const API = axios.create({
    baseURL: "http://localhost:8000/"
});

// eslint-disable-next-line react-refresh/only-export-components
export const queryClient = new QueryClient();