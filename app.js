function getres() {
    let total = parseInt(document.getElementById("total").value)
    let obtained = parseInt(document.getElementById("obtained").value)
    if (total < obtained) {
        alert("Enter correct marks !")
    }
    else if(isNaN(total) || isNaN(obtained)){
        alert("Please enter a correct numeric value!")
    }
    else {
        document.getElementById("obt").innerHTML = obtained
        document.getElementById("tot").innerHTML = total
        let percentage = obtained / total * 100
        let roundper = percentage.toFixed(2)
        document.getElementById("per",).innerHTML = roundper + '%'

        if (roundper <= 100 && roundper >= 90) {
            document.getElementById("grade").innerHTML = 'A+'
        } else if (roundper < 90 && roundper > 80) {
            document.getElementById("grade").innerHTML = 'A'
        } else if (roundper < 80 && roundper > 70) {
            document.getElementById("grade",).innerHTML = 'B'
        } else if (roundper < 70) {
            document.getElementById("grade",).innerHTML = 'Better luck next time'
        }
    }
}
function getress() {
    let totall = parseInt(document.getElementById("totall").value)
    let obtainedd = parseInt(document.getElementById("obtainedd").value)
    if (totall < obtainedd) {
        alert("Enter correct marks !")
    }
    else if(isNaN(totall) || isNaN(obtainedd)){
        alert("Please enter a correct numeric value!")
    }
    else {
    document.getElementById("obtt").innerHTML = obtainedd
    document.getElementById("tott").innerHTML = totall
    let percentagee = obtainedd / totall * 100
    let roundperr = percentagee.toFixed(2)
    document.getElementById("perr").innerHTML = roundperr + '%'
    if (roundperr <= 100 && roundperr >= 90) {
        document.getElementById("graide").innerHTML = 'A+'
    } else if (roundperr < 90 && roundperr > 80) {
        document.getElementById("graide").innerHTML = 'A'
    } else if (roundperr < 80 && roundperr > 70) {
        document.getElementById("graide").innerHTML = 'B'
    } else if (roundperr < 70) {
        document.getElementById("graide").innerHTML = 'Better luck next time'
    }
    }
}
// else if (roundper < 70 && roundper > 60) {
//     document.getElementById("grade").innerHTML = 'C'
// } else if (roundper < 60 && roundper > 50) {
//     document.getElementById("grade").innerHTML = 'D'
// } else if (roundper < 50) {
//     document.getElementById("grade").innerHTML = 'Better luck next time'
// }