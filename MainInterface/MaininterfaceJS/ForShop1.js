// For Opening the main product overview //

function OpenCloseMoreOptions() {
    const menu = document.getElementById('MoreOptionMenuWindow');
    const button1 = document.getElementById('OptionMenu1');
    const button2 = document.getElementById('OptionMenu2');
    const button3 = document.getElementById('OptionMenu3');
    const button4 = document.getElementById('OptionMenu4');
    
    const currentDisplay = window.getComputedStyle(menu).display;

    if (currentDisplay === "none") {
        menu.style.display = "grid"; 
        setTimeout(() => {
            menu.style.opacity = "1";
            menu.classList.remove('is-close');
            menu.classList.add('is-open');
            setTimeout(() => {
                button1.style.scale = "1";
                button1.style.opacity = "1";
                button1.style.transition = "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);";
                setTimeout(() => {
                    button2.style.scale = "1";
                    button2.style.opacity = "1";
                    button2.style.transition = "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
                    setTimeout(() => {
                        button3.style.scale = "1";
                        button3.style.opacity = "1";
                        button3.style.transition = "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
                        setTimeout(() => {
                            button4.style.scale = "1";
                            button4.style.opacity = "1";
                            button4.style.transition = "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
                        }, 50);
                    }, 50);
                }, 50);
            }, 250);
        }, 1);
    } else {
        menu.classList.remove('is-open');
        menu.classList.add('is-close');
        button1.style.opacity = "0";
        button1.style.transition = "all 0.1s ease-out";
        button2.style.opacity = "0";
        button2.style.transition = "all 0.1s ease-out";
        button3.style.opacity = "0";
        button3.style.transition = "all 0.1s ease-out";
        button4.style.opacity = "0";
        button4.style.transition = "all 0.1s ease-out";
        button1.style.scale = "0.5";
        button2.style.scale = "0.5";
        button3.style.scale = "0.5";
        button4.style.scale = "0.5";
        setTimeout(() => {
            menu.style.opacity = "0";
            menu.style.display = "none";
        }, 400);
    }
}

function OpenMainShopWindow() {
    const MainBackgroundBlurShop = document.getElementById('MainBackgroundBlurShop');
    const ProductMainWindow = document.getElementById('ProductMainWindow');
    MainBackgroundBlurShop.style.display = "block";
    ProductMainWindow.style.display = "block";

    

    setTimeout(() => {
        MainBackgroundBlurShop.style.opacity = "1";
        MainBackgroundBlurShop.style.transition = "all 0.3s ease-out";
        ProductMainWindow.style.opacity = "1";
        ProductMainWindow.style.scale = "1";
        ProductMainWindow.style.transition = "all 0.3s cubic-bezier(0,-0.08,0,1)";
    }, 100);
}

function CloseMainShopWindow() {
    const MainBackgroundBlurShop = document.getElementById('MainBackgroundBlurShop');
    const ProductMainWindow = document.getElementById('ProductMainWindow');
        MainBackgroundBlurShop.style.opacity = "0";
        MainBackgroundBlurShop.style.transition = "all 0.3s ease-out";
        ProductMainWindow.style.opacity = "0";
        ProductMainWindow.style.scale = "0.6";
        ProductMainWindow.style.transition = "all 0.3s cubic-bezier(0,-0.08,0,1)";

    setTimeout(() => {
        MainBackgroundBlurShop.style.display = "none";
        ProductMainWindow.style.display = "none";
    }, 400);
}