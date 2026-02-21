interface ReviewCardProps {
  name: string;
  review: string;
}

const ReviewCard = ({ name, review }: ReviewCardProps) => {
  return (
    <div className="border p-4 rounded-lg bg-gray-50">
      <h4 className="font-medium text-gray-800">{name}</h4>
      <p className="text-gray-600 text-sm mt-2">{review}</p>
    </div>
  );
};

export default ReviewCard;
