import Konva from 'konva';

class SpriteComponent {
  constructor({ path = null, x = 0, y = 0, scale = 1, layer = 'background' }) {
    this.name = 'Sprite';
    this.layer = layer;

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
        width: 50,
        height: 50,
        fill: 'green',
      });
    }
  }
}

export default SpriteComponent;
