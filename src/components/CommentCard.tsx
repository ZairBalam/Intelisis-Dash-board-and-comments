
import React from 'react';
import { Star, StarHalf, StarOff } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface CommentCardProps {
  name: string;
  avatar?: string;
  comment: string;
  rating: number;
  date: string;
  sentiment: 'positive' | 'negative' | 'neutral';
}

const CommentCard = ({ name, avatar, comment, rating, date, sentiment }: CommentCardProps) => {
  // Generate stars based on rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="w-4 h-4 fill-intelisis-blue text-intelisis-blue" />);
    }
    
    // Add half star if needed
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="w-4 h-4 fill-intelisis-blue text-intelisis-blue" />);
    }
    
    // Add empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<StarOff key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }
    
    return stars;
  };

  return (
    <div className={`comment-card ${sentiment} bg-white rounded-lg shadow-md p-4 mb-4 border border-gray-100`}>
      <div className="flex items-start">
        <Avatar className="h-10 w-10 mr-4">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback className="bg-intelisis-blue text-white">
            {name.split(' ').map(n => n[0]).join('').toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="font-medium text-gray-900">{name}</h3>
            <span className="text-xs text-gray-500">{date}</span>
          </div>
          <div className="flex items-center mt-1">
            {renderStars()}
            <span className="ml-1 text-sm text-gray-600">{rating.toFixed(1)}</span>
          </div>
          <p className="mt-2 text-sm text-gray-600">{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
