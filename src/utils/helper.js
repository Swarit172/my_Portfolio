/**
 * Utility functions for the portfolio application
 */

/**
 * Delays execution for a specified amount of time
 * @param {number} ms - Time to wait in milliseconds
 * @returns {Promise} - Resolves after the specified time
 */
export const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Formats a date string to a more readable format
 * @param {string} dateString - Date string in any valid format
 * @param {Object} options - Intl.DateTimeFormat options
 * @returns {string} - Formatted date string
 */
export const formatDate = (dateString, options = {}) => {
  const date = new Date(dateString);
  const defaultOptions = { 
    year: 'numeric', 
    month: 'long',
    timeZone: 'UTC'
  };
  
  return new Intl.DateTimeFormat('en-US', { ...defaultOptions, ...options }).format(date);
};

/**
 * Validates an email address
 * @param {string} email - Email address to validate
 * @returns {boolean} - True if the email is valid
 */
export const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

/**
 * Truncates text to a specified length and adds an ellipsis
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length before truncation
 * @returns {string} - Truncated text with ellipsis if needed
 */
export const truncateText = (text, maxLength = 100) => {
  if (!text || text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
};

/**
 * Slugifies a string for use in URLs
 * @param {string} text - Text to slugify
 * @returns {string} - URL-friendly slug
 */
export const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')        // Replace spaces with -
    .replace(/&/g, '-and-')      // Replace & with 'and'
    .replace(/[^\w\-]+/g, '')    // Remove all non-word characters
    .replace(/\-\-+/g, '-');     // Replace multiple - with single -
};

/**
 * Gets a random item from an array
 * @param {Array} array - Array to get random item from
 * @returns {*} - Random item from the array
 */
export const getRandomItem = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

/**
 * Smoothly scrolls to an element by ID
 * @param {string} id - Element ID to scroll to
 * @param {number} offset - Offset in pixels from the top
 */
export const scrollToElement = (id, offset = 0) => {
  const element = document.getElementById(id);
  if (!element) return;
  
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;
  
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
};

/**
 * Debounces a function to limit how often it can be called
 * @param {Function} func - Function to debounce
 * @param {number} wait - Time to wait in milliseconds
 * @returns {Function} - Debounced function
 */
export const debounce = (func, wait = 300) => {
  let timeout;
  
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Creates a tween animation
 * @param {number} start - Start value
 * @param {number} end - End value
 * @param {number} duration - Duration in milliseconds
 * @param {Function} callback - Function to call with current value
 * @param {Function} easing - Easing function (default: linear)
 */
export const animate = (start, end, duration, callback, easing = t => t) => {
  const startTime = performance.now();
  
  const step = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const value = start + (end - start) * easing(progress);
    
    callback(value);
    
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };
  
  requestAnimationFrame(step);
};

/**
 * Detects if the device is a mobile device
 * @returns {boolean} - True if the device is mobile
 */
export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
    (window.innerWidth <= 768);
};