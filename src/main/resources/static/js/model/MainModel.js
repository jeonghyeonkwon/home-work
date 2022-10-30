export const requestApi = async function (money, coin) {
    return await fetch("/api/homework2", {
        method: "POST",
        headers: { "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify({
            money: money,
            form: coin,
        }),
    });
};
