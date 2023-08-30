import React from "react";

let AuthContext = React.createContext(null);

function AuthProvider({ children }) {
  let [user, setUser] = React.useState(null);
  
  // Update the signin function to use your backend authentication
  let signin = async (email, password, callback) => {
    try {
      const response = await fetch("https://showhub-backend.vercel.app/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        setUser(email);
        callback();
      }
    } catch (error) {
      console.error("Error during signin:", error);
    }
  };

  let signout = (callback) => {
    localStorage.removeItem("token");
    setUser(null);
    callback();
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthProvider, AuthContext };
