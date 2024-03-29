import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import rootImport from 'rollup-plugin-root-import';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import svelte from 'rollup-plugin-svelte';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import { sass } from 'svelte-preprocess-sass';
import config from 'sapper/config/rollup.js';
import marked from 'marked';
import pkg from './package.json';

const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const onwarn = (warning, onwarn) => (warning.code === 'CIRCULAR_DEPENDENCY' && warning.message.includes('/@sapper/')) || onwarn(warning);
const markdown = () => ({
	transform (md, id) {
		if (!/\.md$/.test(id)) return null;
		const data = marked(md);
		return {
			code: `export default ${JSON.stringify(data.toString())};`
		};
	}
});

console.log(`${__dirname}/src/`);
export default {
	client: {
		input: config.client.input(),
		output: config.client.output(),
    plugins: [
      json(),
      rootImport({
        root: `${__dirname}/src/`,
        useEntry: 'prepend',
        extensions: '.js'
      }),
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
			svelte({
				dev,
				hydratable: true,
        emitCss: true,
        preprocess: {
          style: sass()
        }
			}),
			resolve(),
			commonjs(),

			legacy && babel({
				extensions: ['.js', '.mjs', '.html', '.svelte'],
				babelHelpers: 'runtime',
				exclude: ['node_modules/@babel/**'],
				presets: [
					['@babel/preset-env', {
						targets: '> 0.25%, not dead'
					}]
				],
				plugins: [
					'@babel/plugin-syntax-dynamic-import',
					'@babel/plugin-syntax-import-meta',
					['@babel/plugin-transform-runtime', {
						useESModules: true
					}]
				]
			}),

			!dev && terser({
				module: true
			})
		],

		onwarn,
	},

	server: {
		input: config.server.input(),
		output: config.server.output(),
		plugins: [
      json(),
      rootImport({
        root: `${__dirname}/src`,
        useEntry: 'prepend',
        extensions: '.js'
      }),
			replace({
				'process.browser': false,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
			svelte({
				generate: 'ssr',
				dev,
        preprocess: {
          style: sass()
        }
			}),
			resolve(),
			commonjs(),
			markdown()
		],
		external: Object.keys(pkg.dependencies).concat(
			require('module').builtinModules || Object.keys(process.binding('natives'))
		),

		onwarn,
	},

	serviceworker: {
		input: config.serviceworker.input(),
		output: config.serviceworker.output(),
		plugins: [
			resolve(),
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode)
			}),
			commonjs(),
      json(),
      rootImport({
        root: `${__dirname}/src`,
        useEntry: 'prepend',
        extensions: '.js'
      }),
			!dev && terser()
		],

		onwarn,
	}
};
