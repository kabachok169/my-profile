import typescript from '@rollup/plugin-typescript'
import image from '@rollup/plugin-image'
import postcss from 'rollup-plugin-postcss'
import resolve from '@rollup/plugin-node-resolve'
import commonJs from '@rollup/plugin-commonjs'

export default {
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
        postcss({
            extract: false,
            modules: true,
            use: ['sass'],
            extensions: ['.scss', '.css']
        }),
    ]
}
