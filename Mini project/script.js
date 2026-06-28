(async function productListing() {
    let main=document.querySelector("main");
    let products=[];
    let url=" https://dummyjson.com/products?limit=194"
    let apiRes=await fetch(url)
    let productData=await apiRes.json();

    products=[...productData.products]

    products.map((el)=>{
        let linkingPage=document.createElement("a")
    let outerDiv=document.createElement("div")
    let heading=document.createElement("h2")
    let image=document.createElement("img")
    let description=document.createElement("p")

    let price_cart=document.createElement("div")
    let price=document.createElement("p")
    let cart=document.createElement("button")

    heading.innerText=el.title
    image.src=el.thumbnail
    description.innerText=el.description
    price.innerText = `Rs ${Math.ceil(el.price * 95)}/-`;
    cart.innerText="Add To Cart"
    cart.onclick = function (e) {
    e.preventDefault();

    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    cartItems.push(el);

    localStorage.setItem("cart", JSON.stringify(cartItems));

    alert("Product Added Successfully");
}
   

    outerDiv.classList.add("outerDiv")
     image.style.width="300px"

     price_cart.style.display="flex"
     price_cart.style.gap="160px"
     price_cart.style.alignItems="center"

     cart.style.padding="15px 20px";
     cart.style.backgroundColor="black"
     cart.style.color="white"
     cart.style.fontWeight="bolder"
     cart.style.border="none"

    price_cart.append(price,cart)
    outerDiv.append(heading,image,description,price_cart)
    linkingPage.append(outerDiv);

    linkingPage.style.textDecoration="none"
    linkingPage.style.color="black"

    linkingPage.href=`ProductDetail.html?id=${el.id}`;

    console.log(el.id);
console.log(linkingPage.href);

    
    main.append(linkingPage);
    })
    
})();
