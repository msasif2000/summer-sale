var totalPrice=0;
function addItemToCart1() {
  const priceText=document.getElementById('price1').innerText;
  const price= parseFloat(priceText);

  //console.log(price);
  setTotalPrice(price);
  entryToCart('K. Accessories');
}
function addItemToCart2() {
  const priceText=document.getElementById('price2').innerText;
  const price= parseFloat(priceText);

  //console.log(price);
  setTotalPrice(price);
  entryToCart('H. Accessories');
  
}
function addItemToCart3() {
    const priceText=document.getElementById('price3').innerText;
    const price= parseFloat(priceText);
  
    //console.log(price);
    setTotalPrice(price);
    entryToCart('Home Cooker');
    
  }
var discount=0;
function setTotalPrice(price){
totalPrice=totalPrice+price;
document.getElementById('total-price').innerText=totalPrice;
if(totalPrice>=200){
     discount = document.getElementById('discount').innerText=totalPrice*0.2;
}
total=totalPrice-discount;
document.getElementById('total').innerText=total;
}


function entryToCart(product){
    const productName=document.getElementById('entryToCart');
    const count=productName.childElementCount;
    const p=document.createElement('p');
    p.classList.add('my-4');
    p.classList.add('font-bold');
    p.innerHTML=`${count+1}. ${product}`;
    productName.appendChild(p);
}
