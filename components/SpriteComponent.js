import Konva from 'konva';
import Component from './Component';

class SpriteComponent extends Component {
  constructor({ entity = null, path = null, layer = 'background' }) {
    super({ entity });
    this.name = 'Sprite';
    this.layer = layer;
    const x = this.entity.getComponent('Transform').x;
    const y = this.entity.getComponent('Transform').y;

    if(path) {
      const imageObj = new Image();
      imageObj.onload = () => {
        this.sprite = new Konva.Sprite({
          x,
          y,
          image: imageObj
        });
      }
      imageObj.src = path;
    } else {
      this.sprite = new Konva.Rect({
        x,
        y,
        width: this.entity.getComponent('Transform').width,
        height: this.entity.getComponent('Transform').height,
        fill: '#'+Math.floor(Math.random()*16777215).toString(16),
      });
    }
  }
}

export default SpriteComponent;
