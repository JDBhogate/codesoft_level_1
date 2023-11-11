document.addEventListener("DOMContentLoaded", function () {
    const result = document.getElementById("result");
    let input = "";

    document.querySelectorAll(".number, .operator").forEach(function (element) {
        element.addEventListener("click", function () {
            if (element.id === "clear") {
                input = "";
            } else if (element.id === "equals") {
                try {
                    input = eval(input);
                } catch (error) {
                    input = "Error";
                }
            } else {
                input += element.innerText;
            }
            result.value = input;
        });
    });
});
