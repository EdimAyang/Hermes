import { createContext, useState } from "react";
export const UserContext = createContext();

function UserContextProvider() {
    const [user, setUser] = useState({
        name: "Emmanuel",
        password: "1234",
    })
  return (
    <div>
      <UserContext.Provider value={{...user}}>
      </UserContext.Provider>
    </div>
  )
}

export default UserContextProvider
