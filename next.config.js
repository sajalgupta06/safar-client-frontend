const withVideos = require("next-videos");

// module.exports = {
//   webpack: ( config,{ buildId, dev, isServer, defaultLoaders, nextRuntime,webpack }) => {  

//     config.module.rules.push({ 
//         test: /\.scss$/,
//         use: [
//           {
//             loader: 'style-loader'
//           },
//           {
//             loader: 'css-loader',
//             options: {
//               modules: true,
//               importLoaders: 1,
//               localIdentName: '[sha1:hash:hex:4]'
//             }
//           }
//         ]
//       })    
//     return config; 
// },
//   withVideos:withVideos(),

// };

module.exports = withVideos()