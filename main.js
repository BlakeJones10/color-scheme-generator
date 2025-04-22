const colorPicker = document.getElementById("colorPicker");
const colorScheme = document.getElementById("colorScheme");
const generateBtn = document.getElementById("generateBtn");

generateBtn.addEventListener("click", () => {
    const color = colorPicker.value.slice(1);
    const scheme = colorScheme.value;

    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${scheme}&count=5`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        const colors = data.colors;
        const colorList = document.getElementById("colorList");
        colorList.innerHTML = ""; 

        colors.forEach(color => {
            const colorDiv = document.createElement("div");
            colorDiv.className = "color-item";
            colorDiv.style.backgroundColor = color.hex.value;

            const hexVaule = document.createElement("div");
            hexVaule.className = "hex-value";
            hexVaule.textContent = color.hex.value;

            colorDiv.appendChild(hexVaule);
            colorList.appendChild(colorDiv);
        })
    
    })
});
