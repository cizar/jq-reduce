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

  $[pluginName] = function(collection, iterator, initialValue, context) {
    if (undefined === initialValue) {
      initialValue = collection[0]
      collection = collection.slice(1);
    }
    $.each(collection, function(index, current) {
      initialValue = iterator.call(context || current, initialValue, current, index);
    });
    return initialValue;
  };

  $.fn[pluginName] = function(iterator, initialValue, context) {
    return $[pluginName](this, iterator, initialValue, context);
  };

}(this));
