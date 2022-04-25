import { _decorator, Component, Node, input, Input, EventMouse } from "cc";
import { slotrow } from "./rows";
import { spacerow } from "./spacerow";
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = gameControl
 * DateTime = Sun Apr 24 2022 00:33:46 GMT+0700 (Indochina Time)
 * Author = gravityvirus
 * FileBasename = gameControl.ts
 * FileBasenameNoExtension = gameControl
 * URL = db://assets/script/gameControl.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

@ccclass("gameControl")
export class gameControl extends Component {
  // [1]
  // dummy = '';
  // spacerow.onKeyDown()  // [2]
  // @property

  // serializableDummy = 0;
  start() {
    this.node.on("mouse-down", (event) => {});
  }
  update(deltaTime: number) {
    //     // [4]
    // Here this refers to component
  }
}
/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/decorator.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
 */
