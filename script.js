
function toggleReadMore(){
    var btnText = this;
    var moreText = btnText.previousElementSibling;
    if (
        moreText.style.display === "none" ||
        moreText.style.display === ""
    ) {
        moreText.style.display = "inline";
        btnText.innerHTML = "Read Lees <<<";
        btnText.style.color = "green";
    } else {
        moreText.style.display = "none";
        btnText.innerHTML = "Read More >>>";
        btnText.style.color = "peru";
    }
}

//Set initial state on page load
window.onload = function () {
    // document.getElementById("moreText").style.display = "none";

    var moreTexts = document.querySelectorAll(".moreText");
    var readMOreBtns = document.querySelectorAll(".readMore");

    moreTexts.forEach(function (moreText) {
        moreText.style.display = "none";
    });

    readMOreBtns.forEach(function (btn) {
        btn.addEventListener("click", toggleReadMore);
    });
};

