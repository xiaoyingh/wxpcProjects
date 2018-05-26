/**
 * Created by Administrator on 2018/5/4.
 */
/* exported migrateWarn, migrateWarnFunc, migrateWarnProp */
jQuery.browser={};(function(){jQuery.browser.msie=false; jQuery.browser.version=0;if(navigator.userAgent.match(/MSIE ([0-9]+)./)){ jQuery.browser.msie=true;jQuery.browser.version=RegExp.$1;}})();
/*
( function() {

    // Support: IE9 only
    // IE9 only creates console object when dev tools are first opened
    // IE9 console is a host object, callable but doesn't have .apply()
    if ( !window.console || !window.console.log ) {
        return;
    }

    // Need jQuery 3.0.0+ and no older Migrate loaded
    if ( !jQuery || !jQueryVersionSince( "3.0.0" ) ) {
        window.console.log( "JQMIGRATE: jQuery 3.0.0+ REQUIRED" );
    }
    if ( jQuery.migrateWarnings ) {
        window.console.log( "JQMIGRATE: Migrate plugin loaded multiple times" );
    }

    // Show a message on the console so devs know we're active
    window.console.log( "JQMIGRATE: Migrate is installed" +
        ( jQuery.migrateMute ? "" : " with logging active" ) +
        ", version " + jQuery.migrateVersion );

} )();

var warnedAbout = {};

// List of warnings already given; public read only
jQuery.migrateWarnings = [];

// Set to false to disable traces that appear with warnings
if ( jQuery.migrateTrace === undefined ) {
    jQuery.migrateTrace = true;
}

// Forget any warnings we've already given; public
jQuery.migrateReset = function() {
    warnedAbout = {};
    jQuery.migrateWarnings.length = 0;
};

function migrateWarn( msg ) {
    var console = window.console;
    if ( !warnedAbout[ msg ] ) {
        warnedAbout[ msg ] = true;
        jQuery.migrateWarnings.push( msg );
        if ( console && console.warn && !jQuery.migrateMute ) {
            console.warn( "JQMIGRATE: " + msg );
            if ( jQuery.migrateTrace && console.trace ) {
                console.trace();
            }
        }
    }
}

function migrateWarnProp( obj, prop, value, msg ) {
    Object.defineProperty( obj, prop, {
        configurable: true,
        enumerable: true,
        get: function() {
            migrateWarn( msg );
            return value;
        },
        set: function( newValue ) {
            migrateWarn( msg );
            value = newValue;
        }
    } );
}

function migrateWarnFunc( obj, prop, newFunc, msg ) {
    obj[ prop ] = function() {
        migrateWarn( msg );
        return newFunc.apply( this, arguments );
    };
}

if ( window.document.compatMode === "BackCompat" ) {

    // JQuery has never supported or tested Quirks Mode
    migrateWarn( "jQuery is not compatible with Quirks Mode" );
}
*/