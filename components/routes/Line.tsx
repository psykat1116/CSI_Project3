import { mockLineData } from "@/constant/MockData";
import { ResponsiveLine } from "@nivo/line";
import React from "react";

interface LineProps {
  isDashboard?: boolean;
}

const Line = ({ isDashboard }: LineProps) => {
  return (
    <div className="h-full">
      <ResponsiveLine
        data={mockLineData}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: "#848482",
              },
            },
            legend: {
              text: {
                fill: "#848482",
              },
            },
            ticks: {
              line: {
                stroke: "#848482",
                strokeWidth: 1,
              },
              text: {
                fill: "#848482",
              },
            },
          },
          legends: {
            text: {
              fill: "#848482",
            },
          },
          tooltip: {
            container: {
              color: "#000000",
            },
          },
        }}
        colors={isDashboard ? { datum: "color" } : { scheme: "nivo" }} // added
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        curve="catmullRom"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? undefined : "transportation", // added
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickValues: 5, // added
          tickSize: 3,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? undefined : "count", // added
          legendOffset: -40,
          legendPosition: "middle",
        }}
        enableGridX={false}
        enableGridY={false}
        pointSize={8}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default Line;
