window.dispatch = {
  initUI: function() {
    var that = this;
    window.addEventListener('keydown', function(event) {
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
    this.updateURIFromState();
    this.redraw();
  },

  loadStateFromURI: function() {
    var hash = location.hash.slice(1);
    if (hash.length === 5) {
      for (var i = 0; i < 5; i++) {
        state['xyrgb'[i]] = parseFloat(hash[i]);
      }
    }
  },

  updateURIFromState: function() {
    location.hash = times(5, function(i) {
      return state['xyrgb'[i]];
    }).join('');
  },

  redraw: function() {
    document.body.innerHTML = '';
    document.body.appendChild(component.build('frame').render());
  }
};