import View from "./View.js";
const tag = "ResultView";
const ResultView = Object.create(View);
ResultView.setup = function (el) {
    console.log(tag, "init()");
    this.init(el);

    this.resultEl = el.querySelector(".result-form-content");
    return this;
};

ResultView.render =function (moneyValue,arr = []){
    let template =`<div>총 ${arr.length}가지</div>`
    arr.forEach(method=>{

        template+=`<div> ${moneyValue} = `;
        let entry = Object.entries(method)
            for(const index in entry){
                const [key,value] = entry[index];
                template+=` ${key} x ${value} `

                if(entry.length-1 !== Number(index)) {
                    console.log('추가')
                    console.log('length', entry.length,'index',index)
                    template += ' + ';
                }
            }
            template+=`</div>`;
        }
    );

    this.resultEl.innerHTML = template;

}
export default ResultView;
