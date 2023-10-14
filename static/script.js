document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    let drawing = false;

    canvas.addEventListener("mousedown", () => {
        drawing = true;
    });

    canvas.addEventListener("mouseup", () => {
        drawing = false;
        ctx.beginPath();
    });

    canvas.addEventListener("mousemove", (e) => {
        if (!drawing) return;

        ctx.lineWidth = 10;
        ctx.lineCap = "round";
        ctx.strokeStyle = "#333";

        ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    });

    document.getElementById("clear").addEventListener("click", () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    canvas.addEventListener("mouseleave", () => {
        drawing = false;
        ctx.beginPath();
    });

    // Convert the canvas data to a comma-separated string and set it as the value of the hidden input field
    document.querySelector("form").addEventListener("submit", () => {
        const imageData = canvas.toDataURL("image/png").replace("data:image/png;base64,", "");
        document.getElementById("image").value = imageData;
    });
});