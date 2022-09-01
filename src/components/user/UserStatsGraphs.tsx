import React from "react";
import s from "./UserStatsGraphs.module.css";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";
import { TPhoto } from "../../lib/types/TPhoto";
import { Error } from "../ui";

const UserStatsGraphs = ({ data }: any) => {
  const [graph, setGraph] = React.useState();
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    if (data.length > 0) {
      const graphData = data.map((item: TPhoto) => {
        return {
          x: item.title,
          y: Number(item.acessos),
        };
      });

      setTotal(
        data
          .map(({ acessos }: TPhoto) => Number(acessos))
          .reduce((a: any, b: any) => a + b)
      );
      setGraph(graphData);
    }
  }, [data]);

  if (data.length > 0)
    return (
      <section className={`animeLeft ${s.graph}`}>
        <div className={`${s.total} ${s.graphItem}`}>
          <p>Views: {total}</p>
        </div>
        <div className={s.graphItem}>
          <VictoryPie
            data={graph}
            innerRadius={50}
            padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
            style={{
              data: { fillOpacity: 0.9, stroke: "white", strokeWidth: 2 },
              labels: {
                fontSize: 14,
                fill: "#333",
              },
            }}
          />
        </div>
        <div className={s.graphItem}>
          <VictoryChart>
            <VictoryBar alignment="start" data={graph}></VictoryBar>
          </VictoryChart>
        </div>
      </section>
    );
  else return <Error error={"No photos found."} />;
};

export default UserStatsGraphs;
