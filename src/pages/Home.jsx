import { videos } from "../data/dummyVideos";
import VideoCard from "../components/VideoCard";

const Home = ({
  watchLaterList,
  setWatchLaterList,
  likedVideos,
  setLikedVideos
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 py-4">
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          video={video}
          watchLaterList={watchLaterList}
          setWatchLaterList={setWatchLaterList}
          likedVideos={likedVideos}
          setLikedVideos={setLikedVideos}
        />
      ))}
    </div>
  );
};

export default Home;
