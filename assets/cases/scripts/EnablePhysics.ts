import { _decorator, Component, Node, PhysicsSystem, Toggle } from 'cc';
const { ccclass } = _decorator;

@ccclass('EnablePhysics')
export class EnablePhysics extends Component {
    toggleNode: Node = null;

   start () {
       this.toggleNode = this.node.getChildByName('Toggle');
       this.toggleNode.on('toggle', this.callback, this);
   }

   callback (toggle: Toggle) {
       PhysicsSystem.instance.enable = toggle.isChecked;
   }
}

