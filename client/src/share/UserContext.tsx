import { createContext, useState } from 'react';
import { AnyUser, NotLoggedUser } from '../interfaces/user';

export const defaultLoggedUser: NotLoggedUser = { id: 'Not Logged', status: 'Not Logged' };

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
