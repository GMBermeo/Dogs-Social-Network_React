import React from "react";
import s from "./UserStatsGraphs.module.css";

export const UserStatsGraphs = ({ data }: any) => {
  const [graph, setGraph] = React.useState();
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    setTotal(
      data
        .map(({ acessos }: any) => Number(acessos))
        .reduce((a: any, b: any) => a + b)
    );
  }, [data]);

  return (
    <section className={`animeLeft ${s.graph}`}>
      <div className={s.total}>
        <p>Views: {total}</p>
      </div>
    </section>
  );
};
