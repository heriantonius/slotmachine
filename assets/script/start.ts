import { _decorator, Component, Node } from "cc";
import { spacerow } from "./spacerow";
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = start
 * DateTime = Sun Apr 24 2022 08:30:25 GMT+0700 (Indochina Time)
 * Author = gravityvirus
 * FileBasename = start.ts
 * FileBasenameNoExtension = start
 * URL = db://assets/script/start.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

@ccclass("start")
export class start extends Component {
  // [1]
  // dummy = '';

  // [2]
  // @property

  // serializableDummy = 0;
  onLoad() {
    // onloads
    this.node.on("mouse-down", (event) => {
      // isi
      spacerow;
    });
  }

  start() {
    // [3]
  }

  // update (deltaTime: number) {
  //     // [4]
  // }
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
