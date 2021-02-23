"use strict";

var root = document.getElementById('root');
var node = {
  name: "kemal",
  surName: "bekcan",
  description: []
};

function onFormSubmit(event) {
  event.preventDefault();
  var item = event.target.elements.txtItem.value;

  if (item) {
    node.description = item;
    event.target.elements.txtItem.value = '';
    render();
  }

  console.log("Form submited");
}

function render() {
  var notlar = [];
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Notlar :"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "Ad : ", node.name), /*#__PURE__*/React.createElement("li", null, "Soyad : ", node.surName), /*#__PURE__*/React.createElement("li", null, node.description.length == 0 ? '' : 'Not :' + node.description)), /*#__PURE__*/React.createElement("form", {
    onSubmit: onFormSubmit
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "txtItem"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Not Ekle")));
  ReactDOM.render(template, root);
}

render();
