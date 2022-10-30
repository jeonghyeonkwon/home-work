import View from "./View.js";

const tag = "[FormView]";
const CoinView = Object.create(View);

CoinView.setup = function (el) {
    this.init(el);
    console.log(tag, "init()");
    this.plusBtn = el.querySelector("#plus-btn");
    this.minusBtn = el.querySelector("#minus-btn");
    this.coinForm = el.querySelector(".coin-count-group");
    this.bindEvents();
    this.inputBinding();
    return this;
};

CoinView.bindEvents = function () {
    this.plusBtn.addEventListener("click", (e) => {
        this.onClickPlus();
    });
    this.minusBtn.addEventListener("click", (e) => {
        this.onClickMinus();
    });
};

CoinView.onClickPlus = function () {
    let nodeArr = Array.from(this.el.querySelectorAll(".coin-count-group"));
    console.log(nodeArr.length);
    this.renderForm();
};

CoinView.renderForm = function () {
    const coinTemplate = `
    <div class="coin-count-group">
      <input type="text" class="coin-input" value="0" />
      <input type="text" class="count-input" value="0" />
    </div>
`;
    this.coinForm.insertAdjacentHTML("beforeend", coinTemplate);
    this.inputBinding();
};

CoinView.onClickMinus = function () {
    let nodeArr = Array.from(this.el.querySelectorAll(".coin-count-group"));
    console.log(nodeArr.length);
    if (nodeArr.length !== 1) {
        nodeArr[nodeArr.length - 1].remove();
    }
};

CoinView.inputBinding = function () {
    Array.from(this.coinForm.querySelectorAll("[type=text]")).forEach((obj) => {
        obj.removeEventListener("keyup", (e) => this.onKeyup(e, obj));
    });
    Array.from(this.coinForm.querySelectorAll("[type=text]")).forEach((obj) => {
        obj.addEventListener("keyup", (e) => this.onKeyup(e, obj));
    });
};
CoinView.onKeyup = function (e, obj) {
    const regex = /[^0-9]/g;

    obj.value = Number(obj.value.replace(regex, "")).toLocaleString();
};

CoinView.importValue = function () {
    let arr = new Array();
    const regex = /[^0-9]/g;
    let flag = true;
    Array.from(this.el.querySelectorAll("[type=text]")).forEach((obj) => {
        let num = Number(obj.value.replace(regex, ""));


        if (num === 0) {
            flag = false;
        }

    });
    if (!flag) {
        alert("숫자를 입력해 주세요");

        return [];
    }
    Array.from(this.el.querySelectorAll(".coin-count-group")).forEach(
        (obj, index) => {
            let group = new Object();
            group.coin = Number(
                obj.querySelector(".coin-input").value.replace(regex, "")
            );
            group.count = Number(
                obj.querySelector(".count-input").value.replace(regex, "")
            );

            arr[index] = group;
        }
    );

    return arr;
};
export default CoinView;
