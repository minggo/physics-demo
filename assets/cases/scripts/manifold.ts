import { _decorator, Component, Node, Toggle, PhysicsSystem2D } from 'cc';
const { ccclass } = _decorator;

@ccclass('Manifold')
export class Manifold extends Component {
    toggleNode: Node = null;

    start () {
        this.toggleNode = this.node.getChildByName('Toggle');
        this.toggleNode.on('toggle', this.callback, this);
    }

    callback (toggle: Toggle) {
        PhysicsSystem2D.instance.enable = toggle.isChecked;
    }
}
