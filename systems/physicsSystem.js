import System from './System';

class PhysicsSystem extends System {
  init() {}

  update(stage, layers, entities) {
    Object.keys(entities).forEach(key => {
      const entity = entities[key];
      if(entity.components['Physics'] && entity.components['Transform']) {
        if(
          entity.getComponent('Physics').body.position.x > stage.width() ||
          entity.getComponent('Physics').body.position.x < 0 ||
          entity.getComponent('Physics').body.position.y > stage.height() ||
          entity.getComponent('Physics').body.position.y < 0
        ) {
            entity.getComponent('Sprite').sprite.destroy();
            delete entities[entity.id];
        }

        entity.getComponent('Transform').x = entity.getComponent('Physics').body.position.x;
        entity.getComponent('Transform').y = entity.getComponent('Physics').body.position.y;
      }
    });
  }
}

export default PhysicsSystem;
