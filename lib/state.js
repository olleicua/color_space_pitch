window.state = {
  x: 0,
  y: 0,
  r: 0,
  g: 0,
  b: 0,
  beat: 'b',

  focusColor: function() { return this.color(this.focusRGB()); },
  beatColor: function() { return this.color(this.beatRGB()); },
  invertBeatColor: function() {
    return this.color(this.invert(this.beatRGB()));
  },

  color: function(opts) {
    return 'rgb(' + opts[0] + ',' + opts[1] + ',' + opts[2] + ')';
  },

  // private
  focusRGB: function() {
    return [this.r * 60, this.g * 60, this.b * 60];
  },
  beatRGB: function() {
    return [this.beat === 'r' && this.r * 60 || 0,
            this.beat === 'g' && this.g * 60 || 0,
            this.beat === 'b' && this.b * 60 || 0];
  },
  invert: function(opts) {
    return [255 - opts[0], 255 - opts[1], 255 - opts[2]];
  },

  tones: function() {
    return {
      x: [[], [12], [8], [10], [3]],
      y: [[], [3, 7], [3, 12], [2, 5], [7, 10]],
      r: [[], [7], [2], [3], [0]],
      g: [[], [8], [3], [5], [2]],
      b: [[], [10], [5], [7], [3]]
    }[this.beat][this[this.beat]];
  }
};