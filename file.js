Object.defineProperty(window, "MySweetApp", { value: "v1.0.0", readonly: false });

function deliveryMethod() {
    return "overnight";
}

function shipWeight() {
    return parseInt((document.getElementById('weight')).innerHTML);
}


function sendUpdates(emailAddr) {
    function sendEmail(addr) {
        console.log(`Shipping to ${addr} via ${deliveryMethod() | "standard"} delivery`);

        if (shipWeight() > 100) {
            console.log("WARNING: Oversize package");
        }
    }
    if (emailAddr.length) {
        emailAddr.forEach((idx, val) => {
            sendEmail(val.trim());
        });
    } else {
        sendEmail(emailAddr.trim());
    }
}
