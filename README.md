# jQuery reduce()

The classic example

```javascript
var total = $.reduce([1, 2, 3], function(p, c) {
  return p + c;
}, 0);
```

Reduce a jQuery collection into an Object

```javascript
var refs = $('[ref]').reduce(function(p, c) {
  p[c.attributes.ref.value] = c;
  return p;
}, {});
```

Reduce a jQuery collection into an Array

```javascript
var values = $(':text').reduce(function(p, c) {
  p.push(c.value);
  return p;
}, []);
```

The current item of the collection is the default context

```javascript
var names = $(':input').reduce(function(p){
  return p.concat(this.name);
}, []);
```
