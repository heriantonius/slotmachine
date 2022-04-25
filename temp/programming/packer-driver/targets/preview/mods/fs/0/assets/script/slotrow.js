System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _class2, _descriptor, _temp, _crd, ccclass, property, slotrow;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0b67aU3rJFJh6Gzu30uHl2p", "slotrow", undefined);

      ({
        ccclass,
        property
      } = _decorator);
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

      _export("slotrow", slotrow = (_dec = ccclass("slotrow"), _dec(_class = (_class2 = (_temp = class slotrow extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "speed", _descriptor, this);
        }

        start() {
          this.node.on("mouse-down", event => {
            console.log("Mouse down");
            this.node.setPosition(this.node.position.x, this.node.position.y - this.speed * Math.floor(Math.random() * 10));

            if (this.node.position.y < 100) {
              this.node.setPosition(this.node.position.x, 720);
            }
          });
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
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
//# sourceMappingURL=slotrow.js.map