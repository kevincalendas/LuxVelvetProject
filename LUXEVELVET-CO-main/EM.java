const products = [
    { name: "Celestial Bunny Crochet", price: 120, cat: "Plushies", desc: "Hand-stitched milk cotton bunny.", img: "https://images.unsplash.com/photo-1620750175514-666340326e5a?auto=format&fit=crop&q=80&w=600" },
    { name: "Sunflower Coaster Crochet", price: 35, cat: "Flowers", desc: "A sunny spot for your coffee.", img: "https://images.unsplash.com/photo-1597484662317-9bd7732dfad6?auto=format&fit=crop&q=80&w=600" },
    { name: "Pocket Bear Crochet", price: 45, cat: "Keychain", desc: "The smallest traveling companion.", img: "https://images.unsplash.com/photo-1559461678-8c434d271988?auto=format&fit=crop&q=80&w=600" },
    { name: "Mushroom Charm Crochet", price: 25, cat: "Keychain", desc: "Forest-inspired keychain.", img: "https://images.unsplash.com/photo-1534433856889-da596272f79d?auto=format&fit=crop&q=80&w=600" },
];

let cart = [];

function login() {
    const u = document.getElementById('username').value;
    const p = document.getElementById('password').value;
    if(u.trim() !== "" && p.trim() !== "") {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        document.getElementById('chat-trigger').style.display = 'flex';
        document.getElementById('cart-btn').style.display = 'block';
        document.querySelector('footer').style.display = 'grid';
        document.querySelector('.newsletter-section').style.display = 'block';
        document.getElementById('user-display').innerText = u.toUpperCase();
        render(products);
    } else {
        document.getElementById('error-msg').style.display = 'block';
    }
}

function render(data) {
    const list = document.getElementById('product-list');
    list.innerHTML = data.map(p => `
        <div class="product-card">
            <div class="product-img-box">
                <img src="${p.img}" alt="${p.name}">
                <div class="hover-info">
                    <p style="font-size:13px; margin-bottom:12px;">${p.desc}</p>
                    <button class="btn-action" onclick="addToBag('${p.name}')">Add to Bag</button>
                </div>
            </div>
            <div style="padding:20px; text-align:center;">
                <b>${p.name}</b><br>
                <small style="color:var(--primary); font-weight:bold;">₱${p.price}.00</small>
            </div>
        </div>
    `).join('');
}

function filterItems(cat, btn) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    render(cat === 'All' ? products : products.filter(p => p.cat === cat));
}

function addToBag(name) {
    const p = products.find(x => x.name === name);
    cart.push(p);
    document.getElementById('count').innerText = cart.length;
    alert(`${name} added to bag! ✨`);
}

function toggleCart(show) {
    if(show) {
        const box = document.getElementById('cart-content');
        let total = 0;
        box.innerHTML = cart.length === 0 ? '<p style="text-align:center; opacity:0.5; margin-top:50px;">Bag is empty</p>' : 
        cart.map((item, i) => {
            total += item.price;
            return `<div style="margin-bottom:15px; border-bottom:1px solid var(--border); padding-bottom:10px; display:flex; justify-content:space-between;">
                <b>${item.name}</b> 
                <span>₱${item.price} <button onclick="remove(${i})" style="color:red; border:none; background:none; cursor:pointer;">✕</button></span>
            </div>`;
        }).join('');
        document.getElementById('total-val').innerText = "₱" + total;
    }
    document.getElementById('cart-modal').style.display = show ? 'flex' : 'none';
}

function remove(i) { 
    cart.splice(i, 1); 
    document.getElementById('count').innerText = cart.length; 
    toggleCart(true); 
}

function checkout() { 
    if(cart.length === 0) return alert("Your bag is empty!");
    document.getElementById('cart-modal').style.display = 'none'; 
    document.getElementById('receipt-modal').style.display = 'flex'; 
}

function closeReceipt() { 
    cart = []; 
    document.getElementById('count').innerText = "0"; 
    document.getElementById('receipt-modal').style.display = 'none'; 
}

function toggleTheme() { 
    const b = document.body; 
    b.getAttribute('data-theme') === 'dark' ? b.removeAttribute('data-theme') : b.setAttribute('data-theme', 'dark'); 
}

function toggleChat() { 
    alert("Connecting to Artisan Support... 🧶"); 
}

function scrollToStore() { 
    document.getElementById('shop-section').scrollIntoView({behavior: 'smooth'}); 
}