const path = require("path");
const ui = require("@wen/ui/tailwind");

module.exports = {
  presets: [ui],
  // `ui.content` includes a path to the components that are using tailwind in @company/ui
  content: ui.content.concat([
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ]),
};
