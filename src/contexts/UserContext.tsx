import React from "react";
import { TOKEN_POST, USER_GET, TOKEN_VALIDATE_POST } from "../lib/api";

interface UserContextValue {
  data: { id: number; username: string; nome: string; email: string } | null;
  error: string | null;
  loading: true | false;
  login: true | false;
  userLogin: (username: string, password: string) => void;
  userLogout: () => void;
}

interface UserContext<T> {
  children?: React.ReactNode | undefined;
}

export const UserContext = React.createContext<UserContextValue>({
  data: { id: 0, username: "", nome: "", email: "" },
  error: "",
  loading: false,
  login: false,
  userLogin(): void {},
  userLogout(): void {},
});

export const UserStorage = ({ children }: any) => {
  const [data, setData] = React.useState<UserContextValue["data"] | null>(null);
  const [login, setLogin] = React.useState<true | false>(false);
  const [loading, setLoading] = React.useState<true | false>(false);
  const [error, setError] = React.useState<UserContextValue["error"] | null>(
    null
  );

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error(`Error: ${response.statusText}`);
          await getUser(token);
        } catch (err: any) {
          console.log(err);
          setError(err.message);
          userLogout();
        } finally {
          setLoading(false);
        }
      }
    }
    autoLogin();
  }, []);

  async function getUser(token: string) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  async function userLogin(username: string, password: string) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const tokenRes = await fetch(url, options);
      if (!tokenRes.ok) throw new Error(`Error: ${tokenRes.statusText}`);
      const { token } = await tokenRes.json();
      window.localStorage.setItem("token", token);
      await getUser(token);
    } catch (err: any) {
      console.log(err);
      setError(err.message);
      setLogin(false);
      userLogout();
    } finally {
      setLoading(false);
    }
  }

  async function userLogout() {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem("token");
  }

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data: data, error, loading, login }}
    >
      {children}
    </UserContext.Provider>
  );
};
