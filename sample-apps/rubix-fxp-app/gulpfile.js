const gulp = require("gulp"),
  webpack = require('webpack'),
  gutil = require('gulp-util');


gulp.task('set-debug-node-env', function (callBack) {
  process.env.NODE_ENV = 'debug';
  callBack();
});

gulp.task('set-prod-node-env', function (callBack) {
  process.env.NODE_ENV = 'production';
  callBack();
});

gulp.task('set-external-component-build', function (callBack) {
  process.env.BUILD_TYPE = 'EXTERNAL';
  callBack();
});

gulp.task('set-fxp-component-build', function (callBack) {
  process.env.BUILD_TYPE = 'FXP';
  callBack();
});

gulp.task("buildAOTUglified", gulp.series('set-fxp-component-build', 'set-prod-node-env', getProductionWebpack), function (callBack) {
  callBack();
});

gulp.task("buildAOTNonUglified", gulp.series('set-fxp-component-build', 'set-prod-node-env', getNonProductionWebpack), function (callback) {
  callback();
});

gulp.task("buildJITNonUglified", gulp.series('set-fxp-component-build', 'set-debug-node-env', getNonProductionWebpack), function (callBack) {
  callBack();
});

gulp.task("buildExternal", gulp.series('set-external-component-build', 'set-prod-node-env', getNonProductionWebpack), function (callBack) {
  callBack();
});

gulp.task("buildExternalProd", gulp.series('set-external-component-build', 'set-prod-node-env', getProductionWebpack), function (callBack) {
  callBack();
});

gulp.task("buildprod", gulp.series('buildAOTUglified'), function (callBack) {
  callBack();
});

gulp.task("buildprodext", gulp.series('buildExternalProd'), function (callBack) {
  callBack();
});


function getProductionWebpack(callBack) {
  webpackProdConfig = require("@fxp/buildconfig/webpack.prod.config.js");
  webpack(webpackProdConfig, function (err, stats) {
    if (err) {
      throw new gutil.PluginError('webpack:build', err);
    }
    gutil.log('[webpack:build] Completed\n' + stats.toString({
      assets: true,
      chunks: false,
      chunkModules: false,
      colors: true,
      hash: false,
      timings: false,
      version: false
    }));

    callBack();
  });
}

function getNonProductionWebpack(callBack) {
  webpackConfig = require("@fxp/buildconfig/webpack.config.js");
  webpack(webpackConfig, function (err, stats) {
    if (err) {
      throw new gutil.PluginError('webpack:build', err);
    }
    gutil.log('[webpack:build] Completed\n' + stats.toString({
      assets: true,
      chunks: false,
      chunkModules: false,
      colors: true,
      hash: false,
      timings: false,
      version: false
    }));
    callBack();
  });
}
