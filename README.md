# Range class

This is a simple, no frills class that inherits from `Set()`.

In languages like ruby, Range is an in-built class that can be created on the fly.

This adds a very simple implementation of making a Range.

***❕Note: For the moment, this is not a port of any other class, but a wrapper around `Set()`***

## Usage

`new Range(<start>, <end>, [<options>={inclusive=<false>}])`

### options:
- inclusive: `<end>` is included in the Set, or not. Defaults to false.

### examples:

```js
new Range(1, 5) // { 1, 2, 3, 4 }`

new Range(1, 5, {inclusive: true}) // { 1, 2, 3, 4, 5 }

new Range(50, 55) // { 50, 51, 52, 53, 54 }

new Range('a', 'e') // { 'a', 'b', 'c', 'd' }

new Range('a', 'e', { inclusive: true }) // { 'a', 'b', 'c', 'd', 'e' }

```
