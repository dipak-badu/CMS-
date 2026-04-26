export default function ProductSkeleton() {
  return (
    <div className="w-full border border-gray-100 rounded-b-sm shadow flex flex-col animate-pulse">
      {/* Image */}
      <div className="w-full h-48 bg-gray-400 rounded"></div>

      {/* Content */}
      <div className="flex flex-col gap-2 px-2 py-2">
        {/* Product Name */}
        <div className="h-4 bg-gray-400 rounded w-3/4"></div>
        <div className="h-4 bg-gray-400 rounded w-1/2"></div>

        {/* Price */}
        <div className="flex flex-col lg:flex-row gap-2 items-start">
          <div className="h-5 bg-gray-400 rounded w-1/3"></div>
          <div className="h-4 bg-gray-400 rounded w-1/4"></div>
        </div>

        {/* View Details */}
        <div className="h-3 bg-gray-400 rounded w-1/3 mt-1"></div>
      </div>

      {/* Buy Button */}
      <div className="w-full h-10 bg-gray-400 rounded mt-2"></div>
    </div>
  );
}
