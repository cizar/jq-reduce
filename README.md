# jQuery reduce()

```javascript
var total = $.reduce([1, 2, 3], function(p, c) {
  return p + c;
}, 0);
```

```javascript
var refs = $('[ref]').reduce(function(p, c) {
  p[c.attributes.ref.value] = c;
  return p;
}, {});
```

```javascript
var values = $(':text').reduce(function(p, c) {
  p.push(c.value);
  return p;
}, []);
```

