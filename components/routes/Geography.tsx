import { mockGeographyData } from "@/constant/MockData";
import { geoFeatures } from "@/constant/MockGeo";
import { ResponsiveChoropleth } from "@nivo/geo";
import React from "react";

interface GeographyProps {
  isDashboard?: boolean;
}

const Geography = ({ isDashboard }: GeographyProps) => {
  return (
    <div className="h-full">
      <ResponsiveChoropleth
        data={mockGeographyData}
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
        }}
        features={geoFeatures.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        domain={[0, 1000000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionScale={isDashboard ? 60 : 150}
        projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
        projectionRotation={[0, 0, 0]}
        borderWidth={1.5}
        borderColor="#ffffff"
        legends={
          !isDashboard
            ? [
                {
                  anchor: "bottom-left",
                  direction: "column",
                  justify: true,
                  translateX: 20,
                  translateY: -100,
                  itemsSpacing: 0,
                  itemWidth: 94,
                  itemHeight: 18,
                  itemDirection: "left-to-right",
                  itemTextColor: "#848482",
                  itemOpacity: 0.85,
                  symbolSize: 18,
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemTextColor: "#ffffff",
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]
            : undefined
        }
      />
    </div>
  );
};

export default Geography;
