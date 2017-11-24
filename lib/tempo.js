window.tempo = {
  start: function() {
    this.tick();
  },

  // private
  t: 7,
  tick: function() {
    this.t = (this.t + 1) % 8;

    var beat = ['x', null, 'y', null, null, 'r', 'g', 'b'][this.t];
    if (beat) {
      state.beat = beat;
      dispatch.redraw();
      this.playTones(beat);
    }

    var that = this;
    setTimeout(function() { that.tick() }, 200);
  },

  audio: new (window.AudioContext || window.webkitAudioContext)(),
  playTones: function(beat) {
    var tones = state.tones();
    for (var i = 0; i < tones.length; i++) {
      this.playTone(tones[i]);
    }
  },
  playTone: function(pitch) {
    var frequency = 440 * Math.pow(1.059463094359, pitch);
    var osc = this.audio.createOscillator();
    osc.type = 'sine';
    osc.frequency.value = frequency;
    osc.connect(this.audio.destination);
    osc.start();
    setTimeout(function() { osc.stop(); }, 200);
  }
};