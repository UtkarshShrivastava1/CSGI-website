"use client";

import { useRef, useState, useEffect } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  SkipBack,
  SkipForward,
  Clock,
  Calendar,
} from "lucide-react";
import Local_csit_video from "../assets/VideoGallery/Local_csit_video.mp4";
import Local_Poster from "../assets/VideoGallery/Local_Poster.jpg";
const getYoutubeThumbnail = (url) => {
  const videoId = url.split("embed/")[1]?.split("?")[0];
  return videoId
    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    : "/api/placeholder/640/360";
};

const videos = [
  {
    type: "local",
    src: Local_csit_video,
    poster: Local_Poster,
    title: "Campus Tour",
    duration: "3:24",
    date: "April 15, 2025",
    description:
      "Explore our beautiful campus facilities and academic environment in this exclusive tour.",
  },
  {
    type: "youtube",
    src: "https://www.youtube.com/embed/_tFRUefZKWo",
    title: "College Events Highlight",
    duration: "5:18",
    thumbnail: getYoutubeThumbnail("https://www.youtube.com/embed/_tFRUefZKWo"),
    date: "March 28, 2025",
    description:
      "Annual college events showcasing student talents, competitions, and celebrations.",
  },
  {
    type: "youtube",
    src: "https://www.youtube.com/embed/aHc2rm7ZVlY",
    title: "Student Success Stories",
    duration: "4:52",
    thumbnail: getYoutubeThumbnail("https://www.youtube.com/embed/aHc2rm7ZVlY"),
    date: "March 10, 2025",
    description:
      "Hear from our graduates about their journey to success and how the college helped them.",
  },
  {
    type: "youtube",
    src: "https://www.youtube.com/embed/tA8ZhsOMMPc",
    title: "Faculty Interviews",
    duration: "6:10",
    thumbnail: getYoutubeThumbnail("https://www.youtube.com/embed/tA8ZhsOMMPc"),
    date: "February 22, 2025",
    description:
      "Our distinguished faculty share insights about their research and teaching philosophies.",
  },
  {
    type: "local",
    src: Local_csit_video,
    poster: Local_Poster,
    title: "Annual Festival",
    duration: "7:45",
    date: "February 8, 2025",
    description:
      "Highlights from our biggest cultural festival of the year with performances and activities.",
  },
  {
    type: "youtube",
    src: "https://www.youtube.com/embed/_tFRUefZKWo",
    title: "Lab Showcase",
    duration: "2:36",
    thumbnail: getYoutubeThumbnail("https://www.youtube.com/embed/_tFRUefZKWo"),
    date: "January 15, 2025",
    description:
      "Tour our state-of-the-art laboratories and research facilities available to students.",
  },
];

