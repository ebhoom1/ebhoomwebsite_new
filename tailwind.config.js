// /** @type {import('tailwindcss').Config} */
// export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
// export const theme = {
//   extend: {
//     colors: {
//       primary: "#48a52f", // Green
//       secondary: "#236a80", // Blue
//       black: "#000000", // Black
//     },
//     gradientColorStops: {
//       "gradient-start": "#236a80", // Gradient shades
//       "gradient-end": "#48a52f",
//     },

//     animation: {
//       zoomInOut: "zoomInOut 3s ease-in-out infinite",
//       float: "float 6s ease-in-out infinite",
//       rotate: "rotate 4s linear infinite",
//       slowShake: "slowShake 4s ease-in-out infinite",
//       slideInRight: "slideInRight 6s linear infinite",
//       moveZoom: "moveZoom 5s ease-in-out infinite", // Animates each logo
//       scroll: "scroll 20s linear infinite", // Smooth continuous scroll
//       bubble: "bubble 8s infinite",
//       fadeIn: "fadeIn 2s ease-in-out",
//     },
//     keyframes: {
//       zoomInOut: {
//         "0%, 100%": { transform: "scale(1)" },
//         "50%": { transform: "scale(1.2)" },
//       },
//       float: {
//         "0%, 100%": { transform: "translateY(0)" },
//         "50%": { transform: "translateY(-20px)" },
//       },
//       rotate: {
//         "0%": { transform: "rotate(0deg)" },
//         "100%": { transform: "rotate(360deg)" },
//       },
//       slowShake: {
//         "0%, 100%": { transform: "translateX(0)" }, // Start and end in the original position
//         "25%": { transform: "translateX(-5px)" }, // Move slightly to the left
//         "75%": { transform: "translateX(5px)" }, // Move slightly to the right
//       },
//       slideInRight: {
//         "0%": { transform: "translateX(100%)", opacity: 0 },
//         "100%": { transform: "translateX(0)", opacity: 1 },
//       },
//       moveZoom: {
//         "0%": { transform: "translateX(100%) scale(0.5)", opacity: 0 }, // Start off-screen, zoomed out
//         "50%": { transform: "translateX(0) scale(1)", opacity: 1 }, // Center, fully visible
//         "100%": { transform: "translateX(-100%) scale(0.5)", opacity: 0 }, // Exit off-screen, zoomed out
//       },
//       scroll: {
//         "0%": { transform: "translateX(100%)" }, // Start off-screen on the right
//         "100%": { transform: "translateX(-100%)" }, // End off-screen on the left
//       },
//       bubble: {
//         "0%": { transform: "translateY(0)", opacity: 1 },
//         "100%": { transform: "translateY(-200px)", opacity: 0.2 }, // Slightly visible at the end
//       },
//       fadeIn: {
//         "0%": { opacity: 0 },
//         "100%": { opacity: 1 },
//       },
//     },
//   },
// };
// export const plugins = [];


// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const darkMode = "media"; // <--- Add this line
export const theme = {
  extend: {
    colors: {
      primary: "#48a52f", // Green
      secondary: "#236a80", // Blue
      black: "#000000", // Black
    },
    gradientColorStops: {
      "gradient-start": "#236a80", // Gradient shades
      "gradient-end": "#48a52f",
    },

    animation: {
      zoomInOut: "zoomInOut 3s ease-in-out infinite",
      float: "float 6s ease-in-out infinite",
      rotate: "rotate 4s linear infinite",
      slowShake: "slowShake 4s ease-in-out infinite",
      slideInRight: "slideInRight 6s linear infinite",
      moveZoom: "moveZoom 5s ease-in-out infinite", // Animates each logo
      scroll: "scroll 20s linear infinite", // Smooth continuous scroll
      bubble: "bubble 8s infinite",
      fadeIn: "fadeIn 2s ease-in-out",
    },
    keyframes: {
      zoomInOut: {
        "0%, 100%": { transform: "scale(1)" },
        "50%": { transform: "scale(1.2)" },
      },
      float: {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-20px)" },
      },
      rotate: {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" },
      },
      slowShake: {
        "0%, 100%": { transform: "translateX(0)" }, // Start and end in the original position
        "25%": { transform: "translateX(-5px)" }, // Move slightly to the left
        "75%": { transform: "translateX(5px)" }, // Move slightly to the right
      },
      slideInRight: {
        "0%": { transform: "translateX(100%)", opacity: 0 },
        "100%": { transform: "translateX(0)", opacity: 1 },
      },
      moveZoom: {
        "0%": { transform: "translateX(100%) scale(0.5)", opacity: 0 }, // Start off-screen, zoomed out
        "50%": { transform: "translateX(0) scale(1)", opacity: 1 }, // Center, fully visible
        "100%": { transform: "translateX(-100%) scale(0.5)", opacity: 0 }, // Exit off-screen, zoomed out
      },
      scroll: {
        "0%": { transform: "translateX(100%)" }, // Start off-screen on the right
        "100%": { transform: "translateX(-100%)" }, // End off-screen on the left
      },
      bubble: {
        "0%": { transform: "translateY(0)", opacity: 1 },
        "100%": { transform: "translateY(-200px)", opacity: 0.2 }, // Slightly visible at the end
      },
      fadeIn: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
    },
  },
};
export const plugins = [];