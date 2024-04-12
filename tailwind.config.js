/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        sm: "600px",
        md: "768px",
        lg: "1000px",
        xl: "1400px",
      },
      backgroundColor: {
        "custom-blue": {
          100: "#195399",
          200: "#2672CA",
        },
        "custom-gray": {
          100: "#D9D9D9",
          200: "#292D32",
          300: "#444444",
        },
      },
      borderRadius: {
        8: "0.5rem",
        16: "1rem",
        20: "1.25rem",
      },
      cursor: {
        inherit: "inherit",
      },
      fontFamily: {
        "clash-extralight": ["ClashGrotesk-Extralight", "sans-serif"],
        "clash-light": ["ClashGrotesk-Light", "sans-serif"],
        "clash-regular": ["ClashGrotesk-Regular", "sans-serif"],
        "clash-medium": ["ClashGrotesk-Medium", "sans-serif"],
        "clash-semibold": ["ClashGrotesk-Semibold", "sans-serif"],
        "clash-bold": ["ClashGrotesk-Bold", "sans-serif"],
        "clash-variable": ["ClashGrotesk-Variable", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      lineHeight: {
        title: "3.5rem",
        body: "2.5rem",
      },
      letterSpace: {
        4: "4%",
      },
      maxWidth: {
        primary: "1300px",
      },
      fontSize: {
        title: "3.5rem",
        subtitle: "2.5rem",
        body: "1.25rem",
        button: "1rem",
        badge: "1.5rem",
      },
    },
  },
  plugins: [],
};
