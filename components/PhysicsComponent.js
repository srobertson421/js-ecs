import { Engine } from 'matter-js';
import Component from './Component';

console.log(Engine);

class PhysicsComponent extends Component {
  constructor({ entity = null, offsetX = 0, offsetY = 0, width = 50, height = 50, isStatic = false, gravity = 0 }) {
    super({ entity });
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    this.width = width;
    this.height = height;
    this.isStatic = isStatic;
    this.gravity = gravity;
  }
}
