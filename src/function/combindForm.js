// import { html } from "@polymer/lit-element";
import { directive } from "lit-html";

export default (options = {}) => {
  const { form, prop } = options;
  console.log("form=>", form, "prop=>", prop);

  let fn = component => {
    console.log("component", component);
    // console.log("part", part);
    let fun = ({
        c: 'ฝากหน่อยละ2',
        handleChange : event => {
            console.log(event.currentTarget.value);
          },
    })
    return component(fun);
  };
  //   let fn = component =>
  //     directive(part => {
  //       console.log("component", component);
  //       console.log("part", part);

  //       return component;
  //     });
  return fn;
};
