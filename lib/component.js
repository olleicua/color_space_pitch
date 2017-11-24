window.component = {
  build: function(name, props) {
    return extend(Object.create(this[name]), props);
  },

  frame: {
    render: function() {
      return parent(
        extend(document.createElement('div'), {
          className: 'frame',
          style: { backgroundColor: state.beatColor() }
        }),
        [component.build('colors').render(), component.build('grid').render()]
      );
    }
  },

  colors: {
    render: function() {
      var that = this;
      return parent(
        extend(document.createElement('div'), { className: 'colors' }),
        map(['r', 'g', 'b'], function(color) {
          return parent(
            extend(document.createElement('div'), { className: 'dimention' }),
            map([1, -1], function(delta) {
              return extend(document.createElement('div'), {
                className: 'indicator',
                textContent: that.uiIndicator(color, delta),
                style: { color: that.colorFor(color, delta) }
              });
            })
          );
        })
      );
    },
    // private
    uiIndicator: function(color, delta) {
      return delta === 1 &&
             { r: 'E', g: 'R', b: 'T' }[color] ||
             { r: 'D', g: 'F', b: 'G' }[color];
    },
    colorObj: function(color, delta) {
      return extend({ r: state.r, g: state.g, b: state.b },
                    [color, m5(state[color] + delta)]);
    },
    colorFor: function(color, delta) {
      return state.color(
        (function(colorObj) {
          return [colorObj.r * 60, colorObj.g * 60, colorObj.b * 60];
        })(this.colorObj(color, delta))
      );
    }
  },

  grid: {
    render: function() {
      return parent(
        extend(document.createElement('div'), { className: 'grid' }),
        flatten(times(5, function(y) {
          return times(5, function(x) {
            return component.build('square', {x: x, y: y}).render();
          })
        }))
      );
    }
  },

  square: {
    render: function() {
      return extend(document.createElement('div'), {
        className: 'square',
        style: {
          backgroundColor: this.active() && state.focusColor() ||
                           this.highlight() && state.invertBeatColor() ||
                           state.beatColor(),
          color: state.focusColor()
        },
        innerHTML: this.uiIndicator()
      });
    },
    // private
    active: function() {
      return this.x === state.x &&
             this.y === state.y;
    },
    highlight: function() {
      return state.beat.match(/x|y/) &&
             this[state.beat] === state[state.beat];
    },
    uiIndicator: function() {
      return ((m5(this.x + 1)) === state.x && this.y === state.y) && 'A' ||
             ((m5(this.x - 1)) === state.x && this.y === state.y) && 'Q' ||
             ((m5(this.y + 1)) === state.y && this.x === state.x) && 'S' ||
             ((m5(this.y - 1)) === state.y && this.x === state.x) && 'W' ||
             '&nbsp;';
    }
  }
};
