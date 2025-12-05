
module.exports = {
    compress: {
        ecma: 2020,
        warnings: false,
        comparisons: false,
        inline: 2,
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info'],
    },
    mangle: {
        safari10: true,
    },
    format: {
        ecma: 2020,
        comments: false,
        ascii_only: true,
    },
};