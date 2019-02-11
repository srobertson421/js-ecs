function renderSystem(stage, layers, entities) {
  stage.clear();
  Object.keys(entities).forEach(key => {
    const entity = entities[key];
    if(entity.components['Render'] && entity.components['Transform'] && entity.components['Sprite']) {
      if(entity.components['Render'].shouldRender) {
        layers[entity.getComponent('Sprite').layer].add(entity.getComponent('Sprite').sprite);
      }
    }
  });

  Object.keys(layers).forEach(key => {
    const layer = layers[key];
    stage.add(layer);
  });
}

export default renderSystem;
