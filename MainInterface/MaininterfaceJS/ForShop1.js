// For Opening the main product overview //

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