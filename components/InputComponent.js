import Component from './Component';

class InputComponent extends Component {
  constructor({ entity = null }) {
    super({ entity });
    this.name = 'Input';
    this.right = false;
    this.left = false;
    this.up = false;
    this.down = false;
    this.w = false;
    this.a = false;
    this.s = false;
    this.d = false;
    this.gamepad = false;
    this.keyboard = true;
  }
}

export default InputComponent;
