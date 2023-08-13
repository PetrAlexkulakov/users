import { createContext, useState } from 'react';
import { AnyUser } from '../interfaces/user';
import { defaultLoggedUser } from './defaultLoggedUser';

export const UserContext = createContext<{
  LoggedUser: AnyUser;
  setLoggedUser: React.Dispatch<React.SetStateAction<AnyUser>>;
}>({
  LoggedUser: defaultLoggedUser,
  setLoggedUser: () => {},
});

export const UserProvider = ({ children }: React.PropsWithChildren) => {
  const [LoggedUser, setLoggedUser] = useState<AnyUser>(defaultLoggedUser);

  return (
    <UserContext.Provider value={{ LoggedUser, setLoggedUser }}>
      {children}
    </UserContext.Provider>
  );
};
