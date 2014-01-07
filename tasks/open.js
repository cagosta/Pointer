module.exports = function( grunt ) {


    grunt.config.set( 'open', {

        server_index: {
            path: 'http://localhost:5000'
        },

        test_page: {
            path: 'http://localhost:5000/test'
        },

        host: {
            path: 'http://mangrove.dk'
        }

    } )

}