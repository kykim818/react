import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
} from "recharts";
import { RechartsData } from "../data/GraphdataTransform";
const testData = RechartsData;
const LineChartWithReferenceLines = () => {
  const [isActive, setIsActive] = useState(false);
  const [currentWell, setCurrentWell] = useState("");
  const [currentCt, setCurrentCt] = useState(null);
  const [currentThrd, setCurrentThrd] = useState(null);
  const well = ["A1", "A2", "A3"];
  const Ct = [18.78, NaN, 18.142];
  const Thrd = [250, 200, 160];

  const lineHandler = (val) => {
    setIsActive(well[val]);
    setCurrentWell(well[val]);
    setCurrentCt(Ct[val]);
    setCurrentThrd(Thrd[val]);
  };
  return (
    <LineChart
      width={500}
      height={300}
      data={testData}
      margin={{
        top: 20,
        right: 50,
        left: 20,
        bottom: 20,
      }}
    >
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      <CartesianGrid />
      <XAxis
        type="number"
        name="well"
        dataKey="cycle"
        label={{ value: "cycle", position: "insideBottom", offset: -10 }}
      />
      <YAxis
        type="number"
        label={{
          value: "RFU",
          position: "insideLeft",
          angle: -90,
          offset: 0,
        }}
      />
      {isActive ? (
        <Tooltip
          cursor={false}
          animationDuration={0}
          content={<CustomTooltip current={currentWell} />}
        />
      ) : (
        <></>
      )}
      <Legend verticalAlign="top" />
      <ReferenceLine
        x={currentCt}
        stroke="red"
        label={{ value: `Ct : ${currentCt}`, position: "insideRight" }}
      />
      <ReferenceLine
        y={currentThrd}
        stroke="red"
        label={{
          value: `Thrd: ${currentThrd}`,
          position: "insideTopLeft",
          offset: -20,
        }}
      />
      <Line
        type="natural"
        dataKey={well[0]}
        stroke="pink"
        strokeWidth={isActive === well[0] ? 4 : 1}
        dot={false}
        activeDot={false}
        onMouseOver={() => lineHandler(0)}
        onMouseOut={() => lineHandler()}
        // isAnimationActive={false}
      />
      <Line
        type="natural"
        dataKey={well[1]}
        stroke="blue"
        strokeWidth={isActive === well[1] ? 4 : 1}
        dot={false}
        activeDot={false}
        onMouseOver={() => lineHandler(1)}
        onMouseOut={() => lineHandler()}
        // isAnimationActive={false}
      />
      <Line
        type="natural"
        dataKey={well[2]}
        stroke="green"
        strokeWidth={isActive === well[2] ? 4 : 1}
        dot={false}
        activeDot={false}
        onMouseOver={() => lineHandler(2)}
        onMouseOut={() => lineHandler()}
        // isAnimationActive={false}
      />
      {/* <Line type="monotone" dataKey="y" stroke="#82ca9d" dot={false} /> */}
    </LineChart>
  );
};

const CustomTooltip = ({ active, payload, label, current }) => {
  if (payload) {
    return (
      <div style={{ backgroundColor: "skyblue" }}>
        <p>{current}</p>
      </div>
    );
  }
};
export default LineChartWithReferenceLines;
