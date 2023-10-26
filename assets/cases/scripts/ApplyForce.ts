import { _decorator, Component, macro, Node, PhysicsSystem, RigidBody, Toggle, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ApplyForce')
export class ApplyForce extends Component {
    sphere2Node: Node = null;
    toggleNode: Node = null;
    vecCenter: Vec3;

    start () {
        this.toggleNode = this.node.getChildByName('Toggle');
        this.toggleNode.on('toggle', this.callback, this);

        this.sphere2Node = this.node.parent.getChildByName('Sphere2');
        this.vecCenter = this.sphere2Node.getWorldPosition();

        // this.applyFirstForce();

        this.schedule(this.applyFirstForce, 5, 0);

        this.schedule(this.applyForceRepeat, 10, macro.REPEAT_FOREVER);
    }

    applyFirstForce () {
        let rigidBody = this.sphere2Node.getComponent(RigidBody);
        rigidBody.applyLocalForce(new Vec3(500, 0, 500), new Vec3(-1, 0, 0));
    }

    applyForceRepeat () {
        let rigidBody = this.sphere2Node.getComponent(RigidBody);
        const currPos = this.sphere2Node.getWorldPosition();
        if (currPos.x < this.vecCenter.x) {
            if (currPos.z < this.vecCenter.z) {
                rigidBody.applyLocalForce(new Vec3(-500, 0, 500), new Vec3(0, 0, 0));
            } else {
                rigidBody.applyLocalForce(new Vec3(500, 0, 500), new Vec3(0, 0, 0));
            } 
        }
        else {
            if (currPos.z < this.vecCenter.z) {
                rigidBody.applyLocalForce(new Vec3(-500, 0, -500), new Vec3(0, 0, 0));
            } else {
                rigidBody.applyLocalForce(new Vec3(500, 0, -500), new Vec3(0, 0, 0));
            } 
        }
    }
 
    callback (toggle: Toggle) {
        PhysicsSystem.instance.enable = toggle.isChecked;
    }
}

