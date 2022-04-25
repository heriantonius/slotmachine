System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, spacerow, _dec, _class, _crd, ccclass, property, start;

  function _reportPossibleCrUseOfspacerow(extras) {
    _reporterNs.report("spacerow", "./spacerow", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      spacerow = _unresolved_2.spacerow;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "78085xQE1BKBKqqB6DWcVMI", "start", undefined);

      ({
        ccclass,
        property
      } = _decorator);
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

      _export("start", start = (_dec = ccclass("start"), _dec(_class = class start extends Component {
        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        onLoad() {
          // onloads
          this.node.on("mouse-down", event => {
            // isi
            _crd && spacerow === void 0 ? (_reportPossibleCrUseOfspacerow({
              error: Error()
            }), spacerow) : spacerow;
          });
        }

        start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }


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
//# sourceMappingURL=start.js.map