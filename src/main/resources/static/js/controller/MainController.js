import MoneyView from "../views/MoneyView.js";
import CoinView from "../views/CoinView.js";
import ResultView from "../views/ResultView.js";
import SubmitView from "../views/SubmitView.js";
import { requestApi } from "../model/MainModel.js";
const tag = "[MainController]";

export default {
    init() {
        console.log(tag, "init()");
        MoneyView.setup(document.querySelector(".money-form"));
        CoinView.setup(document.querySelector(".coin-form"));
        SubmitView.setup(document.querySelector(".submit-form")).on(
            "@submit",
            (e) => this.onSubmit()
        );
        ResultView.setup(document.querySelector(".result-form"));
    },
    onSubmit() {
        const regex = /[^0-9]/g;
        console.log("submit");
        const moneyValue = Number(MoneyView.importValue().replace(regex, ""));
        if (moneyValue === 0) {
            alert("숫자를 입력해 주세요");
            return;
        }
        if(moneyValue>10000){
            alert("10000이하의 수를 입력해 주세요")
            return ;
        }
        console.log(moneyValue);
        const coinArrValue = CoinView.importValue();
        if (coinArrValue.length === 0) {
            return;
        }

        const res = requestApi(moneyValue, coinArrValue);
        res.then(response=>response.json()).then(arr=>
         ResultView.render(moneyValue,arr)
        );
    },
};
