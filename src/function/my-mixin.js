/*
 * This mixin does something really complicated.
 * @polymer
 * @mixinFunction
 *
MyNamespace.ReallyComplicatedMixin = Polymer.dedupingMixin((superclass) =>

   // do some other stuff before creating the class...
   ...

  /*
   * @polymer
   * @mixinClass
   */

let Mixin = (superclass) => new MixinBuilder(superclass);
class MixinBuilder {
    constructor(superclass) {
        this.superclass = superclass;
    }

    with(...mixins) {
        return mixins.reduce((c, mixin) => mixin(c), this.superclass);
    }
}

const MyMixin = subclass => class extends subclass {
    _test() {
        console.log('MyMixin');
        // return 'MyMixin'
    }
}

const MyMixinTwo = subClass => class extends subClass {
    _testTwo() {
        console.log('MyMixinTwo');
        // return 'MyMixinTwo'
    }
}
const MyMixinThree = subClass => class extends subClass {
    _testThree() {
        // console.log('MyMixinTwo');
        return 'MyMixinThree'
    }
}
export { Mixin, MyMixin, MyMixinTwo, MyMixinThree }