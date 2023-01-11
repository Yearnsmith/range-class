const mkArr = (start, end, options = {inclusive: false}) => {

  const mkr = (_s = start, _e = end, _o = options) => (
    end < start ?
    [...new Array((_o.inclusive ? _s + 1 : _s) - _e).keys()].map(num => _s - num) :
    [...new Array((_o.inclusive ? _e + 1 : _e) - _s).keys()].map(num => num + _s)
  );

  if (typeof start === 'string') {

    const charStart = start.charCodeAt(0);
    const charEnd = end.charCodeAt(0);

    return mkr(charStart, charEnd, options).map(charCode => (
      String.fromCharCode(charCode)
    ));
  }

  return mkr();
}

class Range extends Set {
  constructor(start, end, options = {inclusive: false}) {
    super(
      new Set(mkArr(start, end, options))
    );
  }
}

module.exports = Range;