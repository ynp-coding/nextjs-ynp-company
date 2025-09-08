"use client";

import { useState, useEffect } from "react";
import Tree, { RawNodeDatum, CustomNodeElementProps } from "react-d3-tree";

const data: RawNodeDatum = {
  name: "ผู้บริหารสูงสุด",
  children: [
    {
      name: "ฝ่ายเทคโนโลยีและนวัตกรรม",
      children: [
        { name: "ฝ่ายวิศวกรรมซอฟต์แวร์" },
        { name: "ฝ่ายข้อมูลและการวิเคราะห์" },
        { name: "ฝ่ายความมั่นคงปลอดภัยไซเบอร์" },
      ],
    },
    { name: "ฝ่ายการตลาดและพันธมิตรธุรกิจ" },
    { name: "ฝ่ายทรัพยากรบุคคล" },
  ],
};

const renderCustomNode = ({ nodeDatum }: CustomNodeElementProps) => (
  <g>
    <foreignObject width={200} height={100} x={-100} y={-30}>
      <div className="bg-white shadow-md border border-gray-300 rounded-xl px-4 py-4 text-center">
        <p className="text-sm">{nodeDatum.name}</p>
      </div>
    </foreignObject>
  </g>
);

export default function OrganizationTree() {
  const [isClient, setIsClient] = useState(false);
  const [translate] = useState({ x: 800, y: 30 });

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="w-full h-[700px] flex items-center justify-center">
      <Tree
        data={data}
        translate={translate}
        orientation="vertical"
        pathFunc="step"
        nodeSize={{ x: 220, y: 140 }}
        renderCustomNodeElement={renderCustomNode}
        draggable={false}
        zoomable={false}
        enableLegacyTransitions={true}
      />
    </div>
  );
}
