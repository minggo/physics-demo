import { _decorator, Component, Node, tween, Sprite, Color, instantiate, Collider2D, Contact2DType, Toggle, ToggleComponent, PhysicsSystem2D } from 'cc';
const { ccclass, property, type } = _decorator;

@ccclass('Physics')
export class Physics extends Component {
    @property(Toggle)
    toggle: Toggle | null = null;
    onLoad(){
       this.toggle.node.on('toggle', this.callback, this);
    }

    callback(toggle: ToggleComponent){
        PhysicsSystem2D.instance.enable = toggle.isChecked;
    }

}
