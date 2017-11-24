window.state = {
  x: 0,
  y: 0,
  r: 0,
  g: 0,
  b: 0,
  beat: null,

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
            this.beat === 'g' && this.b * 60 || 0];
  },
  invert: function(opts) {
    return [255 - opts[0], 255 - opts[1], 255 - opts[2]];
  }
};