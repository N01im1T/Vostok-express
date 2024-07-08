const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const { type } = require('os');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = (ext) => 
    isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

const optimization = () => {
    const confObj = {
        minimizer: [
            "...",
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.squooshMinify,
                    options: {
                        //Options
                    },
                },
            }),
        ],
        splitChunks: {
            chunks: 'all',
            minSize: 20000,
            minRemainingSize: 0,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            enforceSizeThreshold: 50000,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: true,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
    };

    if (isProd) {
        confObj.minimizer = [new TerserPlugin(), new CssMinimizerPlugin()];
    }

    return confObj;
};

const plugins = () => {
    const basePlugins = [
        new CopyWebpackPlugin({
            patterns: [
                { 
                    from: path.resolve(__dirname, 'moscow/public/assets'),
                    to: path.resolve(__dirname, 'dist/moscow/public/assets'),
                },
                // { 
                //     from: path.resolve(__dirname, 'saint-petersburg/public/assets'),
                //     to: path.resolve(__dirname, 'dist/saint-petersburg/public/assets'),
                // },
                // { 
                //     from: path.resolve(__dirname, 'kazan/public/assets'),
                //     to: path.resolve(__dirname, 'dist/kazan/public/assets'),
                // },
                // {
                //     from: path.resolve(__dirname, 'ekaterinburg/public/assets'),
                //     to: path.resolve(__dirname, 'dist/ekaterinburg/public/assets'),
                // },
                // {
                //     from: path.resolve(__dirname, 'sochi/public/assets'),
                //     to: path.resolve(__dirname, 'dist/sochi/public/assets'),
                // },
                // {
                //     from: path.resolve(__dirname, 'ufa/public/assets'),
                //     to: path.resolve(__dirname, 'dist/ufa/public/assets'),
                // },
                // {
                //     from: path.resolve(__dirname, 'sevastopol/public/assets'),
                //     to: path.resolve(__dirname, 'dist/sevastopol/public/assets'),
                // },
                // {
                //     from: path.resolve(__dirname, 'rostov-on-don/public/assets'),
                //     to: path.resolve(__dirname, 'dist/rostov-on-don/public/assets'),
                // },
            ],
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: `[name]/${filename('css')}`,
        }),
        new HtmlWebpackPlugin({
            filename: 'moscow/en/index.html',
            template: './moscow/public/en/index.html',
            chunks: ['moscow/en'],
            minify: {
                collapseWhitespace: isProd
            },
        }),
        new HtmlWebpackPlugin({
            filename: 'moscow/ru/index.html',
            template: './moscow/public/ru/index.html',
            chunks: ['moscow/ru'],
            minify: {
                collapseWhitespace: isProd
            },
        }),
        // new HtmlWebpackPlugin({
        //     filename: 'saint-petersburg/en/index.html',
        //     template: './saint-petersburg/public/en/index.html',
        //     chunks: ['saint-petersburg/en'],
        //     minify: {
        //         collapseWhitespace: isProd
        //     }
        // }),
        // new HtmlWebpackPlugin({
        //     filename: 'saint-petersburg/ru/index.html',
        //     template: './saint-petersburg/public/ru/index.html',
        //     chunks: ['saint-petersburg/ru'],
        //     minify: {
        //         collapseWhitespace: isProd
        //     }
        // }),
        // new HtmlWebpackPlugin({
        //     filename: 'kazan/en/index.html',
        //     template: './kazan/public/en/index.html',
        //     chunks: ['kazan/en'],
        //     minify: {
        //         collapseWhitespace: isProd
        //     }
        // }),
        // new HtmlWebpackPlugin({
        //     filename: 'kazan/ru/index.html',
        //     template: './kazan/public/ru/index.html',
        //     chunks: ['kazan/ru'],
        //     minify: {
        //         collapseWhitespace: isProd
        //     }
        // }),
        // new HtmlWebpackPlugin({
        //     filename: 'ekaterinburg/en/index.html',
        //     template: './ekaterinburg/public/en/index.html',
        //     chunks: ['ekaterinburg/en'],
        //     minify: {
        //         collapseWhitespace: isProd
        //     }
        // }),
        // new HtmlWebpackPlugin({
        //     filename: 'ekaterinburg/ru/index.html',
        //     template: './ekaterinburg/public/ru/index.html',
        //     chunks: ['ekaterinburg/ru'],
        //     minify: {
        //         collapseWhitespace: isProd
        //     }
        // }),
        // new HtmlWebpackPlugin({
        //     filename: 'sochi/en/index.html',
        //     template: './sochi/public/en/index.html',
        //     chunks: ['sochi/en'],
        //     minify: {
        //         collapseWhitespace: isProd
        //     }
        // }),
        // new HtmlWebpackPlugin({
        //     filename: 'sochi/ru/index.html',
        //     template: './sochi/public/ru/index.html',
        //     chunks: ['sochi/ru'],
        //     minify: {
        //         collapseWhitespace: isProd
        //     }
        // }),
        // new HtmlWebpackPlugin({
        //     filename: 'ufa/en/index.html',
        //     template: './ufa/public/en/index.html',
        //     chunks: ['ufa/en'],
        //     minify: {
        //         collapseWhitespace: isProd
        //     }
        // }),
        // new HtmlWebpackPlugin({
        //     filename: 'ufa/ru/index.html',
        //     template: './ufa/public/ru/index.html',
        //     chunks: ['ufa/ru'],
        //     minify: {
        //         collapseWhitespace: isProd
        //     }
        // }),
        // new HtmlWebpackPlugin({
        //     filename: 'sevastopol/en/index.html',
        //     template: './sevastopol/public/en/index.html',
        //     chunks: ['sevastopol/en'],
        //     minify: {
        //         collapseWhitespace: isProd
        //     }
        // }),
        // new HtmlWebpackPlugin({
        //     filename: 'sevastopol/ru/index.html',
        //     template: './sevastopol/public/ru/index.html',
        //     chunks: ['sevastopol/ru'],
        //     minify: {
        //         collapseWhitespace: isProd
        //     }
        // }),
        // new HtmlWebpackPlugin({
        //     filename: 'rostov-on-don/en/index.html',
        //     template: './rostov-on-don/public/en/index.html',
        //     chunks: ['rostov-on-don/en'],
        //     minify: {
        //         collapseWhitespace: isProd
        //     }
        // }),
        // new HtmlWebpackPlugin({
        //     filename: 'rostov-on-don/ru/index.html',
        //     template: './rostov-on-don/public/ru/index.html',
        //     chunks: ['rostov-on-don/ru'],
        //     minify: {
        //         collapseWhitespace: isProd
        //     }
        // })
    ];

    if (isProd) {
        basePlugins.push(
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminMinify,
                    options: {
                        plugins: [
                            ["gifsicle", { interlaced: true }],
                            ["jpegtran", { progressive: true }],
                            ["optipng", { optimizationLevel: 5 }],
                            [
                                "svgo",
                                {
                                    plugins: [
                                        {
                                            name: "preset-default",
                                            params: {
                                                overrides: {
                                                    removeViewBox: false,
                                                },
                                            },
                                        },
                                        {
                                            name: "addAttributesToSVGElement",
                                            params: {
                                                attributes: [
                                                    {
                                                        xmlns: "http://www.w3.org/2000/svg"
                                                    },
                                                ],
                                            },
                                        },
                                    ],
                                },
                            ],
                        ],
                    },
                },
            })
        );
    }

    return basePlugins;
};

