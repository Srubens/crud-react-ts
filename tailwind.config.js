module.exports = {
  purge: {
    content:[
      "./src/pages/**/*.{html,js,jsx,ts,tsx}",
      "./src/components/**/*.{html,js,jsx,ts,tsx}",
    ],
    safelist:[
      /^bg-/,
      /^to-/,
      /^from-/
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
