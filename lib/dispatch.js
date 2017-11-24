window.dispatch = {
  initUI: function() {
    var that = this;
    window.addEventListener('keydown', function(event) {
      console.log(event);
      switch (event.code) {
        case 'KeyQ':
          that.move('x', 1);
          break;
        case 'KeyA':
          that.move('x', -1);
          break;
        case 'KeyW':
          that.move('y', 1);
          break;
        case 'KeyS':
          that.move('y', -1);
          break;
        case 'KeyE':
          that.move('r', 1);
          break;
        case 'KeyD':
          that.move('r', -1);
          break;
        case 'KeyR':
          that.move('g', 1);
          break;
        case 'KeyF':
          that.move('g', -1);
          break;
        case 'KeyT':
          that.move('b', 1);
          break;
        case 'KeyG':
          that.move('b', -1);
          break;
      }
    });
  },

  move: function(axis, delta) {
    state[axis] = m5(state[axis] + delta);
    this.redraw();
  },

  tick: function() {
    state.beat = {
      x: 'y',
      y: 'r',
      r: 'g',
      g: 'b',
      b: 'x'
    }[state.beat];
    this.redraw();
  },

  redraw: function() {
    document.body.innerHTML = '';
    document.body.appendChild(component.build('frame').render());
    console.log(state);
  }
};