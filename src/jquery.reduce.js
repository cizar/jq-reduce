;(function(root, undefined) {

  'use strict';

  var pluginName = 'reduce';

  var $ = root.jQuery;

  if ('undefined' === typeof $) {
    if ('undefined' === typeof require) {
      throw new Error('The plugin "' + pluginName + '" requires jQuery');
    }
    $ = require('jquery');
  }

  $[pluginName] = function(collection, iterator, initial, context) {
    $.each(collection, function(index, current) {
      initial = iterator.call(context, initial, current, index);
    });
    return initial;
  };

  $.fn[pluginName] = function(iterator, initial, context) {
    return $[pluginName](this, iterator, initial, context);
  };

}(this));
