import config from './rollup.common.config'
import serve from 'rollup-plugin-serve'
import replace from '@rollup/plugin-replace'
import livereload from 'rollup-plugin-livereload'

export default {
    ...config,
    watch: {
        chokidar: {
            usePolling: true
        }
    },
    plugins: [
        ...config.plugins,
        replace({
            preventAssignment: true,
            values: { 'process.env.NODE_ENV': JSON.stringify('development') }
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
