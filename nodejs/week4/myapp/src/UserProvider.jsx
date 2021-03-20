import { createContext, useState, useContext, useEffect } from "react";

export const UserContext = createContext();
const url = "https://api.github.com/search/users?q=";

const UserProvider = ({ children }) => {
  const [users, setusers] = useState([]);
  const [query, setquery] = useState("");
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState();
  const contextValue = {
    users,
    query,
    loading,
    error,
    queryChange: (e) => {
      setquery(e.target.value);
    },
  };
  useEffect(() => {
    
    if (query === "") return;
    else {
      setloading(true);
      fetch(url + query)
        .then((res) => res.json())
        .then((data) => {
          setloading(false);
          if (data.message) throw new Error(data.message);
          setusers(data.items);
        })
        .catch((err) => {
          seterror(err.toString());
        });
    }
  }, [query]);
  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

export const UseUserContext = () => {
  const context = useContext(UserContext);
  return context;
};

export default UserProvider;
