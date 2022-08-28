import typescript from '@rollup/plugin-typescript'
import image from '@rollup/plugin-image'
import postcss from 'rollup-plugin-postcss'
import resolve from '@rollup/plugin-node-resolve'
import commonJs from '@rollup/plugin-commonjs'
import serve from 'rollup-plugin-serve'
import replace from '@rollup/plugin-replace'
import livereload from 'rollup-plugin-livereload'

export default {
    watch: {
      chokidar: {
        usePolling: true
      }
    },
    input: 'src/index.tsx',
    output: {
        dir: 'dist',
        format: 'iife',
        sourcemap: true,
        globals: { react: 'React' }
    },
    plugins: [
        resolve({ browser: true }),
        commonJs(),
        typescript({ tsconfig: './tsconfig.json', noEmitOnError: false }),
        image(),
        replace({
            preventAssignment: true,
            values: { 'process.env.NODE_ENV': JSON.stringify('development') }
        }),
        postcss({
            extract: false,
            modules: true,
            use: ['sass'],
            extensions: ['.scss', '.css']
        }),
        serve({
            verbose: true,
            contentBase: ['', 'dist'],
            host: 'localhost',
            port: 3000
        }),
        livereload({ watch: 'dist', delay: 200 })
    ]
}
