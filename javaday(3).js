const products = [
    {
      productName: "Smartwatch",
      price: 149.99,
      description: "This is description 1",
      imageUrl: "https://www.junaidjamshed.com/media/wysiwyg/fs117.jpg"
    },
    {
      productName: "Wireless ",
      price: 89.95,
      description: "This is description 2",
      imageUrl: "https://www.junaidjamshed.com/media/wysiwyg/fs117.jpg"
    },
    {
      productName: "Laptop ",
      price: 999.00,
      description: "This is description 3",
      imageUrl: "https://www.junaidjamshed.com/media/wysiwyg/fs117.jpg"
    },
    {
      productName: "Organic",
      price: 12.49,
      description: "This is description 4",
      imageUrl: "https://www.junaidjamshed.com/media/wysiwyg/fs117.jpg"
    },
    {
      productName: "Fitness ",
      price: 69.99,
      description: "This is description 5",
      imageUrl: "https://www.junaidjamshed.com/media/wysiwyg/fs117.jpg"
    },
    {
        productName: "Smartwatch ",
        price: 149.99,
        description: "This is description 6",
        imageUrl: "https://www.junaidjamshed.com/media/wysiwyg/fs117.jpg"
      },
      {
        productName: "Wireless ",
        price: 89.95,
        description: "This is description 7",
        imageUrl: "https://www.junaidjamshed.com/media/wysiwyg/fs117.jpg"
      },
      {
        productName: "Laptop ",
        price: 999.00,
        description: "This is description 8",
        imageUrl: "https://www.junaidjamshed.com/media/wysiwyg/fs117.jpg"
      },
      {
        productName: "Organic ",
        price: 12.49,
        description: "This is description 9",
        imageUrl: "https://www.junaidjamshed.com/media/wysiwyg/fs117.jpg"
      },
      {
        productName: "Fitness ",
        price: 69.99,
        description: "This is description 10",
        imageUrl: "https://www.junaidjamshed.com/media/wysiwyg/fs117.jpg"
      },
      {
        productName: "Smartwatch ",
        price: 149.99,
        description: "This is description 11",
        imageUrl: "https://www.junaidjamshed.com/media/wysiwyg/fs117.jpg"
      },
      {
        productName: "Wireless ",
        price: 89.95,
        description: "This is description 12",
        imageUrl: "https://www.junaidjamshed.com/media/wysiwyg/fs117.jpg"
      },
      {
        productName: "Laptop ",
        price: 999.00,
        description: "This is description 13",
        imageUrl: "https://www.junaidjamshed.com/media/wysiwyg/fs117.jpg"
      },
      {
        productName: "Organic ",
        price: 12.49,
        description: "This is description 14",
        imageUrl: "https://www.junaidjamshed.com/media/wysiwyg/fs117.jpg"
      },
      {
        productName: "Fitness ",
        price: 69.99,
        description: "This is description 15",
        imageUrl: "https://www.junaidjamshed.com/media/wysiwyg/fs117.jpg"
      }
  ];
  const grid=document.querySelector("#contanieer")
const pdesign=[]
  
for(let i=0; i<products.length; i++){
   let item=products[i];
   const template=`<div class="bg-white shadow-xl">
  <div class="h-64 overflow-hidden">
    <img src="${item.imageUrl}">
  </div>
  <div class="p-4">
   <p class="text-2xl">${item.productName}</p>
   <p class="text-red-600">${item.price}</p>
   <p class="text-gray-600">${item.description}</p>
   <button class="bg-red-600 text-white rounded-xl text-sm w-full p-2 mt-2">Add to Cart</button>
  </div>
</div>`
  
pdesign.push(template);
}
grid.innerHTML=pdesign.join("")