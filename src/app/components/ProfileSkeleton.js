import React from "react";

const ProfileSkeleton = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 space-y-6 animate-pulse">
      {/* Profile Image Skeleton */}
      <div className="flex justify-center">
        <div className="w-24 h-24 rounded-full bg-gray-300" />
      </div>

      {/* Name and Username */}
      <div className="text-center space-y-2">
        <div className="h-4 bg-gray-300 rounded w-32 mx-auto" />
        <div className="h-3 bg-gray-300 rounded w-24 mx-auto" />
      </div>

      {/* Followers and Following */}
      <div className="flex justify-center divide-x divide-gray-300 border border-gray-200 rounded-lg overflow-hidden">
        <div className="w-1/2 text-center p-4 space-y-1">
          <div className="h-3 bg-gray-300 rounded w-16 mx-auto" />
          <div className="h-4 bg-gray-300 rounded w-4 mx-auto" />
        </div>
        <div className="w-1/2 text-center p-4 space-y-1">
          <div className="h-3 bg-gray-300 rounded w-16 mx-auto" />
          <div className="h-4 bg-gray-300 rounded w-4 mx-auto" />
        </div>
      </div>

      {/* Personal Information Section */}
      <div className="space-y-2">
        <div className="h-4 bg-gray-300 rounded w-40" />
        <div className="flex justify-between">
          <div className="space-y-1">
            <div className="h-3 bg-gray-300 rounded w-24" />
            <div className="h-3 bg-gray-300 rounded w-48" />
          </div>
          <div className="space-y-1 text-right">
            <div className="h-3 bg-gray-300 rounded w-20" />
            <div className="h-3 bg-gray-300 rounded w-24" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSkeleton;
