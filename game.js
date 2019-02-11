import Konva from 'konva';
import WorldManager from './WorldManager';
import Entity from './Entity';
import RenderComponent from './components/RenderComponent';
import TransformComponent from './components/TransformComponent';
import SpriteComponent from './components/SpriteComponent';
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

  document.getElementById('entity-add').addEventListener('click', () => {
    const newEntity = new Entity();
    newEntity.addComponent(new RenderComponent());
    newEntity.addComponent(new TransformComponent({
      x: getRandomInt(0, stage.width()),
      y: getRandomInt(0, stage.height()),
    }));
    newEntity.addComponent(new SpriteComponent({
      x: newEntity.getComponent('Transform').x,
      y: newEntity.getComponent('Transform').y,
      layer: 'foreground',
    }));
    world.registerEntity(newEntity);
    console.log(world.entities);
  });
}

createCanvas();
