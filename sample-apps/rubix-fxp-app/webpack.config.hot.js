const webpackConfig = require('@fxp/buildconfig/webpack.config');
const path = require('path');
const FxPCliConfig = require(path.join(process.cwd(), ".fxp-cli.json"));
const ApplicationPort = FxPCliConfig.ApplicationPort;

webpackConfig.devServer = {
	"contentBase": path.join(__dirname, 'dist'),
	"compress": true,
	"port": ApplicationPort,
	"headers": {
		"Access-Control-Allow-Origin": '*'
	},
	"historyApiFallback": true,
	"hot": true
};

webpackConfig.plugins = webpackConfig.plugins.filter(plugin => {
    if(plugin.chunkNames != undefined || plugin.chunkNames != null) {
        return plugin.chunkNames.includes('inline') ? false: true;
    }
    return true;
});

module.exports = webpackConfig;
