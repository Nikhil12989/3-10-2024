import { useState, useEffect, useContext, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: null, // Use null for better clarity when checking
  });

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
        try {
            const parsedData = JSON.parse(data);
            console.log("Parsed Auth Data:", parsedData); // Log the parsed data
            setAuth({
                user: {
                    firstname: parsedData.user.firstname,
                    lastname: parsedData.user.lastname,
                    email: parsedData.user.email,
                    role: parsedData.user.role,
                    _id: parsedData.user._id || null, // Include user ID
                },
                token: parsedData.token,
            });
        } catch (error) {
            console.error("Failed to parse auth data:", error);
            localStorage.removeItem("auth");
        }
    }
}, []);

  useEffect(() => {
    if (auth.token) {
      localStorage.setItem("auth", JSON.stringify(auth)); // Store in localStorage when auth changes
    } else {
      localStorage.removeItem("auth"); // Remove if no token
    }
  }, [auth]);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
