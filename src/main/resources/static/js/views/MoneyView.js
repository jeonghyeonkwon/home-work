import View from "./View.js";

const tag = "[MoneyView]";

const MoneyView = Object.create(View);
MoneyView.setup = function (el) {
    console.log(tag);
    this.init(el);
    this.inputEl = el.querySelector("[type=text]");

    this.bindEvents();
    return this;
};

MoneyView.bindEvents = function () {
    this.inputEl.addEventListener("keyup", (e) => this.onKeyup(e));
};
MoneyView.onKeyup = function (e) {
    const regex = /[^0-9]/g;
    this.inputEl.value = Number(
        this.inputEl.value.replace(regex, "")
    ).toLocaleString();
};
MoneyView.importValue = function () {
    return this.inputEl.value;
};

export default MoneyView;
