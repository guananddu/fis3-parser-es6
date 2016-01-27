// fis3 for es6

const _ = require( 'underscore' );
const babel = require( 'babel-core' );
const transform = babel.transform;

module.exports = function ( content, file, settings ) {
    var result = transform( content, _.extend( {
        presets: [ 'es2015', 'react' ]
    }, settings ) );
    return result.code;
};