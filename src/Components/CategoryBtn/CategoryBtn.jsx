import React from 'react';
import './CategoryBtn.css';

function CategoryBtn({ category, onSelect, isActive }) {
  const formattedLabel = category === 'all'
    ? 'All products'
    : category.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <button
      type="button"
      className={`category-pill${isActive ? ' active' : ''}`}
      onClick={() => onSelect(category)}
    >
      <span>{formattedLabel}</span>
    </button>
  );
}

export default CategoryBtn;
