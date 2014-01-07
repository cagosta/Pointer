module.exports = function( grunt ) {



    if ( grunt.config.get( 'config.private' ) ) // blocking if private module
        return

    grunt.config.set( 'exec.bower_register', {
        command: 'bower register Pointer git://github.com/cagosta/Pointer'
    } )

    grunt.config.set( 'exec.npm_publish', {
        command: 'npm publish'
    } )

    grunt.registerTask( 'publish:bower', [ 'build', 'test', 'exec:bower_register' ] )

    grunt.registerTask( 'publish:npm', [ 'build', 'test', 'exec:npm_publish' ] )

    grunt.registerTask( 'publish', 'Publish on bower and bpm', [ 'build', 'test', 'exec:bower_register', 'exec:npm_publish' ] )

}