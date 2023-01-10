# Range class

This is a simple, no frills class that inherits from `Set()`.

In languages like ruby, Range is an in-built class that can be created on the fly.

This adds a very simple implementation of making a Range.

***❕Note: For the moment, this is not a port of any other languages implementation, but a very basic child class of `Set()`***

## Syntax

```js
new Range(start, end)
new Range(start, end, options)
```

### Parameters

#### `start`

First item of the `Range`

#### `end`

Item at which to end the `Range`. By default this will not be included.

example: &ensp;`new Range(1, 5) // { 1, 2, 3, 4}`

#### `options` (optional)

  An object adjusting the output.

#### options:

| option | Default | Description |
|--------|---------|-------------|
| inclusive | false | `<end>` is included in the Set, or not. |

#### Return value

A new `Range` object, which is equivalent to a `Set` object.

### examples:

```js
new Range(1, 5); // { 1, 2, 3, 4 }`

new Range(1, 5, {inclusive: true}); // { 1, 2, 3, 4, 5 }

new Range(50, 55); // { 50, 51, 52, 53, 54 }

new Range('a', 'e'); // { 'a', 'b', 'c', 'd' }

new Range('a', 'e', { inclusive: true }); // { 'a', 'b', 'c', 'd', 'e' }

```

## To Do

- Error handling
- support for reverse ranges
  - `new Range(5, 1); // {5, 4, 3, 2 }
- support for multi-character strings

  - `new Range('AA', 'AE'); // { 'AA', 'AB', 'AC', 'AD' }`
  - `new Range('AA', 'BZ'); // { 'AA', 'AB', 'AC' ... 'BX', 'BY', 'BZ' }`
- alternate ruby-style syntax
  - `new Range(1...5); // { 1, 2, 3, 4 }`
  - `new Range(1..5);  // { 1, 2, 3, 4, 5 }`
- support for other types?
