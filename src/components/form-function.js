const FormMixin = subclass => class extends subclass {
    _test() {
        console.log('MyMixin');
        // return 'MyMixin'
    }
    // วิธีใช้
    //<input id="firstName" name="firstName"  on-input="${e => this._formOnInputChange( e)}" >
    // onChange={e => this._formOnInputObject(e)}
    // ถ้าต้องการแปลงค่า จาก string เป้น number ก็ต้องใส่ Attribute number ลงไปด้วย
    _formOnInputObject(e) {
        let name = e.currentTarget.getAttribute('name')
        let number = e.currentTarget.getAttribute('number')
        let value = e.currentTarget.value
        // เช็คว่าใส่ Attribute name ไหม
        if (!name) throw 'ใส่ค่า Attribute name ด้วย';
        // ถ้าเป็นตัวเล็กก็ให้แปลงข้อมูล
        if (number === '') {
            value = Number(value)
            if (isNaN(value)) throw 'กรุณาใส่ค่าที่เป็นตัวเลขด้วย';
        }

        console.log(name, value);

        // var form = this.data;
        // this.data2.firstName =  this.cloneData(value)
        this.data[name] = this.cloneData(value);
        // this.data = this.cloneData(form)
        // this.setState(form);
    }
    // สั่งโพกัส
    // on-focus="${e => this._setSeleteValue(e)}"
    _formSetSeleteValue(e) {
        let value = e.target
        value.select()
    }
    cloneData(data) {
        if (typeof data !== 'undefined' && data !== 'undefined') {
            return JSON.parse(JSON.stringify(data));
        }
    }
}


export { FormMixin }