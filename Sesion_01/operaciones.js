const operaciones = {};

function suma(n1, n2) {
    return n1 + n2;
}
function resta(n1, n2) {
    return n1 - n2;
}
function mult(n1, n2) {
    return n1 * n2;
}
function suma(n1, n2) {
    return n1 + n2;
}
function div(n1, n2) {
    if (n2 == 0) {
        console.log('Division por cero... Error!')
    }
    else {
        return n1 / n2;
    }
}

exports.suma = suma;
exports.resta = resta;
exports.mult = mult;
exports.div= div;

