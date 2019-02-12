import shortid from 'shortid';

class Entity {
  constructor(name = '') {
    this.id = shortid.generate();
    this.name = name;
    this.components = {};
  }

  getComponent(name) {
    return this.components[name];
  }

  addComponent(component) {
    if(!this.components[component.name]) {
      component.entity = this;
      this.components[component.name] = component;
    }
  }

  removeComponent(componentName) {
    delete this.components[componentName];
  }
}

export default Entity;
