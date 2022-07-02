function formatCurrency(num) {
    return num.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
}


export default formatCurrency;