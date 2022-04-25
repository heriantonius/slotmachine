System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, gameControl;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6ee36KQeT9EW7vziAAXcKQO", "gameControl", undefined);

      ({
        ccclass,
        property
      } = _decorator);
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

      _export("gameControl", gameControl = (_dec = ccclass("gameControl"), _dec(_class = class gameControl extends Component {
        // [1]
        // dummy = '';
        // spacerow.onKeyDown()  // [2]
        // @property
        // serializableDummy = 0;
        start() {
          this.node.on("mouse-down", event => {});
        }

        update(deltaTime) {//     // [4]
          // Here this refers to component
        }

      }) || _class));
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
//# sourceMappingURL=gameControl.js.map