import type { Config } from "tailwindcss";
export type tailwindConfigType = Config;

// declaration
const fontSizePxClasses = buildFontSizePxClasses();
const fontWeightClasses = buildFontWeightClasses();

const config: Config = {
	content: ["./src/**/*.{html,pug,js,svelte,ts,json,json5}"],
	theme: {
		extend: {
			// !! eventually need to find an account-specific way to do this
			colors: {
				oxford: {
					DEFAULT: "hsla(218, 100%, 16%, 1.0)",
				},
				midnight: {
					DEFAULT: "hsla(210, 31%, 20%, 1.0)",
				},
				spanishRed: {
					DEFAULT: "hsla(349, 100%, 46%, 1.0)",
					600: "hsla(350, 100%, 40%, 1.0)",
					700: "hsla(350, 100%, 32%, 1.0)",
					800: "hsla(350, 100%, 24%, 1.0",
					900: "hsla(350, 100%, 32%, 1.0)",
					dark: "#D9002A",
				},
				cultured: "#ECECEC",
				darkOrchid: "#A036B4", // call branding -- pri + sec blend
				blueViolet: "#7D3EC9", // call branding -- secondary
				byzantine: "#BC16A5", // call branding -- mellower primary
				fashionFuchsia: "#ea009c", // call branding -- primary
				magenta: "#FF00FF",
				richBlack: "#081526", // securelogix.com -- dark
				russianViolet: "#1F0144", // call branding -- dark primary
				selectiveYellow: "#FFBB00",
				hestia: "#EA2700",
				seaSalt: "#FCFCFC",
				steelPink: "#DD23C4", // call branding -- primary
				steelPinkDarker: "D20FBF",
				xanthous: "#f7b32b",
			},
			// !! eventually need to find an account-specific way to do this
			fontFamily: {
				helveticaNeue: ["Helvetica Neue", "sans-serif"],
				sora: ["Sora", "sans-serif"],
				source: ["'Source Sans 3'", "sans-serif"],
				montserrat: [
					"Montserrat",
					"ui-sans-serif",
					"system-ui",
					"-apple-system",
					"sans-serif",
				],
				centuryGothic: [
					"Century Gothic",
					"Questrial",
					"system-ui",
					"-apple-system",
					"sans-serif",
				],
			},
			fontSize: {
				...fontSizePxClasses,
			},
			fontWeight: {
				...fontWeightClasses,
			},
		},
	},
};

export default config;

// helper functions for customizing tailwind config
function buildFontSizePxClasses(min?: number, max?: number, step?: number) {
	max = max ?? 51;
	min = min ?? 0;
	step = step ?? 1;
	const obj: { [key: string]: string } = {};
	for (let i = min; i < max; i += step) {
		const key = `${i}`;
		const value = `${i}px`;
		obj[key] = value;
	}
	return obj;
}
function buildFontWeightClasses() {
	const obj: { [key: string]: string } = {};
	for (let i = 100; i < 1000; i += 100) {
		const key = `${i}`;
		const value = `${i}`;
		obj[key] = value;
	}
	return obj;
}
