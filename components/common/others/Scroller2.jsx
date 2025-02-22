// src/utils/scrollUtils.js

/**
 * Creates a debounced function that delays invoking the provided function until
 * after wait milliseconds have elapsed since the last time the debounced function was invoked.
 *
 * @param {Function} func - The function to debounce.
 * @param {number} wait - The number of milliseconds to delay.
 * @returns {Function} - The debounced function.
 */
export const debounce = (func, wait) => {
    let timeout;
    return function (...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  };
  
  /**
   * Handles the scroll event for a given header reference. Adds or removes the 'navbar-sticky-init'
   * class from the body based on the scroll position.
   *
   * @param {Object} headerRef - The reference to the header element.
   * @param {number} [wait=100] - Optional delay for debouncing the scroll handler.
   * @returns {Function} - The debounced scroll event handler function.
   */
  export const handleScroll2 = (headerRef, wait = 100) => {
    const scrollHandler = () => {
      if (!headerRef || !headerRef.current) {
        console.warn("handleScroll: Invalid or null headerRef provided.");
        return;
      }
  
      const header = headerRef.current;
      const headerTop = header.offsetHeight / 3;
      const scrolled = window.scrollY;
      const body = document.body;
  
      console.log("Current Scroll Position:", scrolled);
  
      if (scrolled > headerTop) {
        body.classList.add("navbar-top-toggle");
      } else {
        body.classList.remove("navbar-top-toggle");
      }
    };
  
    // Debouncing the scroll event handler to optimize performance
    return debounce(scrollHandler, wait);
  };
  