export default function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState(videos[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [volume, setVolume] = useState(1);
  const [showControls, setShowControls] = useState(true);
  const [loading, setLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef(null);
  const controlsTimeout = useRef(null);

  const filteredVideos =
    activeCategory === "all"
      ? videos
      : videos.filter((video) => video.type === activeCategory);

  const handleVideoSelect = (video) => {
    setLoading(true);
    setActiveVideo(video);
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      videoRef.current.muted = newVolume === 0;
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setVolume(videoRef.current.muted ? 0 : videoRef.current.volume);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    if (videoRef.current) {
      const seekTime = (e.target.value / 100) * videoRef.current.duration;
      videoRef.current.currentTime = seekTime;
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleDoubleClick = (e) => {
    if (!videoRef.current) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;

    if (x < width / 2) {
      videoRef.current.currentTime = Math.max(
        0,
        videoRef.current.currentTime - 10
      );
    } else {
      videoRef.current.currentTime = Math.min(
        videoRef.current.duration,
        videoRef.current.currentTime + 10
      );
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeout.current) {
      clearTimeout(controlsTimeout.current);
    }
    controlsTimeout.current = setTimeout(() => {
      setShowControls(false);
    }, 3000);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("play", () => setIsPlaying(true));
      videoRef.current.addEventListener("pause", () => setIsPlaying(false));
      videoRef.current.addEventListener("ended", () => setIsPlaying(false));
      videoRef.current.addEventListener("loadeddata", () => setLoading(false));
      videoRef.current.addEventListener("timeupdate", handleTimeUpdate);
      videoRef.current.addEventListener("loadedmetadata", () => {
        setDuration(videoRef.current.duration);
      });
    }
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("play", () => setIsPlaying(true));
        videoRef.current.removeEventListener("pause", () =>
          setIsPlaying(false)
        );
        videoRef.current.removeEventListener("ended", () =>
          setIsPlaying(false)
        );
        videoRef.current.removeEventListener("loadeddata", () =>
          setLoading(false)
        );
        videoRef.current.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, [activeVideo]);

  useEffect(() => {
    return () => {
      if (controlsTimeout.current) {
        clearTimeout(controlsTimeout.current);
      }
    };
  }, []);

  return (
    <section className="relative py-8 sm:py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#7f1d1d] mb-4">
            Video Gallery
          </h2>
          <div className="w-24 h-1 bg-[#7f1d1d] mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === "all"
                ? "bg-[#7f1d1d] text-white"
                : "bg-gray-100 text-[#7f1d1d] hover:bg-gray-200"
            }`}
            onClick={() => setActiveCategory("all")}
          >
            All Videos
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === "local"
                ? "bg-[#7f1d1d] text-white"
                : "bg-gray-100 text-[#7f1d1d] hover:bg-gray-200"
            }`}
            onClick={() => setActiveCategory("local")}
          >
            Campus Videos
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === "youtube"
                ? "bg-[#7f1d1d] text-white"
                : "bg-gray-100 text-[#7f1d1d] hover:bg-gray-200"
            }`}
            onClick={() => setActiveCategory("youtube")}
          >
            YouTube
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative rounded-xl overflow-hidden bg-black aspect-video">
              {activeVideo.type === "local" ? (
                <video
                  ref={videoRef}
                  src={activeVideo.src}
                  poster={activeVideo.poster}
                  className="w-full h-full object-cover"
                  onClick={togglePlayPause}
                  onDoubleClick={handleDoubleClick}
                  onMouseMove={handleMouseMove}
                />
              ) : (
                <iframe
                  src={`${activeVideo.src}?rel=0&controls=1`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}

              {activeVideo.type === "local" && (
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${
                    showControls ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center gap-4 mb-2">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={(currentTime / duration) * 100 || 0}
                        onChange={handleSeek}
                        className="w-full h-1 bg-gray-600 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={togglePlayPause}
                          className="text-white hover:text-red-400 transition-colors"
                        >
                          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                        </button>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={toggleMute}
                            className="text-white hover:text-red-400 transition-colors"
                          >
                            {volume === 0 ? (
                              <VolumeX size={20} />
                            ) : (
                              <Volume2 size={20} />
                            )}
                          </button>
                          <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.1"
                            value={volume}
                            onChange={handleVolumeChange}
                            className="w-20 h-1 bg-gray-600 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
                          />
                        </div>
                      </div>
                      <span className="text-white text-sm bg-black/30 px-2 py-1 rounded">
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {activeVideo.title}
              </h3>
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                <span className="flex items-center gap-1">
                  <Clock size={16} />
                  {activeVideo.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={16} />
                  {activeVideo.date}
                </span>
              </div>
              <p className="text-gray-600">{activeVideo.description}</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">More Videos</h3>
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
              {filteredVideos.map((video, idx) => (
                <div
                  key={idx}
                  className={`flex gap-4 p-2 rounded-lg cursor-pointer transition-all ${
                    activeVideo === video
                      ? "bg-red-50 border border-red-200"
                      : "hover:bg-gray-50"
                  }`}
                  onClick={() => handleVideoSelect(video)}
                >
                  <div className="relative w-32 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                    <img
                      src={
                        video.type === "local" ? video.poster : video.thumbnail
                      }
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <Play size={24} className="text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 text-sm mb-1 truncate">
                      {video.title}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {video.type === "local" ? "Campus Video" : "YouTube"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