module.exports = {
    entry: {
        'moscow/en': './moscow/src/main.js',
        'moscow/ru': './moscow/src/main.js',
        // 'saint-petersburg/en': './saint-petersburg/src/index.js',
        // 'saint-petersburg/ru': './saint-petersburg/src/index.js',
        // 'kazan/en': './kazan/src/index.js',
        // 'kazan/ru': './kazan/src/index.js',
        // 'ekaterinburg/en': './ekaterinburg/src/index.js',
        // 'ekaterinburg/ru': './ekaterinburg/src/index.js',
        // 'sochi/en': './sochi/src/index.js',
        // 'sochi/ru': './sochi/src/index.js',
        // 'ufa/en': './ufa/src/index.js',
        // 'ufa/ru': './ufa/src/index.js',
        // 'sevastopol/en': './sevastopol/src/index.js',
        // 'sevastopol/ru': './sevastopol/src/index.js',
        // 'rostov-on-don/en': './rostov-on-don/src/index.js',
        // 'rostov-on-don/ru': './rostov-on-don/src/index.js'
    },
    output: {
        filename: `[name]/${filename("js")}`,
        path: path.join(__dirname, "dist"),
        publicPath: "/",
    },
    optimization: optimization(),
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: "html-loader",
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader:MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                ],
            },
            {
                test: /\.(?:|gif|png|jpg|jpeg|svg)$/,
                type: 'asset',
            },
            {
                test: /\.(?:|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: `[name]/${filename('[ext]')}`
                        },
                    },
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            }
        ]
    },
    plugins: plugins(),
};
