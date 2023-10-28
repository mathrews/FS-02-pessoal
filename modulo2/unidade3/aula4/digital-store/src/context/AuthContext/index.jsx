import { createContext } from "react";

export const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    return (
        <>
            <AuthContext.Provider>
                {children}
            </AuthContext.Provider>
        </>
    )
}