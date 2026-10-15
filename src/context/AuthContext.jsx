import {
  createContext,
  useContext,
  useState,
} from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("nexaUser");

    return savedUser
      ? JSON.parse(savedUser)
      : null;
  });

  // CUSTOMER LOGIN
  const login = (userData) => {
    const customer = {
      ...userData,
      role: "customer",
    };

    localStorage.setItem(
      "nexaUser",
      JSON.stringify(customer)
    );

    setUser(customer);
  };

  // ADMIN LOGIN
  const adminLogin = (userData) => {
    const admin = {
      ...userData,
      role: "admin",
    };

    localStorage.setItem(
      "nexaUser",
      JSON.stringify(admin)
    );

    setUser(admin);
  };

  // LOGOUT
  const logout = () => {
    localStorage.removeItem("nexaUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        adminLogin,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};