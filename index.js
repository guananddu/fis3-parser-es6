// fis3 for es6

const _ = require( 'underscore' );
const babel = require( 'babel-core' );
const transform = babel.transform;

module.exports = function ( content, file, settings ) {
    var result = transform( content, _.extend( {
        presets: [
            require.resolve( 'babel-preset-es2015' ),
            require.resolve( 'babel-preset-stage-0' ),
            require.resolve( 'babel-preset-react' )
        ]
    }, settings ) );
    return result.code;
};