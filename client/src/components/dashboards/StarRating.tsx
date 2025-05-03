export const StarRating = ({
    rating,
    size = "default",
  }: {
    rating: number;
    size?: "default" | "small";
  }) => {
    const starSize = size === "small" ? "text-sm" : "text-base";
    return (
      <div className={`flex ${starSize} text-yellow-400`}>
        {[...Array(5)].map((_, i) => (
          <span key={i}>{i < rating ? "★" : "☆"}</span>
        ))}
      </div>
    );
  };