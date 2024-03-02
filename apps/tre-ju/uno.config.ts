import {
	defineConfig,
	presetIcons,
	presetUno,
	transformerCompileClass,
	transformerVariantGroup
} from "unocss";

export default defineConfig({
	presets:      [
		presetUno(),
		presetIcons({
			extraProperties: {
				"display":        "inline-block",
				"vertical-align": "middle",
			},
		}),
	],
	transformers: [
		transformerVariantGroup(),
		transformerCompileClass(),
	],
});
