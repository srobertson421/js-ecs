function physicsSystem(stage, layers, entity) {
  if(entity.components['Physics'] && entity.components['Transform']) {
    entity.getComponent('Transform').x = entity.getComponent('Physics').body.position.x;
    entity.getComponent('Transform').y = entity.getComponent('Physics').body.position.y;
  }
}

export default physicsSystem;
