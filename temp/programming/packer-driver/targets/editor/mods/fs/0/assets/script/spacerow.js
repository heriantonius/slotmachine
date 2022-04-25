System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, input, Input, KeyCode, _dec, _class, _class2, _descriptor, _temp, _crd, ccclass, property, spacerow;

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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0444dyyfadC3pMerNSZlJfj", "spacerow", undefined);

      ({
        ccclass,
        property
      } = _decorator);
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

      _export("spacerow", spacerow = (_dec = ccclass("spacerow"), _dec(_class = (_class2 = (_temp = class spacerow extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "speed", _descriptor, this);

          _defineProperty(this, "move", false);

          _defineProperty(this, "spaceKey", false);

          _defineProperty(this, "moveRow", false);
        }

        onLoad() {
          input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
          input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
        }

        onKeyDown(event) {
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

        onKeyUp(event) {
          switch (event.keyCode) {
            case KeyCode.SPACE:
              console.log("key di lepas");
              break;
          }
        } //start() {}


        update(deltaTime) {
          if (this.moveRow) {
            this.node.setPosition(this.node.position.x, this.node.position.y - this.speed * Math.floor(Math.random() * 50));

            if (this.node.position.y < 100) {
              this.node.setPosition(this.node.position.x, 720);
            }
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
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
//# sourceMappingURL=spacerow.js.map