import Konva from 'konva';
import { Engine, World, Render } from 'matter-js';
import renderSystem from './systems/renderSystem';
import physicsSystem from './systems/physicsSystem';

class WorldManager {
  constructor(stage, layers = 1) {
    this.stage = stage;
    this.layers = {};
    if(layers === 1) {
      this.layers = {
        foreground: new Konva.Layer(),
      }
    } else if(layers === 2) {
      this.layers = {
        background: new Konva.Layer(),
        foreground: new Konva.Layer(),
      }
    } else {
      this.layers = {
        background: new Konva.Layer(),
        midground: new Konva.Layer(),
        foreground: new Konva.Layer(),
      }
    }
    this.physicsEngine = Engine.create();
    this.entities = {};
    this.systems = [];
    this.pause = false;
    this.endLoop = false;

    // this.renderer = Render.create({
    //   element: document.getElementById('game2'),
    //   engine: this.physicsEngine,
    // });
  }

  registerEntity(entity) {
    if(!this.entities[entity.id]) {
      this.entities[entity.id] = entity;
    }
  }

  unRegisterEntity(entityId) {
    delete this.entities[entityId];
  }

  init() {
    Engine.run(this.physicsEngine);
    // Render.run(this.renderer);
    this.systems.push(renderSystem);
    this.systems.push(physicsSystem);
    window.requestAnimationFrame(() => this.update());
  }

  update() {
    // Engine.update(this.physicsEngine, 1000 / 60);

    Object.keys(this.entities).forEach(key => {
      const entity = this.entities[key];
      this.systems.forEach(system => {
        system(this.stage, this.layers, entity);
      });
    });

    window.requestAnimationFrame(() => this.update());
  }
}

export default WorldManager;
