/**
 * Pointer version: "0.0.7" Copyright (c) 2011-2012, Cyril Agosta ( cyril.agosta.dev@gmail.com) All Rights Reserved.
 * Available via the MIT license.
 * see: http://github.com/cagosta/Pointer for details
 */

define( [
  'Seed/Seed',
  'Array.nocomplex/all'
 ], function( Seed, Array ) {


    return Seed.extend( {

        '+options':  {
            position: [ 0, 0 ],
            lastPosition: [ 0, 0 ]
        },

        '+constructor': function() {
            this.initEvents()
        },

        initEvents: function() {
            document.body.addEventListener( 'touchmove', this._onTouchMove.bind( this ) )
            document.body.addEventListener( 'mousemove', this._onMouseMove.bind( this ) )
            document.body.addEventListener( 'click', this._onClick.bind( this ) )
        },

        getPosition: function() {
            return this.position
        },

        _onClick: function( e ) {
            this._setPosition( [ e.clientX, e.clientY ] )
            this.fire( 'click', this.position )
        },

        _onMouseMove: function( e ) {
            this._setPosition( [ e.clientX, e.clientY ] )
        },

        _onTouchMove: function( e ) {
            e.preventDefault() // necessary in android browser, fire once elswhere
            this._setPosition( [ e.touches[ 0 ].pageX, e.touches[ 0 ].pageY ] )
        },

        _setPosition: function( p ) {
            this.lastPosition = this.position
            this.position = p
            this.direction = this.position.minus( this.lastPosition )
            this.fire( 'move', this.position )
        }

    } )


} )