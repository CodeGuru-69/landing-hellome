import React from "react";

interface IMediaCard {
  url: string;
  alt?: string;
}

const MediaCard: React.FC<IMediaCard> = ({ url, alt = "media" }) => {
  return (
    <div className="h-auto w-full p-4 rounded-2xl bg-custom-gray-100 bg-opacity-10">
      <img src={url} alt={alt} className="rounded-2xl w-full" />
    </div>
  );
};

export default MediaCard;
