System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, input, Input, KeyCode, Label, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, Globals;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      input = _cc.input;
      Input = _cc.Input;
      KeyCode = _cc.KeyCode;
      Label = _cc.Label;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "98a89N4wb1HJIoRF/QCEgA6", "Globals", undefined);

      ({
        ccclass,
        property
      } = _decorator);
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

      _export("Globals", Globals = (_dec = ccclass("Globals"), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec(_class = (_class2 = (_temp = class Globals extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "speed", _descriptor, this);

          _initializerDefineProperty(this, "uang", _descriptor2, this);

          _defineProperty(this, "uangs", 0);

          _initializerDefineProperty(this, "bet", _descriptor3, this);

          _initializerDefineProperty(this, "winReward", _descriptor4, this);

          _defineProperty(this, "move", false);

          _defineProperty(this, "spaceKey", false);

          _defineProperty(this, "moveRow", false);

          _defineProperty(this, "hasil", false);

          _defineProperty(this, "checkResult", false);

          _defineProperty(this, "stopedrow2", void 0);

          _defineProperty(this, "stopedrow3", void 0);

          _defineProperty(this, "stopedrow4", void 0);

          _defineProperty(this, "betAmmount", 1000);

          _defineProperty(this, "totalmoney", 1000000);

          _defineProperty(this, "winAmmount", 0);
        }

        onLoad() {
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
          this.stopedrow2 = "";
          this.stopedrow3 = "";
          this.stopedrow4 = ""; // this.uang.getComponent(Label).string = "1025";

          this.bet.string = "$ " + this.betAmmount.toString();
          this.uang.string = "$ " + this.totalmoney.toString();
          this.winReward.string = "$" + this.winAmmount.toString();
        }

        onKeyDown(event) {
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

        onKeyUp(event) {
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

        update(deltaTime) {
          //
          let rowslot2 = this.node.getChildByName("slotrow2");
          let rowslot3 = this.node.getChildByName("slotrow3");
          let rowslot4 = this.node.getChildByName("slotrow4");

          if (this.moveRow) {
            rowslot2.setPosition(rowslot2.position.x, rowslot2.position.y - 140 * Math.floor(Math.random() * 3));

            if (rowslot2.position.y < -160) {
              rowslot2.setPosition(rowslot2.position.x, 400);
            } //  rowslot3 /////sdasdas///as/d/asd/as/das/


            rowslot3.setPosition(rowslot3.position.x, rowslot3.position.y - 140 * Math.floor(Math.random() * 3));

            if (rowslot3.position.y < -160) {
              rowslot3.setPosition(rowslot3.position.x, 400);
            } ///// slot 4 /a/sd/asd/as/d/asd/as/


            rowslot4.setPosition(rowslot4.position.x, rowslot4.position.y - 140 * Math.floor(Math.random() * 3));

            if (rowslot4.position.y < -160) {
              rowslot4.setPosition(rowslot4.position.x, 400);
            } //  check

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

          this.hasil = false; // check result

          if (this.checkResult) {
            // bell 3 win
            if (this.stopedrow2 == "bell" && this.stopedrow3 == "bell" && this.stopedrow4 == "bell") {
              console.log("You win bell");
              this.totalmoney = this.totalmoney + this.betAmmount * 3;
              this.winAmmount = this.betAmmount * 3;
            } // bar menang 3
            else if (this.stopedrow2 == "bar" && this.stopedrow3 == "bar" && this.stopedrow4 == "bar") {
                console.log("you win bar");
                this.totalmoney = this.totalmoney + this.betAmmount * 3;
                this.winAmmount = this.betAmmount * 3;
              } // 7 menang 3
              else if (this.stopedrow2 == "7" && this.stopedrow3 == "7" && this.stopedrow4 == "7") {
                  console.log("your win 7");
                  this.totalmoney = this.totalmoney + this.betAmmount * 3;
                  this.winAmmount = this.betAmmount * 3;
                } // cherry menang 3
                else if (this.stopedrow2 == "cherry" && this.stopedrow3 == "cherry" && this.stopedrow4 == "cherry") {
                    console.log("you win cherry");
                    this.totalmoney = this.totalmoney + this.betAmmount * 3;
                    this.winAmmount = this.betAmmount * 3;
                  } //  apple menang 3
                  else if (this.stopedrow2 == "apple" && this.stopedrow3 == "apple" && this.stopedrow4 == "apple") {
                      console.log("your iwn apple");
                      this.totalmoney = this.totalmoney + this.betAmmount * 3;
                      this.winAmmount = this.betAmmount * 3; // 2win bell
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
                    } // 2 win bar
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
                      } // 2 menang 7
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
                        } // 2 menang cherry
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
                          } // 2 menang apple
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

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "uang", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bet", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "winReward", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));
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


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Globals.js.map