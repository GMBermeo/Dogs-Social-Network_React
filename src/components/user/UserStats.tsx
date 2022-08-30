import React from "react";
import { GET_STATS } from "../../lib/api";
import { useFetch } from "../../lib/hooks";
import { Head } from "../common";
import { Loading } from "../ui";
import { Error } from "../ui/Helper/Error";
import { UserStatsGraphs } from "./UserStatsGraphs";

export const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = GET_STATS();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <div>
        <Head title="Stats" />
        <UserStatsGraphs data={data} />
      </div>
    );
  else return null;
};
