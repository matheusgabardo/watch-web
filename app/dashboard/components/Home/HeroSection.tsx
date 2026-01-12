"use client";

import { AudioIcon, CameraIcon, ExitFullScreenIcon, FullScreenIcon } from "@/components/icons";
import VideoSettingsIcon from "@/components/icons/common/VideoSettings";
import { useState, useRef, useEffect, useCallback } from "react";

const cameras = [
  { id: 1, src: "/assets/dashboard/placeholder/video_bg-2.mp4" },
  { id: 2, src: "/assets/dashboard/placeholder/video_bg-2.mp4" },
  { id: 3, src: "/assets/dashboard/placeholder/video_bg-2.mp4" },
  { id: 4, src: "/assets/dashboard/placeholder/video_bg.mp4" },
];

export default function HeroSection() {
  const [activeCamera, setActiveCamera] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const hideControlsAfterDelay = useCallback(() => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    if (isFullScreen) {
      hideTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
  }, [isFullScreen]);

  const handleMouseMove = useCallback(() => {
    setShowControls(true);
    hideControlsAfterDelay();
  }, [hideControlsAfterDelay]);

  useEffect(() => {
    const handleFullScreenChange = () => {
      const isNowFullScreen = !!document.fullscreenElement;
      setIsFullScreen(isNowFullScreen);
      if (isNowFullScreen) {
        hideControlsAfterDelay();
      } else {
        setShowControls(true);
        if (hideTimeoutRef.current) {
          clearTimeout(hideTimeoutRef.current);
        }
      }
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, [hideControlsAfterDelay]);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      sectionRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  const nextCamera = () => {
    setActiveCamera((prev) => (prev + 1) % cameras.length);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative h-[60vh] sm:h-[70vh] lg:h-[calc(100vh-64px)] overflow-hidden"
    >
      <video
        ref={videoRef}
        key={activeCamera}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={cameras[activeCamera].src} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50" />

      {!isFullScreen && (
        <div
          className="absolute top-0 left-0 right-0 h-20 lg:h-32 z-1"
          style={{
            background: "linear-gradient(0deg, transparent 0%, #1E1E22 100%)"
          }}
        />
      )}

      {!isFullScreen && (
        <div
          className="absolute bottom-0 left-0 right-0 h-20 lg:h-32 z-1"
          style={{
            background: "linear-gradient(180deg, transparent 0%, #1E1E22 100%)"
          }}
        />
      )}

      <div
        className={`relative z-10 flex justify-center h-full w-full py-8 lg:py-16 px-4 lg:px-0 transition-opacity duration-300 ${
          showControls ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container">
          <div className="flex flex-col h-full">
            <div className="d-flex flex-col">
              <h3 className="text-primary-text text-xl sm:text-2xl lg:text-[32px]">Avril Lavigne</h3>
              <ul className="flex items-center gap-1 text-primary-text text-xs sm:text-sm font-normal">
                <li>LIVE</li>
                <li className="before:content-['•'] before:mr-1">Sunset</li>
                <li className="before:content-['•'] before:mr-1 hidden sm:list-item">Singer Camera</li>
              </ul>
            </div>
            <div className="mt-auto flex flex-col sm:flex-row gap-4 sm:gap-0">
              <div>
                <button
                  onClick={nextCamera}
                  className="flex gap-1 h-8 pl-4 pr-5 lg:pl-4.5 lg:pr-6 rounded-2xl bg-[#E96744] items-center justify-center text-sm lg:text-base font-medium cursor-pointer"
                >
                  <CameraIcon />
                  <span className="hidden sm:inline">Choose your camera</span>
                  <span className="sm:hidden">Camera</span>
                </button>
              </div>
              <div className="sm:ml-auto flex items-center gap-4 lg:gap-6">
                <div className="grid grid-cols-2 gap-1 w-10 h-10 lg:w-12 lg:h-12 opacity-60">
                  {cameras.map((camera, index) => (
                    <button
                      key={camera.id}
                      onClick={() => setActiveCamera(index)}
                      className={`rounded-[0.72px] cursor-pointer ${
                        index === activeCamera ? "bg-primary-text" : "bg-[#7A7A7A]"
                      }`}
                    />
                  ))}
                </div>
                <button onClick={toggleFullScreen} className="cursor-pointer hidden sm:block">
                  {isFullScreen ? <ExitFullScreenIcon /> : <FullScreenIcon />}
                </button>
                <button onClick={toggleMute} className={`cursor-pointer ${isMuted ? "opacity-40" : ""}`}>
                  <AudioIcon />
                </button>
                <button onClick={toggleSettings} className="cursor-pointer relative">
                  <VideoSettingsIcon />
                  {showSettings && (
                    <div className="absolute bottom-full right-0 mb-2 bg-black/80 rounded-lg p-4 min-w-48">
                      <p className="text-primary-text text-sm">Configurações de vídeo</p>
                    </div>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
