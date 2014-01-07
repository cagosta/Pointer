define( [
  './Pointer',
  'requestAnimationFrame/requestAnimationFrame'
 ], function( Pointer, requestAnimationFrame) {


    return Pointer.extend( {

        '+options': {
            easeSpeed: 0.1
        },

        '+constructor': function() {
            this.realPosition = this.position
            this.bindMethod( '_toTarget' )
            this._toTarget()
        },

        _toTarget: function() {
            var diff = this.realPosition.minus( this.position )
            if ( diff.norm() > 0.01 ) {
                this.lastPosition = this.position
                this.position = this.position.add( diff.divide( 1 / this.easeSpeed * 100 ) )
                this.direction = this.position.minus( this.lastPosition )
                this.fire( 'move', this.position )
            }
            // setTimeout( this._toTarget, 100 )
            requestAnimationFrame( this._toTarget.bind( this ) )
        },

        _setPosition: function( p ) {
            this.realPosition = p
        }


    } )


} )