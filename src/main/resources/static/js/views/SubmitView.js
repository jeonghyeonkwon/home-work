import View from "./View.js";
const tag = "ResultView";
const SubmitView = Object.create(View);
SubmitView.setup = function (el) {
    console.log(tag, "init()");
    this.init(el);

    this.submit = el.querySelector("button");
    this.eventBind();
    return this;
};

SubmitView.eventBind = function () {
    this.submit.addEventListener("click", (e) => this.onSubmit());
};

SubmitView.onSubmit = function () {
    this.emit("@submit");
};

export default SubmitView;
