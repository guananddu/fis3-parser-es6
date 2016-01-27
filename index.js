// fis3 for es6

require( 'babel-preset-es2015' );
require( 'babel-preset-react' );

const _ = require( 'underscore' );
const babel = require( 'babel-core' );
const transform = babel.transform;

module.exports = function ( content, file, settings ) {
    var result = transform( content, _.extend( {
        presets: [ 'es2015', 'react' ]
    }, settings ) );
    return result.code;
};