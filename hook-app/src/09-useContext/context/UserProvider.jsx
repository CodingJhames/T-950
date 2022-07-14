import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = { 
//     id: 123,
//     name:'Chepito Mejía',
//     email: "Chepito@Google.com"
// } 


const UserProvider = ( { children } ) => {

    const [user, setUser] = useState();


    return (
        // <UserContext.Provider value={{ hola: 'Mundo', user: user  }} >
        < UserContext.Provider  value={ { user, setUser }}>
            { children }
        </UserContext.Provider>
    )
}

export default UserProvider
