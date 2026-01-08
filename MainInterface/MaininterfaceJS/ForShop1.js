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

function OpenMainShopWindow1() {
    const MainBackgroundBlurShop = document.getElementById('MainBackgroundBlurShop');
    const ProductMainWindow = document.getElementById('ProductMainWindow');
    const ProductLoadingScreen = document.getElementById('LoadingProductInfoPanel');
    const ProductPanel1 = document.getElementById('MainPanelProductInfo1');
    MainBackgroundBlurShop.style.display = "block";
    ProductMainWindow.style.display = "block";
    ProductLoadingScreen.style.display = "block";
    

    setTimeout(() => {
        ProductLoadingScreen.style.opacity = "1";
        ProductLoadingScreen.style.transition = "all 0.3s ease-out";
        MainBackgroundBlurShop.style.opacity = "1";
        MainBackgroundBlurShop.style.transition = "all 0.3s ease-out";
        ProductMainWindow.style.opacity = "1";
        ProductMainWindow.style.scale = "1";
        ProductMainWindow.style.transition = "all 0.3s cubic-bezier(0,-0.08,0,1)";  
        ProductPanel1.style.display = "block";
    }, 100);

    setTimeout(() => {
            ProductLoadingScreen.style.opacity = "0";
            ProductLoadingScreen.style.transition = "all 0.3s ease-out";
            ProductPanel1.style.display = "block";
            ProductPanel1.style.transition = "all 0.3s ease-out";
            ProductPanel1.style.opacity = "1";
    }, 1500); 
    
    setTimeout(() => {
            ProductPanel1.style.transition = "all 0.3s ease-out";
            ProductPanel1.style.opacity = "1";
    }, 1600); 
}

function OpenMainShopWindow2() {
    const MainBackgroundBlurShop = document.getElementById('MainBackgroundBlurShop');
    const ProductMainWindow = document.getElementById('ProductMainWindow');
    const ProductLoadingScreen = document.getElementById('LoadingProductInfoPanel');
    const ProductPanel2 = document.getElementById('MainPanelProductInfo2');
    MainBackgroundBlurShop.style.display = "block";
    ProductMainWindow.style.display = "block";
    ProductLoadingScreen.style.display = "block";
    

    setTimeout(() => {
        ProductLoadingScreen.style.opacity = "1";
        ProductLoadingScreen.style.transition = "all 0.3s ease-out";
        MainBackgroundBlurShop.style.opacity = "1";
        MainBackgroundBlurShop.style.transition = "all 0.3s ease-out";
        ProductMainWindow.style.opacity = "1";
        ProductMainWindow.style.scale = "1";
        ProductMainWindow.style.transition = "all 0.3s cubic-bezier(0,-0.08,0,1)";  
        ProductPanel2.style.display = "block";
    }, 100);

    setTimeout(() => {
            ProductLoadingScreen.style.opacity = "0";
            ProductLoadingScreen.style.transition = "all 0.3s ease-out";
            ProductPanel2.style.display = "block";
            ProductPanel2.style.transition = "all 0.3s ease-out";
            ProductPanel2.style.opacity = "1";
    }, 1500); 
    
    setTimeout(() => {
            ProductPanel2.style.transition = "all 0.3s ease-out";
            ProductPanel2.style.opacity = "1";
    }, 1600); 
}

function OpenMainShopWindow6() {
    const MainBackgroundBlurShop = document.getElementById('MainBackgroundBlurShop');
    const ProductMainWindow = document.getElementById('ProductMainWindow');
    const ProductLoadingScreen = document.getElementById('LoadingProductInfoPanel');
    const ProductPanel6 = document.getElementById('MainPanelProductInfo2');
    MainBackgroundBlurShop.style.display = "block";
    ProductMainWindow.style.display = "block";
    ProductLoadingScreen.style.display = "block";
    

    setTimeout(() => {
        ProductLoadingScreen.style.opacity = "1";
        ProductLoadingScreen.style.transition = "all 0.3s ease-out";
        MainBackgroundBlurShop.style.opacity = "1";
        MainBackgroundBlurShop.style.transition = "all 0.3s ease-out";
        ProductMainWindow.style.opacity = "1";
        ProductMainWindow.style.scale = "1";
        ProductMainWindow.style.transition = "all 0.3s cubic-bezier(0,-0.08,0,1)";  
        ProductPanel6.style.display = "block";
    }, 100);

    setTimeout(() => {
            ProductLoadingScreen.style.opacity = "0";
            ProductLoadingScreen.style.transition = "all 0.3s ease-out";
            ProductPanel6.style.display = "block";
            ProductPanel6.style.transition = "all 0.3s ease-out";
            ProductPanel6.style.opacity = "1";
    }, 1500); 
    
    setTimeout(() => {
            ProductPanel6.style.transition = "all 0.3s ease-out";
            ProductPanel6.style.opacity = "1";
    }, 1600); 
}

function CloseMainShopWindow() {
    const MainBackgroundBlurShop = document.getElementById('MainBackgroundBlurShop');
    const ProductMainWindow = document.getElementById('ProductMainWindow');
    const ProductPanel1 = document.getElementById('MainPanelProductInfo1');
    const ProductPanel2 = document.getElementById('MainPanelProductInfo2');
        MainBackgroundBlurShop.style.opacity = "0";
        MainBackgroundBlurShop.style.transition = "all 0.3s ease-out";
        ProductMainWindow.style.opacity = "0";
        ProductMainWindow.style.scale = "0.6";
        ProductMainWindow.style.transition = "all 0.3s cubic-bezier(0,-0.08,0,1)";
        ProductPanel1.style.opacity = "0";
        ProductPanel1.style.transition = "all 0.3s ease-out";
        ProductPanel2.style.opacity = "0";
        ProductPanel2.style.transition = "all 0.3s ease-out";
        ProductPanel1.style.display = "none";
        ProductPanel2.style.display = "none";
    setTimeout(() => {
        MainBackgroundBlurShop.style.display = "none";
        ProductMainWindow.style.display = "none";
        ProductPanel1.style.display = "none";
        ProductPanel2.style.display = "none";
    }, 400);
}