import * as V from "victory";
import { Graphdata } from "../data/Graphdata";
const data = [
  [
    { x: 1, y: 2 },
    { x: 2, y: 10 },
  ],
  [
    { x: 1, y: 4 },
    { x: 2, y: 5 },
  ],
];
const VictoryLineChart = () => {
  return (
    <V.VictoryChart
      height={400}
      width={500}
      domain={{ x: [0, 50], y: [-1000, 3000] }}
    >
      <V.VictoryLine
        style={{ data: { stroke: "red", strokeWidth: 1 } }}
        data={Graphdata[0].data}
        events={[
          {
            target: "parent",
            eventHandlers: {
              onMouseOver: () => {
                return [
                  {
                    target: "data",
                    eventKey: "all",
                    mutation: () => {
                      return { style: { stroke: "red", strokeWidth: 5 } };
                    },
                  },
                ];
              },
              onMouseOut: () => {
                return [
                  {
                    target: "data",
                    eventKey: "all",
                    mutation: () => {
                      return { style: { stroke: "red", strokeWidth: 1 } };
                    },
                  },
                ];
              },
            },
          },
        ]}
      />
      <V.VictoryLine
        style={{ data: { stroke: "green" } }}
        data={Graphdata[1].data}
        events={[
          {
            target: "parent",
            eventHandlers: {
              onMouseOver: () => {
                return [
                  {
                    target: "data",
                    eventKey: "all",
                    mutation: () => {
                      return { style: { stroke: "green", strokeWidth: 5 } };
                    },
                  },
                ];
              },
              onMouseOut: () => {
                return [
                  {
                    target: "data",
                    eventKey: "all",
                    mutation: () => {
                      return { style: { stroke: "green", strokeWidth: 1 } };
                    },
                  },
                ];
              },
            },
          },
        ]}
      />
      <V.VictoryAxis dependentAxis />
      <V.VictoryAxis crossAxis />
    </V.VictoryChart>
  );
};

export default VictoryLineChart;
