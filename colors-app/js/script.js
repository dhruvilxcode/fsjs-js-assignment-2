const colors = document.querySelectorAll(".color");
const alerty = document.querySelector(".alert");

colors.forEach((color)=>{
    color.addEventListener('click', function() {
        // get the color
        const rgbColor = this.style.backgroundColor;
        
        const rgbColors = rgbColor
                .split("(")[1]
                .split(")")[0]
                .split(",");
        
        const rgbToHex = rgbColors.map((c)=>{
            c = parseInt(c).toString(16);
            return c.length === 1 ? "0" + c : c;
        });

        const hexColor = "#" + rgbToHex.join("");

        navigator.clipboard.writeText(hexColor);

        alerty.style.display = "block";
        // hide the alert after 4s
        setTimeout(()=>{
            alerty.style.display = "none";
        }, 3000);
    })
});