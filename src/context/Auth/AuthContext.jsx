import { createContext, useEffect, useState } from "react";
 
export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{

    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState(null);
    const [loading, setLoading]= useState(false);

    const isAuthenticated = !!token;

    useEffect(()=>{
        const fetchUser = async() =>{
            if(token && !user){
                try {
                    setLoading(true)
                    const response = await fetch('https://api.escuelajs.co/api/v1/auth/profile',{
                        headers:{
                            Authorization: `Bearer ${token}`
                        }
                    });

                    if(!response.ok) throw new Error("Failed to fetch user profile");

                    const userData = await  response.json();

                    userData.role = localStorage.getItem('role');

                    setUser(userData);

                } catch (error) {
                    console.log(error);
                }finally{
                    setLoading(false);
                }
            }
        }

        fetchUser()
    },[token]);

    const login = async (newToken, selectedRole) =>{
        localStorage.setItem('token', newToken);
        localStorage.setItem('role', selectedRole);
        setToken(newToken);

        try {
            setLoading(true);
            const response = await fetch("https://api.escuelajs.co/api/v1/auth/profile", {
                headers:{
                    Authorization : `Bearer ${newToken}`
                }
            });

            if(!response.ok){
                throw new Error('Failed to fetch user profile');
            }

            const userData = await response.json();
            
            userData.role = selectedRole;
            setUser(userData);
            
        } catch (error) {
            console.log(error);
        } finally{
            setLoading(false);
        }
    }

    const logout = () =>{
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        setToken(null);
        setUser(null);
    }

    return(
        <AuthContext.Provider value={{isAuthenticated, login, logout, token, user, loading, setLoading}}>
            {children}
        </AuthContext.Provider>
    )
}