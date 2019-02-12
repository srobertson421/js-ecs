import { Bodies, World } from 'matter-js';
import Component from './Component';

class PhysicsComponent extends Component {
  constructor({ entity = null, offsetX = 0, offsetY = 0, width = 50, height = 50, isStatic = false, engine = null }) {
    super({ entity });
    this.name = 'Physics';
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(
      this.entity.getComponent('Transform').x,
      this.entity.getComponent('Transform').y,
      width,
      height,
      {
        isStatic,
      },
    );

    World.add(engine.world, this.body);
  }
}

export default PhysicsComponent;
