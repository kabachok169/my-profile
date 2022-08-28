import config from './rollup.common.config'
import replace from '@rollup/plugin-replace'

export default {
    ...config,
    plugins: [
        ...config.plugins,
        replace({
            preventAssignment: true,
            values: { 'process.env.NODE_ENV': JSON.stringify('production') }
        }),
    ]
}