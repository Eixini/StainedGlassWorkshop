let buttons = document.getElementsByTagName('button');

let headerButtonSettings = function(){
    
    if(this.id === 'main-button') {
        this.style.background = 'blueviolet';
        window.open('index.hmtl');
    }
    if(this.id === 'gallery-button') {
        this.style.background = 'blueviolet';
        this.window.open('./gallery.hmtl');
    }
    else if(this.id === 'order-button'){
        this.style.background = 'blueviolet';
        window.open('order.hmtl');
    }
    else if(this.id === 'contact-button'){
        this.style.background = 'blueviolet';
        window.open('contacts.hmtl');
    }

}

for (var i = 0, len = 3; i < len; i++){
    buttons[i].addEventListener('click', headerButtonSettings);
}

