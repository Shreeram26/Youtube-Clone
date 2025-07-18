import React from "react";

const VideoCard = ({
  video,
  watchLaterList,
  setWatchLaterList,
  likedVideos,
  setLikedVideos,
}) => {
  const isInWatchLater = watchLaterList.some((v) => v.id === video.id);
  const isLiked = likedVideos.includes(video.id);

  const toggleLike = () => {
    if (isLiked) {
      setLikedVideos(likedVideos.filter((id) => id !== video.id));
    } else {
      setLikedVideos([...likedVideos, video.id]);
    }
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
      <p className="text-xs text-gray-500">
        {video.views} • {video.time}
      </p>
      <div className="flex justify-between mt-2">
        <button
          onClick={toggleLike}
          className={isLiked ? "text-red-500 font-bold" : "text-gray-500"}
        >
          {isLiked ? "👍 Liked" : "👍 Like"}
        </button>
        <button
          onClick={toggleWatchLater}
          className={
            isInWatchLater ? "text-blue-600 font-bold" : "text-gray-500"
          }
        >
          {isInWatchLater ? "⏳ Queued" : "➕ Watch Later"}
        </button>
      </div>
    </div>
  );
};

export default VideoCard;
