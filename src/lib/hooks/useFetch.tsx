import React from "react";

interface FetchOptions {
  method: string;
  headers?: {
    "Content-Type"?: string;
    Authorization?: string;
    cache?: string;
  };
  body?: string | FormData;
}

export const useFetch = () => {
  const [data, setData] = React.useState<any>();
  const [error, setError] = React.useState<string>();
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(
    async (url: string, options: FetchOptions) => {
      let response: Response | undefined;
      let json: any | null;

      try {
        setError(undefined);
        setLoading(true);
        response = await fetch(url, options);
        json = await response.json();
        if (response.ok === false) throw new Error(json.message);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknown error");
        }
        json = null;
      } finally {
        setData(json);
        setLoading(false);
        return { response, json };
      }
    },
    []
  );

  return { data, error, loading, request };
};
