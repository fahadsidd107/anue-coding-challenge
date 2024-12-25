"use client"

import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonComponent: React.FC = () => {
  return (
    <div>
      <Skeleton height={20} width={80} count={1} />
      <Skeleton height={10} count={2} />
      <Skeleton height={20} width={80} count={1} />
      <Skeleton height={10} count={2} />
      <Skeleton height={20} width={80} count={1} />
      <Skeleton height={10} count={2} />
      <Skeleton height={20} width={80} count={1} />
      <Skeleton height={10} count={2} />
      <Skeleton height={20} width={80} count={1} />
      <Skeleton height={10} count={2} />
    </div>
  );
};

export default SkeletonComponent;
