import {
  _decorator,
  Component,
  Node,
  input,
  Input,
  EventKeyboard,
  KeyCode,
  Label,
} from "cc";
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Globals
 * DateTime = Sun Apr 24 2022 08:09:33 GMT+0700 (Indochina Time)
 * Author = gravityvirus
 * FileBasename = Globals.ts
 * FileBasenameNoExtension = Globals
 * URL = db://assets/script/Globals.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

@ccclass("Globals")
export class Globals extends Component {
  // [1]
  // dummy = '';

  // [2]
  //property
  @property
  speed: number = 1;

  //asdas
  @property(Label)
  uang: Label = null;
  uangs: number = 0;
  // asdas
  @property(Label)
  bet: Label = null;
  // asdasdqwd
  @property(Label)
  winReward = null;
  //asdas
  move: Boolean = false;
  spaceKey: boolean = false;
  moveRow: boolean = false;
  hasil: boolean = false;
  checkResult: boolean = false;
  stopedrow2: string;
  stopedrow3: string;
  stopedrow4: string;
  betAmmount: number = 1000;
  totalmoney: number = 1000000;
  winAmmount: number = 0;

  onLoad() {
    input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
    input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
    this.stopedrow2 = "";
    this.stopedrow3 = "";
    this.stopedrow4 = "";
    // this.uang.getComponent(Label).string = "1025";
    this.bet.string = "$ " + this.betAmmount.toString();
    this.uang.string = "$ " + this.totalmoney.toString();
    this.winReward.string = "$" + this.winAmmount.toString();
  }

  onKeyDown(event: EventKeyboard) {
    switch (event.keyCode) {
      case KeyCode.ARROW_RIGHT:
        console.log("tombol kanan di pencet");
        if (this.betAmmount > 99000) {
          this.betAmmount = 99000;
        }
        this.betAmmount = this.betAmmount + 1000;
        this.bet.string = "$ " + this.betAmmount.toString();

        break;

      case KeyCode.ARROW_LEFT:
        console.log("tombol kiri di pencet");
        if (this.betAmmount < 2000) this.betAmmount = 2000;
        this.betAmmount = this.betAmmount - 1000;
        this.bet.string = "$ " + this.betAmmount.toString();

        break;

      case KeyCode.SPACE:
        this.moveRow = true;
        console.log("key di pencet");
        this.totalmoney = this.totalmoney - this.betAmmount;
        this.uang.string = "$ " + this.totalmoney.toString();
        break;
    }
  }

  onKeyUp(event: EventKeyboard) {
    switch (event.keyCode) {
      case KeyCode.SPACE:
        this.scheduleOnce(function () {
          // Here this refers to component
          this.moveRow = false;
          this.hasil = true;
          this.checkResult = true;
        }, 2);
        console.log("key di lepas");
        break;
    }
  }
  start() {}

