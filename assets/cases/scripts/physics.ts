import { _decorator, Component,Toggle, PhysicsSystem2D } from 'cc';
const { ccclass, property, type } = _decorator;

@ccclass('Physics')
export class Physics extends Component {
    @property(Toggle)
    toggle: Toggle | null = null;
    onLoad(){
       this.toggle.node.on('toggle', this.callback, this);
    }

    callback(toggle: Toggle){
        PhysicsSystem2D.instance.enable = toggle.isChecked;
    }

}
