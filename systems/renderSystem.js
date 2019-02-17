import System from './System';

class RenderSystem extends System {
  init() {}

  update(stage, layers, entities) {
    stage.clear();

    Object.keys(entities).forEach(key => {
      const entity = entities[key];
      if(entity.components['Render'] && entity.components['Transform'] && entity.components['Sprite']) {
        if(entity.components['Render'].shouldRender) {
          entity.getComponent('Sprite').sprite.x(entity.getComponent('Transform').x);
          entity.getComponent('Sprite').sprite.y(entity.getComponent('Transform').y);
          layers[entity.getComponent('Sprite').layer].add(entity.getComponent('Sprite').sprite);
        }
      }
    });

    Object.keys(layers).forEach(key => {
      const layer = layers[key];
      stage.add(layer);
    });
  }
}

export default RenderSystem;
