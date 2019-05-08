class options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv() {
        let divForText = document.createElement('div');
        document.body.appendChild(divForText);
        divForText.textContent = 'С Днем Победы!';
        divForText.style.cssText = `height: ${this.height};
                                    width: ${this.width};
                                    background: ${this.bg};
                                    font-size: ${this.fontSize};
                                    text-align: ${this.textAlign};`;
    }
    
}

const newText = new options ('100px', '300px', 'orange', '15pt', 'center');
const newText2 = new options ('100px', '300px', 'black', '15pt', 'center');
const newText3 = new options ('100px', '300px', 'orange', '15pt', 'center');
newText.createDiv();
newText2.createDiv();
newText3.createDiv();