import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';
import serve from 'rollup-plugin-serve'


const production = !process.env.ROLLUP_WATCH;


export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'app/build/bundle.js'
	},
	plugins: [
		svelte({
			compilerOptions: {
				dev: !production
			}
		}),
		css({ output: 'bundle.css' }),

		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(),

		process.env.UNYW_IP && replace({
			preventAssignment: true,
			'window.__UNYW_PRIVATE_IP' : JSON.stringify(process.env.UNYW_IP)
		}),

		!production && serve({
			host: '0.0.0.0',
			port: '10001',
			contentBase: ['app', 'testenv']

		}),
		!production && livereload('app'),

		// Minify if production
		production && terser()
	],
	watch: {
		clearScreen: false
	}
};
