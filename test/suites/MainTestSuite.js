define( [
    'Pointer/Pointer',
    'Pointer/EasePointer'
 ], function( Pointer, EasePointer ) {

    describe( 'Pointer/Pointer', function() {

        it( 'should load without blowing', function() {

            expect( Pointer ).to.exist

        } )

        describe( 'EasePointer', function() {

            var easePointer
            it( 'should load', function() {

                expect( EasePointer ).to.exist

            } )

            it( 'shoud be instanciable', function() {

                expect( function() {

                    easePointer = new EasePointer()
                } ).to.not.
                throw ( Error )

            } )

        } )



    } )

} )