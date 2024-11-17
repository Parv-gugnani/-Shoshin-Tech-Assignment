import React from "react";

interface CardProps {
  title: string;
  value: string | number;
  subtext?: string;
  color?: string;
}

const Card: React.FC<CardProps> = ({ title, value, subtext, color }) => {
  return (
    <div
      className={`p-4 rounded-lg ${color || "bg-gray-100"} shadow-sm`}
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
      {subtext && <p className="text-sm text-gray-500">{subtext}</p>}
    </div>
  );
};

export default Card;