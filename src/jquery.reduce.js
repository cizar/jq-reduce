;(function($, undefined) {

  $.reduce = function(collection, iterator, initial, context) {
    if (Array.prototype.reduce) {
      return Array.prototype.reduce.call(collection, iterator.bind(context), initial);
    }
    $.each(collection, function(index, current) {
      initial = iterator.call(context, initial, current, index);
    });
    return initial;
  };

  $.fn.reduce = function(iterator, initial, context) {
    return $.reduce(this, iterator, initial, context);
  };

}(jQuery, undefined));
