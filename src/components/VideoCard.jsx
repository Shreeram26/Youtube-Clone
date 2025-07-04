import React, { useState } from "react";

const VideoCard = ({ video, watchLaterList, setWatchLaterList }) => {
  const [liked, setLiked] = useState(false);
  const isInWatchLater = watchLaterList.some((v) => v.id === video.id);

  const toggleLike = () => {
    setLiked((prev) => !prev);
  };

  const toggleWatchLater = () => {
    if (isInWatchLater) {
      setWatchLaterList(watchLaterList.filter((v) => v.id !== video.id));
    } else {
      setWatchLaterList([...watchLaterList, video]);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-3 w-full max-w-sm text-black">
      <img
        src={video.thumbnail}
        alt="thumbnail"
        className="w-full h-[170px] object-contain bg-white rounded-md mb-2"
      />
      <h3 className="text-lg font-semibold">{video.title}</h3>
      <p className="text-sm text-gray-600">{video.channel}</p>
      <p className="text-xs text-gray-500">{video.views} • {video.time}</p>
      <div className="flex justify-between mt-2">
        <button
          onClick={toggleLike}
          className={liked ? "text-red-500 font-bold" : "text-gray-500"}
        >
          {liked ? "👍 Liked" : "👍 Like"}
        </button>
        <button
          onClick={toggleWatchLater}
          className={isInWatchLater ? "text-blue-600 font-bold" : "text-gray-500"}
        >
          {isInWatchLater ? "⏳ Queued" : "➕ Watch Later"}
        </button>
      </div>
    </div>
  );
};

export default VideoCard;
