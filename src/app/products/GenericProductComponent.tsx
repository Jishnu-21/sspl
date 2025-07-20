'use client'
import React from 'react';

interface GenericProductProps {
  title: string;
  description: string;
  features: string[];
}

const GenericProductComponent: React.FC<GenericProductProps> = ({ title, description, features }) => {
  return (
    <div>
      <p className="text-gray-800 mb-4">
        <span className="font-bold">{title}</span> {description}
      </p>
      
      {/* Product features */}
      {features.map((feature, index) => (
        <p key={index} className="text-gray-800 mb-4">
          {feature}
        </p>
      ))}
    </div>
  );
};

export default GenericProductComponent;
