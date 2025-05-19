import React from "react";

interface CategoryBadgeProps {
  category: string;
  className?: string;
}

const CategoryBadge: React.FC<CategoryBadgeProps> = ({
  category,
  className = "",
}) => {
  return <div className={className}>{category}</div>;
};

export default CategoryBadge;
