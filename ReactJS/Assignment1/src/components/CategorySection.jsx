import React from 'react';
import { categoryInfo } from '../utils/categoryInfo';
import CategoryComponent from './CategoryComponent';
import ShadowBtn from './ShadowBtn';

export default function CategorySection() {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <ShadowBtn title="Shop by Categories" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categoryInfo?.map((info, idx) => (
          <CategoryComponent key={idx} data={info} />
        ))}
      </div>
    </div>
  );
}
