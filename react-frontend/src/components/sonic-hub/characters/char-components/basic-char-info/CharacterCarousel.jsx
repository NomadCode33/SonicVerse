import React, { useState, useMemo, useEffect } from "react";
import "../../../../../css/characters.css";

const CharacterCarousel = ({ character }) => {
  if (!character?.images) return null;

  const modes = useMemo(() => {
    const available = [];
    if (character.images.modern?.length) available.push("modern");
    if (character.images.classic?.length) available.push("classic");
    return available;
  }, [character]);

  const [currentMode, setCurrentMode] = useState(null);
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  // Reset when character changes
  useEffect(() => {
    if (modes.length > 0) {
      if (modes.includes("modern")) {
        setCurrentMode("modern");
      } else {
        setCurrentMode(modes[0]); // fallback to first available mode
      }
      setIndex(0);
    }
  }, [modes]);

  {/*
    Use if code above doesn't work;
    useEffect(() => {
      if (modes.length > 0) {
        setCurrentMode((prev) =>
          modes.includes(prev) ? prev : modes[0]
        );
        setIndex(0);
      }
    }, [modes]);
  */}



  if (!currentMode || !character.images[currentMode]) return null;

  const images = character.images[currentMode];

  if (!images || images.length === 0) return null;

  const safeIndex = Math.min(index, images.length - 1);
  const currentImage = images[safeIndex];


  const canGoLeft = index > 0;
  const canGoRight = index < images.length - 1;

  const switchMode = (mode) => {
    if (mode === currentMode) return;

    setFade(true);
    setTimeout(() => {
      setCurrentMode(mode);
      setIndex(0);
      setFade(false);
    }, 200);
  };

  const next = () => {
    if (!canGoRight) return;

    setFade(true);
    setTimeout(() => {
      setIndex((prev) => prev + 1);
      setFade(false);
    }, 200);
  };

  const prev = () => {
    if (!canGoLeft) return;

    setFade(true);
    setTimeout(() => {
      setIndex((prev) => prev - 1);
      setFade(false);
    }, 200);
  };

  return (
    <div className="carousel-wrapper">

      {/* Tabs ONLY if both modern & classic exist */}
      {modes.length > 1 && (
        <div className="image-tabs">
          {modes.map((mode) => (
            <div
              key={mode}
              className={`tab ${mode} ${
                currentMode === mode ? "active" : ""
              }`}
              onClick={() => switchMode(mode)}
            >
              {mode.charAt(0).toUpperCase() + mode.slice(1)}
            </div>
          ))}
        </div>
      )}

      {/* Image */}
      <img
        className={`carousel-img ${fade ? "fade-out" : ""}`}
        src={currentImage.img}
        alt={currentImage.caption}
      />

      {/* Caption */}
      {currentImage.caption && (
        <div className="image-caption">
          {currentImage.caption}
        </div>
      )}

      {/* Arrows */}
      {canGoLeft && (
        <div className="arrow left" onClick={prev}>
          ◀
        </div>
      )}

      {canGoRight && (
        <div className="arrow right" onClick={next}>
          ▶
        </div>
      )}
    </div>
  );
};

export default CharacterCarousel;
