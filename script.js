function checkWebsite() {
    let url = document.getElementById("urlInput").value;
    let result = document.getElementById("result");

    if (url === "") {
        result.style.color = "red";
        result.innerHTML = "❌ Please enter a URL";
        return;
    }

    let trustedSites = ["amazon", "flipkart", "myntra", "ajio", "snapdeal"];
    let isTrusted = false;

    for (let site of trustedSites) {
        if (url.includes(site)) {
            isTrusted = true;
            break;
        }
    }

    if (url.startsWith("https://") && url.length < 100 && !url.includes("@")) {
        if (isTrusted) {
            result.style.color = "green";
            result.innerHTML = "✅ This looks like a REAL shopping website";
        } else {
            result.style.color = "orange";
            result.innerHTML = "⚠️ Website looks suspicious. Verify carefully!";
        }
    } else {
        result.style.color = "red";
        result.innerHTML = "❌ This is likely a FAKE website";
    }
}
