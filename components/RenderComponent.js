import Component from './Component';

class RenderComponent extends Component {
  constructor({ entity = null, shouldRender = true }) {
    super({ entity });
    this.shouldRender = shouldRender;
    this.name = 'Render';
  }
}

export default RenderComponent;
