import Konva from 'konva';
import renderSystem from './systems/renderSystem';

class WorldManager {
  constructor(stage) {
    this.stage = stage;
    this.layers = {
      background: new Konva.Layer(),
      midground: new Konva.Layer(),
      foreground: new Konva.Layer(),
    }
    this.entities = {};
    this.systems = [];
    this.pause = false;
    this.endLoop = false;
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
    this.systems.push(renderSystem);
    window.requestAnimationFrame(() => this.update());
  }

  update() {
    this.systems.forEach(system => {
      system(this.stage, this.layers, this.entities);
    });

    window.requestAnimationFrame(() => this.update());
  }
}

export default WorldManager;
