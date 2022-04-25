import {
  _decorator,
  Component,
  Node,
  input,
  Input,
  EventKeyboard,
  KeyCode,
} from "cc";
import { gameControl } from "./gameControl";
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = spacerow
 * DateTime = Sun Apr 24 2022 07:10:00 GMT+0700 (Indochina Time)
 * Author = gravityvirus
 * FileBasename = spacerow.ts
 * FileBasenameNoExtension = spacerow
 * URL = db://assets/script/spacerow.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

@ccclass("spacerow")
export class spacerow extends Component {
  // [1]
  // dummy = '';

  // [2]
  // @property
  @property
  speed: number = 1;
  // serializableDummy = 0;
  move: Boolean = false;
  spaceKey: boolean = false;
  moveRow: boolean = false;

  onLoad() {
    input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
    input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
  }
  onKeyDown(event: EventKeyboard) {
    switch (event.keyCode) {
      case KeyCode.SPACE:
        this.moveRow = true;
        console.log("key di pencet");
        break;
    }
    this.scheduleOnce(function () {
      // Here this refers to component
      this.moveRow = false;
    }, 2);
  }

  onKeyUp(event: EventKeyboard) {
    switch (event.keyCode) {
      case KeyCode.SPACE:
        console.log("key di lepas");
        break;
    }
  }
  //start() {}

  update(deltaTime: number) {
    if (this.moveRow) {
      this.node.setPosition(
        this.node.position.x,
        this.node.position.y - this.speed * Math.floor(Math.random() * 50)
      );
      if (this.node.position.y < 100) {
        this.node.setPosition(this.node.position.x, 720);
      }
    }
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
