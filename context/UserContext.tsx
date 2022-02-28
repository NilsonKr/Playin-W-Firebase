import React, { useState } from "react";
import { User } from "firebase/auth";

type UserContextValues = {
  currentUser: User | null;
  updateUser: (newUser: null | User) => void;
};

export const userContext = React.createContext<Partial<UserContextValues>>({});

export const UserContextProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  console.log(user);

  return (
    <userContext.Provider value={{ currentUser: user, updateUser: setUser }}>
      {children}
    </userContext.Provider>
  );
};
