import Konva from 'konva';
import WorldManager from './WorldManager';
import Entity from './Entity';
import RenderComponent from './components/RenderComponent';
import TransformComponent from './components/TransformComponent';
import SpriteComponent from './components/SpriteComponent';
import PhysicsComponent from './components/PhysicsComponent';
import getRandomInt from './utils/getRandomInt';

function createCanvas(width = 800, height = 600) {
  const stage = new Konva.Stage({
    container: 'game',
    width,
    height,
  });

  stage.container().style.backgroundColor = 'black';

  const world = new WorldManager(stage);
  world.init();
  const ground = new Entity();
  ground.addComponent(new TransformComponent({
    entity: ground,
    x: stage.width() / 2,
    y: stage.height() - 50,
    width: stage.width(),
  }));
  ground.addComponent(new SpriteComponent({
    entity: ground,
    layer: 'foreground',
  }));
  ground.addComponent(new PhysicsComponent({
    entity: ground,
    width: ground.getComponent('Transform').width,
    height: ground.getComponent('Transform').height,
    engine: world.physicsEngine,
    isStatic: true,
  }));

  world.registerEntity(ground);

  document.getElementById('entity-add').addEventListener('click', () => {
    const newEntity = new Entity();
    newEntity.addComponent(new RenderComponent({ entity: newEntity }));
    newEntity.addComponent(new TransformComponent({
      entity: newEntity,
      x: getRandomInt(50, stage.width() - 50),
      y: getRandomInt(0, stage.height() / 2),
    }));
    newEntity.addComponent(new SpriteComponent({
      entity: newEntity,
      layer: 'foreground',
    }));
    newEntity.addComponent(new PhysicsComponent({
      entity: newEntity,
      width: newEntity.getComponent('Transform').width,
      height: newEntity.getComponent('Transform').height,
      engine: world.physicsEngine,
    }));
    world.registerEntity(newEntity);
  });
}

createCanvas();