  update(deltaTime: number) {
    //
    let rowslot2 = this.node.getChildByName("slotrow2");
    let rowslot3 = this.node.getChildByName("slotrow3");
    let rowslot4 = this.node.getChildByName("slotrow4");

    if (this.moveRow) {
      rowslot2.setPosition(
        rowslot2.position.x,
        rowslot2.position.y - 140 * Math.floor(Math.random() * 3)
      );
      if (rowslot2.position.y < -160) {
        rowslot2.setPosition(rowslot2.position.x, 400);
      }

      //  rowslot3 /////sdasdas///as/d/asd/as/das/
      rowslot3.setPosition(
        rowslot3.position.x,
        rowslot3.position.y - 140 * Math.floor(Math.random() * 3)
      );
      if (rowslot3.position.y < -160) {
        rowslot3.setPosition(rowslot3.position.x, 400);
      }

      ///// slot 4 /a/sd/asd/as/d/asd/as/
      rowslot4.setPosition(
        rowslot4.position.x,
        rowslot4.position.y - 140 * Math.floor(Math.random() * 3)
      );
      if (rowslot4.position.y < -160) {
        rowslot4.setPosition(rowslot4.position.x, 400);
      }
      //  check
    }

    if (this.hasil) {
      if (rowslot2.position.y == 400) {
        this.stopedrow2 = "bell";
      } else if (rowslot2.position.y == 260) {
        this.stopedrow2 = "bar";
      } else if (rowslot2.position.y == 120) {
        this.stopedrow2 = "7";
      } else if (rowslot2.position.y == -20) {
        this.stopedrow2 = "cherry";
      } else if (rowslot2.position.y == -160) {
        this.stopedrow2 = "apple";
      }
      console.log(`this rowslot 2 stopped at ${this.stopedrow2}`);

      if (rowslot3.position.y == 400) {
        this.stopedrow3 = "bell";
      } else if (rowslot3.position.y == 260) {
        this.stopedrow3 = "bar";
      } else if (rowslot3.position.y == 120) {
        this.stopedrow3 = "7";
      } else if (rowslot3.position.y == -20) {
        this.stopedrow3 = "cherry";
      } else if (rowslot3.position.y == -160) {
        this.stopedrow3 = "apple";
      }
      console.log(`this rowslot 3 stopped at ${this.stopedrow3}`);

      if (rowslot4.position.y == 400) {
        this.stopedrow4 = "bell";
      } else if (rowslot4.position.y == 260) {
        this.stopedrow4 = "bar";
      } else if (rowslot4.position.y == 120) {
        this.stopedrow4 = "7";
      } else if (rowslot4.position.y == -20) {
        this.stopedrow4 = "cherry";
      } else if (rowslot4.position.y == -160) {
        this.stopedrow4 = "apple";
      }
      console.log(`this rowslot 4 stopped at ${this.stopedrow4}`);
    }
    this.hasil = false;

    // check result
    if (this.checkResult) {
      // bell 3 win
      if (
        this.stopedrow2 == "bell" &&
        this.stopedrow3 == "bell" &&
        this.stopedrow4 == "bell"
      ) {
        console.log("You win bell");
        this.totalmoney = this.totalmoney + this.betAmmount * 3;
        this.winAmmount = this.betAmmount * 3;
      }
      // bar menang 3
      else if (
        this.stopedrow2 == "bar" &&
        this.stopedrow3 == "bar" &&
        this.stopedrow4 == "bar"
      ) {
        console.log("you win bar");
        this.totalmoney = this.totalmoney + this.betAmmount * 3;
        this.winAmmount = this.betAmmount * 3;
      }
      // 7 menang 3
      else if (
        this.stopedrow2 == "7" &&
        this.stopedrow3 == "7" &&
        this.stopedrow4 == "7"
      ) {
        console.log("your win 7");
        this.totalmoney = this.totalmoney + this.betAmmount * 3;
        this.winAmmount = this.betAmmount * 3;
      }
      // cherry menang 3
      else if (
        this.stopedrow2 == "cherry" &&
        this.stopedrow3 == "cherry" &&
        this.stopedrow4 == "cherry"
      ) {
        console.log("you win cherry");
        this.totalmoney = this.totalmoney + this.betAmmount * 3;
        this.winAmmount = this.betAmmount * 3;
      }
      //  apple menang 3
      else if (
        this.stopedrow2 == "apple" &&
        this.stopedrow3 == "apple" &&
        this.stopedrow4 == "apple"
      ) {
        console.log("your iwn apple");
        this.totalmoney = this.totalmoney + this.betAmmount * 3;
        this.winAmmount = this.betAmmount * 3;
        // 2win bell
      } else if (this.stopedrow2 == "bell" && this.stopedrow3 == "bell") {
        console.log("you win 2 bell");

        this.totalmoney = this.totalmoney + this.betAmmount * 2;
        this.winAmmount = this.betAmmount * 2;
      } else if (this.stopedrow2 == "bell" && this.stopedrow4 == "bell") {
        console.log("you win 2 bell");

        this.totalmoney = this.totalmoney + this.betAmmount * 2;
        this.winAmmount = this.betAmmount * 2;
      } else if (this.stopedrow3 == "bell" && this.stopedrow4 == "bell") {
        console.log("you win 2 bell");

        this.totalmoney = this.totalmoney + this.betAmmount * 2;
        this.winAmmount = this.betAmmount * 2;
      }
      // 2 win bar
      else if (this.stopedrow2 == "bar" && this.stopedrow3 == "bar") {
        console.log("you win 2 bar");
        this.totalmoney = this.totalmoney + this.betAmmount * 2;
        this.winAmmount = this.betAmmount * 2;
      } else if (this.stopedrow2 == "bar" && this.stopedrow4 == "bar") {
        console.log("you win 2 bar");
        this.totalmoney = this.totalmoney + this.betAmmount * 2;
        this.winAmmount = this.betAmmount * 2;
      } else if (this.stopedrow3 == "bar" && this.stopedrow4 == "bar") {
        console.log("you win 2 bar");
        this.totalmoney = this.totalmoney + this.betAmmount * 2;
        this.winAmmount = this.betAmmount * 2;
      }
      // 2 menang 7
      else if (this.stopedrow2 == "7" && this.stopedrow3 == "7") {
        console.log("you win 2 bar");
        this.totalmoney = this.totalmoney + this.betAmmount * 2;
        this.winAmmount = this.betAmmount * 2;
      } else if (this.stopedrow2 == "7" && this.stopedrow4 == "7") {
        console.log("you win 2 bar");
        this.totalmoney = this.totalmoney + this.betAmmount * 2;
        this.winAmmount = this.betAmmount * 2;
      } else if (this.stopedrow3 == "7" && this.stopedrow4 == "7") {
        console.log("you win 2 bar");
        this.totalmoney = this.totalmoney + this.betAmmount * 2;
        this.winAmmount = this.betAmmount * 2;
      }
      // 2 menang cherry
      else if (this.stopedrow2 == "cherry" && this.stopedrow3 == "cherry") {
        console.log("you win 2 cherry");
        this.totalmoney = this.totalmoney + this.betAmmount * 2;
        this.winAmmount = this.betAmmount * 2;
      } else if (this.stopedrow2 == "cherry" && this.stopedrow4 == "cherry") {
        console.log("you win 2 cherry");
        this.totalmoney = this.totalmoney + this.betAmmount * 2;
        this.winAmmount = this.betAmmount * 2;
      } else if (this.stopedrow3 == "cherry" && this.stopedrow4 == "cherry") {
        console.log("you win 2 cherry");
        this.totalmoney = this.totalmoney + this.betAmmount * 2;
        this.winAmmount = this.betAmmount * 2;
      }
      // 2 menang apple
      else if (this.stopedrow2 == "apple" && this.stopedrow3 == "apple") {
        console.log("you win 2 apple");
        this.totalmoney = this.totalmoney + this.betAmmount * 2;
        this.winAmmount = this.betAmmount * 2;
      } else if (this.stopedrow2 == "apple" && this.stopedrow4 == "apple") {
        console.log("you win 2 apple");
        this.totalmoney = this.totalmoney + this.betAmmount * 2;
        this.winAmmount = this.betAmmount * 2;
      } else if (this.stopedrow3 == "apple" && this.stopedrow4 == "apple") {
        console.log("you win 2 apple");
        this.totalmoney = this.totalmoney + this.betAmmount * 2;
        this.winAmmount = this.betAmmount * 2;
      } else {
        this.winAmmount = 0;
      }
      this.checkResult = false;
    }
    this.uang.string = "$ " + this.totalmoney.toString();
    this.winReward.string = "$" + this.winAmmount.toString();
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
