import React from "react";
import Chart from "../chart";
import EChart from "../eCharts";
export default ({ config, resize }) => {
  const { data } = config;

  const colors = [
    "#2d8cf0",
    "#FFD60A",
    "#BF5AF2",
    "#FF443A",
    "#FF9F0C",
    "#31D158",
  ];

  let option = {
    color: colors,

    legend: {
      x: "center",
    },
    tooltip: {
      show: true,
      trigger: "item",
      formatter: "{a} : <br />{c}%",
    },
    polar: {
      center: ["50%", "50%"],
      radius: "150%",
    },
    angleAxis: {
      show: false,
      startAngle: 90,
      min: 0,
      max: 100,
    },
    radiusAxis: {
      type: "category",
      show: false,
      data: ["ad", "ads", "adfa"],
    },
    series: data.map((obj) => ({
      type: "bar",
      name: obj.title,
      coordinateSystem: "polar",
      barWidth: 20,
      barCategoryGap: "30%",
      data: [obj.value],
    })),
  };

  return (
    <Chart config={config} resize={resize}>
      {data && <EChart option={option} config={config} resize={resize} />}
    </Chart>
  );
};
