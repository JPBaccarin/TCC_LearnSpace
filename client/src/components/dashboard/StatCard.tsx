import React from "react";

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, description, className }) => {
  return (
    <div className={`rounded-lg bg-gray-800 p-4 shadow-md ${className}`}>
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-2 text-3xl">{value}</p>
      <p className="mt-1 text-sm">{description}</p>
    </div>
  );
};

export default StatCard;
