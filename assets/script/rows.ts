import { _decorator, Component, Node } from "cc";
import { gameControl } from "./gameControl";
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = slotrow
 * DateTime = Sun Apr 24 2022 03:20:58 GMT+0700 (Indochina Time)
 * Author = gravityvirus
 * FileBasename = slotrow.ts
 * FileBasenameNoExtension = slotrow
 * URL = db://assets/script/slotrow.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

@ccclass("slotrow")
export class slotrow extends Component {
  // [1]
  // dummy = '';

  // [2]
  // @property
  // serializableDummy = 0;
  @property
  speed: number = 1;
  @property(gameControl)
  private moveRow: boolean = false;
  onLoad() {}
  start() {
    this.node.on("mouse-down", (event) => {
      this.moveRow = true;
    });
  }

  update(deltaTime: number) {
    //     // [4]

    // Here this refers to component

    if (this.moveRow) {
      this.node.setPosition(
        this.node.position.x,
        this.node.position.y - this.speed * Math.floor(Math.random() * 10)
      );
      if (this.node.position.y < 100) {
        this.node.setPosition(this.node.position.x, 720);
      }
    }
    this.scheduleOnce(function () {
      // Here this refers to component
      this.moveRow = false;
    }, 2);
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
