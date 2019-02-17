import { Body } from 'matter-js';
import System from './System';

const speed = 5;

class InputSystem extends System {
  init() {
    window.addEventListener('keydown', e => this.keyDown(e), false);
    window.addEventListener('keyup', e => this.keyUp(e), false);
  }

  update(stage, layers, entities) {
    this.entities = entities;
    Object.keys(entities).forEach(key => {
      const entity = entities[key];
      // Body.setVelocity(entity.getComponent('Physics').body, { x: 0, y: 0 });
      if(entity.components['Input']) {
        const inputComp = entity.getComponent('Input');
        if(inputComp.right) {
          Body.setVelocity(entity.getComponent('Physics').body, { x: speed, y: 0 });
        } else if(inputComp.left) {
          Body.setVelocity(entity.getComponent('Physics').body, { x: -speed, y: 0 });
        } else if(inputComp.up) {
          console.log('up is down', entity.id);
        } else if(inputComp.down) {
          console.log('down is down', entity.id);
        }
      }
    });
  }

  keyDown(e) {
    const keyName = this.checkKey(e.keyCode);
    Object.keys(this.entities).forEach(key => {
      const entity = this.entities[key];
      if(entity.components['Input']) {
        const inputComp = entity.getComponent('Input');
        if(inputComp.hasOwnProperty(keyName)) {
          inputComp[keyName] = true;
        }
      }
    });
  }

  keyUp(e) {
    const keyName = this.checkKey(e.keyCode);
    Object.keys(this.entities).forEach(key => {
      const entity = this.entities[key];
      if(entity.components['Input']) {
        const inputComp = entity.getComponent('Input');
        if(inputComp.hasOwnProperty(keyName)) {
          inputComp[keyName] = false;
        }
      }
    });
  }

  checkKey(keyCode) {
    switch(keyCode) {
      case 39:
        return 'right';
      case 37:
        return 'left';
      case 40:
        return 'down';
      case 38:
        return 'up';
      default:
        return 'unknown';
    }
  }
}

export default InputSystem;
