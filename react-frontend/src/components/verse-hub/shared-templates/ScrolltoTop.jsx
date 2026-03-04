import { useState, useEffect } from 'react';
import '../../../css/verse-hub/layout.css';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  // ← show button when user scrolls down 300px
  useEffect(() => {
    // ← scroll thresholds per page and screen size (in pixels)
    // default = desktop, 480 = phone, 768 = tablet
    const scrollThresholds = {
      '/verse-hub/characters': { default: 1200, 480: 1140, 768: 978 },
      //'/verse-hub/transformations': { default: 300, 480: 150, 768: 200 },
      //'/verse-hub/games': { default: 300, 480: 150, 768: 200 },
      '/verse-hub': { default: 200, 480: 647, 768: 657 } // ← home must always be last
    };

    const handleScroll = () => {
      const width = window.innerWidth; // ← current screen width
      const path = window.location.pathname; // ← current page path

      // ← find the first key that matches the current path
      const matchedKey = Object.keys(scrollThresholds).find(key => path.includes(key));
      //console.log('path:', path, 'matchedKey:', matchedKey); // ← add this to see which key is matched for the current path

      // ← use matched page thresholds or fall back to default
      const pageThresholds = matchedKey ? scrollThresholds[matchedKey] : { default: 300 };

      // ← start with desktop threshold then override for smaller screens
      let threshold = pageThresholds.default;
      if (width <= 480) {
        threshold = pageThresholds[480] ?? pageThresholds.default; // ← ?? falls back to default if value missing
      } else if (width <= 768) {
        threshold = pageThresholds[768] ?? pageThresholds.default;
      }

      //console.log('threshold:', threshold, 'scrollY:', window.scrollY); // ← add this to see thresshold and scroll position in real time
      setVisible(window.scrollY > threshold); // ← show button when scrolled past threshold
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // ← cleanup on unmount
  }, []);

  const scrollToTop = () => {
    const width = window.innerWidth;
    const path = window.location.pathname;

    const pageTopValues = {
        '/verse-hub/characters': { default: 1200, 480: 1140, 768: 978 },
        //'/verse-hub/transformations': { default: 0, 480: 0, 768: 0 },
        //'/verse-hub/games': { default: 0, 480: 0, 768: 0 },
        '/verse-hub': { default: 0, 480: 647, 768: 657 } // ← home must always be last
    };

    const matchedKey = Object.keys(pageTopValues).find(key => path.includes(key));
    const pageValues = matchedKey ? pageTopValues[matchedKey] : { default: 0 };

    let topValue = pageValues.default;

    if (width <= 480) {
        topValue = pageValues[480] ?? pageValues.default; // ← ?? falls back to default if value missing
    } else if (width <= 768) {
        topValue = pageValues[768] ?? pageValues.default;
    }

    window.scrollTo({ top: topValue, behavior: 'smooth' }); // ← smooth scroll to position
  };

  return (
    <button
      className={`scroll-to-top ${visible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      {/* ← pulsing rings behind the image */}
      <span className="scroll-ring ring-1" />
      <span className="scroll-ring ring-2" />
      <span className="scroll-ring ring-3" />
      <img src="/img/icons/srush-ring-animation.webp" alt="Scroll to top" className="scroll-top-img" />
    </button>
  );
};

export default ScrollToTop;

/*
handleScroll
Old Way #1: Basic
const handleScroll = () => {
      setVisible(window.scrollY > 180);
    };
*/

/*
ScrolltoTop
Old Way #3: Same as #2, but with objects
const scrollToTop = () => {
    const width = window.innerWidth;
    const path = window.location.pathname;

    let topValue = 0; // default

    if (path.includes('/characters')) {
        topValue = 0;
    } else if (path.includes('/verse-hub')) {
        topValue = 0;
    }

    // override based on screen size
    if (width <= 480) {
        topValue = 0;
    } else if (width <= 768) {
        topValue = 0;
    }

    window.scrollTo({ top: topValue, behavior: 'smooth' });
  };
*/

/*
ScrolltoTop
Old Way #2: Conditonals with multiple paths and screen sizes for topValue
const scrollToTop = () => {
    const width = window.innerWidth;
    const path = window.location.pathname;

    let topValue = 0; // default

    if (path.includes('/characters')) {
        topValue = 0;
    } else if (path.includes('/verse-hub')) {
        topValue = 0;
    }

    // override based on screen size
    if (width <= 480) {
        topValue = 0;
    } else if (width <= 768) {
        topValue = 0;
    }

    window.scrollTo({ top: topValue, behavior: 'smooth' });
  };
*/

/*
ScrolltoTop
Old Way #1: Basic
const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
*/