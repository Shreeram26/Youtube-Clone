import React from "react";
import { videos } from "../data/dummyVideos";
import VideoCard from "../components/VideoCard";

const Home = ({ watchLaterList, setWatchLaterList }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Video Feed</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            watchLaterList={watchLaterList}
            setWatchLaterList={setWatchLaterList}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
