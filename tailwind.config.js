/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./app.vue",
		"./error.vue",
	],
	theme: {
		extend: {
			keyframes: {
				asteroid: {
					"0%": {
						transform: "translate(0, 0)",
						opacity: "0",
					},
					"10%": {
						opacity: "1",
					},
					"25%": {
						transform: "translate(100%, 25%)",
						opacity: "1",
					},
					"50%": {
						transform: "translate(50%, 80%)",
						opacity: "1",
					},
					"75%": {
						transform: "translate(0, 25%)",
						opacity: "1",
					},
					"90%": {
						opacity: "1",
					},
					"100%": {
						transform: "translate(0, 0)",
						opacity: "0",
					},
				},
				asteroidRotate: {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
				orbit: {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
				float: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-4px)" },
				},
			},
			animation: {
				asteroid: "asteroid var(--duration, 8s) linear infinite",
				asteroidRotate: "asteroidRotate 4s linear infinite",
				orbit: "orbit 20s linear infinite",
				float: "float 2s ease-in-out infinite",
			},
		},
	},
	plugins: [],
};
