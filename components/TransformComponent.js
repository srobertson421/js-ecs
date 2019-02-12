import Component from './Component';

class TransformComponent extends Component {
  constructor({ entity = null, x = 0, y = 0, scale = 1, width = 50, height = 50 }) {
    super({ entity });
    this.name = 'Transform';
    this.x = x;
    this.y = y;
    this.scale = 1;
    this.width = width;
    this.height = height;
  }
}

export default TransformComponent;
