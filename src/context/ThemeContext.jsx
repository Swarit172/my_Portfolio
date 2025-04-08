// import React, { createContext, useState, useEffect, useContext } from 'react';

// const ThemeContext = createContext();

// export const THEMES = {
//   LIGHT: 'light',
//   DARK: 'dark'
// };

// export const ThemeProvider = ({ children }) => {
//   // Check for saved theme preference or use system preference
//   const getSavedTheme = () => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) {
//       return savedTheme;
//     }
    
//     // Check for system preference
//     if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//       return THEMES.DARK;
//     }
    
//     return THEMES.LIGHT;
//   };

//   const [theme, setTheme] = useState(getSavedTheme);
//   const [isMounted, setIsMounted] = useState(false);

//   // Set theme only after component mount to prevent hydration mismatch
//   useEffect(() => {
//     setIsMounted(true);
//     return () => setIsMounted(false);
//   }, []);

//   // Apply theme to document when it changes
//   useEffect(() => {
//     if (!isMounted) return;
    
//     document.documentElement.setAttribute('data-theme', theme);
//     localStorage.setItem('theme', theme);
    
//     // Apply theme-specific CSS variables
//     if (theme === THEMES.DARK) {
//       document.documentElement.style.setProperty('--bg-primary', '#1a1a2e');
//       document.documentElement.style.setProperty('--bg-secondary', '#16213e');
//       document.documentElement.style.setProperty('--text-primary', '#e6e6e6');
//       document.documentElement.style.setProperty('--text-secondary', '#b3b3b3');
//       document.documentElement.style.setProperty('--accent-color', '#4d7cfe');
//       document.documentElement.style.setProperty('--border-color', '#2d3748');
//       document.documentElement.style.setProperty('--tag-bg', '#2d4263');
//       document.documentElement.style.setProperty('--tag-text', '#e6e6e6');
//     } else {
//       document.documentElement.style.setProperty('--bg-primary', '#ffffff');
//       document.documentElement.style.setProperty('--bg-secondary', '#f5f7fa');
//       document.documentElement.style.setProperty('--text-primary', '#333333');
//       document.documentElement.style.setProperty('--text-secondary', '#666666');
//       document.documentElement.style.setProperty('--accent-color', '#3182ce');
//       document.documentElement.style.setProperty('--border-color', '#e2e8f0');
//       document.documentElement.style.setProperty('--tag-bg', '#ebf4ff');
//       document.documentElement.style.setProperty('--tag-text', '#3182ce');
//     }
    
//   }, [theme, isMounted]);

//   // Toggle between light and dark themes
//   const toggleTheme = () => {
//     setTheme(prevTheme => (prevTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT));
//   };

//   // Listen for system theme changes
//   useEffect(() => {
//     if (!isMounted) return;
    
//     const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
//     const handleChange = (e) => {
//       // Only auto-change if user hasn't manually set a preference
//       if (!localStorage.getItem('theme')) {
//         setTheme(e.matches ? THEMES.DARK : THEMES.LIGHT);
//       }
//     };
    
//     mediaQuery.addEventListener('change', handleChange);
    
//     return () => mediaQuery.removeEventListener('change', handleChange);
//   }, [isMounted]);

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme, isDark: theme === THEMES.DARK }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// // Custom hook for using the theme context
// export const useTheme = () => {
//   const context = useContext(ThemeContext);
//   if (context === undefined) {
//     throw new Error('useTheme must be used within a ThemeProvider');
//   }
//   return context;
// };

// export default ThemeContext;