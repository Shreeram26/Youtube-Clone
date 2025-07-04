import React from "react";
import VideoCard from "../components/VideoCard";

const WatchLater = ({ watchLaterList, setWatchLaterList }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Watch Later</h1>

      {watchLaterList.length === 0 ? (
        <p className="text-gray-500">No videos in Watch Later.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {watchLaterList.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              watchLaterList={watchLaterList}
              setWatchLaterList={setWatchLaterList}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default WatchLater;
