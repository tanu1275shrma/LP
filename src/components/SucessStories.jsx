"use client";

import React, { useRef, useState } from "react";
import JoinButton from "./JoinButton";

const SuccessStories = () => {
  const videoRefs = useRef([]);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  const stories = [
    { video: "/images/Yogesh.mp4" },
    { video: "/images/Nilma.mp4" },
    { video: "/images/Manoj.mp4" },
    {
      video: "/images/Rajendra.mp4",
    },
  ];

  const handlePlay = async (index) => {
    try {
      setHasUserInteracted(true);

      // Pause any video already playing
      if (currentlyPlaying !== null && videoRefs.current[currentlyPlaying]) {
        const prevVideo = videoRefs.current[currentlyPlaying];
        if (!prevVideo.paused) {
          await prevVideo.pause();
          prevVideo.currentTime = 0;
        }
      }

      const video = videoRefs.current[index];
      if (video) {
        setCurrentlyPlaying(index);
        video.muted = false;
        video.volume = 1;
        await video.play();
      }
    } catch (error) {
      console.warn("Playback safely handled:", error.message);
    }
  };

  return (
    <section className="bg-[#f4eded] py-12 text-center relative">
      <h2 className="text-4xl md:text-5xl font-bold mb-14 text-gray-950">
        Real Results, Real Stories
      </h2>

      {/* Video List */}
      <div className="max-w-4xl mx-auto space-y-8 px-4">
        {stories.map((story, index) => (
          <div
            key={index}
            className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-lg bg-black group"
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={story.video}
              poster={story.thumbnail}
              preload="metadata"
              playsInline
              controls
              muted={!hasUserInteracted} // sound unlocks only after first click
              className="absolute inset-0 w-full h-full object-cover rounded-3xl cursor-pointer"
              onClick={() => handlePlay(index)}
              onPlay={() => setCurrentlyPlaying(index)}
            />
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-12">
        <JoinButton />
      </div>
    </section>
  );
};

export default SuccessStories;
