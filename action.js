let buttons = document.getElementsByTagName('button');

let headerButtonSettings = function(){
    const buttonColor = 'blueviolet';
    
    if(this.id === 'gallery-button') {
        this.style.background = buttonColor;
    }
    else if(this.id === 'order-button'){
        
    }
    else if(this.id === 'contact-button'){
        
    }

}

for (var i = 0, len = buttons.length; i < len; i++){
    buttons[i].addEventListener('click', headerButtonSettings);
}

