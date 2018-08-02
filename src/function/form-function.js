import { dedupingMixin } from "@polymer/polymer/lib/utils/mixin.js";
import {} from '@polymer/polymer/lib/mixins/properties-changed.js';
const FormMixinClass = subclass =>
  class extends subclass {
    // this.addEventListener('click', async (e) => {
    //     this.whales++;
    //     await this.renderComplete;
    //     this.dispatchEvent(new CustomEvent('whales', {detail: {whales: this.whales}}))
    //   });
    async _test() {
      console.log("MyMixin");
      this.number.num++;
      this.number = Object.assign(this.number, this.number);
      console.log(this.number);
      //   console.log("props", this);
      //   await this._requestRender();
      // return 'MyMixin'
    }
    // _propertiesChanged(props, changed, oldProps) {
    //   console.log("_propertiesChanged(props, changed, oldProps):");
    //   console.log(props);
    //   console.log(changed);
    //   console.log(oldProps);
    //   // if (changed && 'temp1' in changed) {
    //   //   console.log("if temp1:"+changed.temp1);
    //   // }
    //   super._propertiesChanged(props, changed, oldProps); //This is needed here
    // }
    // _didRender(props, changedProps, prevProps) {
    //   console.log("MyMixin _didRender");
    //   console.log(props, changedProps, prevProps);
    // }
    // _shouldRender(props, changedProps, prevProps) {
    //   console.log("MyMixin _shouldRender");
    //   console.log(props, changedProps, prevProps);
    //   // if('prop1' in changedProps){
    //   //    this._doSomethingWhenProp1ChangedFunction(...)
    //   // }
    //   return true;
    // }

    // วิธีใช้
    //<input id="firstName" name="firstName"  on-input="${e => this._formOnInputChange( e)}" >
    // onChange={e => this._formOnInputObject(e)}
    // ถ้าต้องการแปลงค่า จาก string เป้น number ก็ต้องใส่ Attribute number ลงไปด้วย
    _formOnInputObject(e) {
      let name = e.currentTarget.getAttribute("name");
      let number = e.currentTarget.getAttribute("number");
      let value = e.currentTarget.value;
      // console.log('value',e.currentTarget.getAttribute('value'))
      // เช็คว่าใส่ Attribute name ไหม
      if (!name) throw "ใส่ค่า Attribute name ด้วย";
      // ถ้าเป็นตัวเล็กก็ให้แปลงข้อมูล
      if (number === "") {
        value = Number(value);
        if (isNaN(value)) throw "กรุณาใส่ค่าที่เป็นตัวเลขด้วย";
      }
      console.log("model=>", e.currentTarget);
      console.log(this.data);
      // console.log(name, value);

      // var form = this.data;
      // this.data2.firstName =  this.cloneData(value)
      this.data[name] = this.cloneData(value);
      // this.data = this.cloneData(form)
      // this.renderComplete()
      // this.setState(form);
    }
    // สั่งโพกัส
    // on-focus="${e => this._setSeleteValue(e)}"
    _formSetSeleteValue(e) {
      let value = e.target;
      value.select();
    }
    cloneData(data) {
      if (typeof data !== "undefined" && data !== "undefined") {
        return JSON.parse(JSON.stringify(data));
      }
    }
  };

// export { FormMixin }
export const FormMixin = dedupingMixin(FormMixinClass);
