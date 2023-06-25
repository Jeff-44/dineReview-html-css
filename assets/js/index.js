let page = window.location.href.split('/').pop();

if(page=="img1.html"){
    document.getElementById('resto-name').innerText="TastyBud Resto";
} else if(page=="img2.html"){
    document.getElementById('resto-name').innerText="Ymmy Flavour";
}else{
    document.getElementById('resto-name').innerText="Kay Ronald";
}