import React from "react";
import { TOKEN_POST, USER_GET, TOKEN_VALIDATE_POST } from "../lib/api";
// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/router";
import { TUserData, TUserContextValue } from "../lib/types/TUser";

export const UserContext = React.createContext<TUserContextValue>(null as any);

export const UserStorage = ({ children }: any) => {
  const [data, setData] = React.useState<TUserData>();
  const [login, setLogin] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string>();
  const navigate = useRouter();

  const userLogout = React.useCallback(
    async function () {
      setData(undefined);
      setError(undefined);
      setLoading(false);
      setLogin(false);
      window.localStorage.removeItem("token");
      navigate.push("/login");
    },
    [navigate]
  );

  async function getUser(token: string) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  async function userLogin(username: string, password: string) {
    try {
      setError(undefined);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const tokenRes = await fetch(url, options);
      if (!tokenRes.ok)
        throw new Error(`Invalid username or password. ${tokenRes.statusText}`);
      const { token } = await tokenRes.json();
      window.localStorage.setItem("token", token);
      await getUser(token);
      navigate.push("/");
    } catch (err) {
      userLogout();
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Unknown error");
      }
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          setError(undefined);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error("Please, login again.");
          await getUser(token);
        } catch (err) {
          userLogout();
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError("Unknown error");
          }
          setLogin(false);
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }
    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data: data, error, loading, login }}
    >
      {children}
    </UserContext.Provider>
  );
};
