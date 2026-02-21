const DoctorStats = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border mt-6">
      <h3 className="text-lg font-semibold mb-4">448 Reviews</h3>

      <div className="space-y-3">
        {[5,4,3,2,1].map((star) => (
          <div key={star} className="flex items-center gap-4">
            <span className="w-8">{star}★</span>
            <div className="flex-1 bg-gray-200 h-2 rounded-full">
              <div className="bg-green-500 h-2 rounded-full w-[80%]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorStats;
