
export const AuthContext = createContext({ })

function AuthProvider(){

    const isAuthenticated = false;
    async function signIn(){
        
    }

    return(
        <AuthContext.Provider value={{ isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider