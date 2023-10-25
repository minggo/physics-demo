import { _decorator, Component, macro, Node, PhysicsSystem, RigidBody, Toggle, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ApplyForce')
export class ApplyForce extends Component {
    sphere2Node: Node = null;
    toggleNode: Node = null;
    start () {
        this.toggleNode = this.node.getChildByName('Toggle');
        this.toggleNode.on('toggle', this.callback, this);

        this.applyForce();

        // this.schedule(this.applyForce, 10, macro.REPEAT_FOREVER);
    }

    applyForce () {
        this.sphere2Node = this.node.parent.getChildByName('Sphere2');
        let rigidBody = this.sphere2Node.getComponent(RigidBody);
        rigidBody.applyLocalForce(new Vec3(500, 0, 500), new Vec3(-1, 0, 0));
    }
 
    callback (toggle: Toggle) {
        PhysicsSystem.instance.enable = toggle.isChecked;
    }
}

