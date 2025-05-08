let proName = document.getElementById('eqp-name');
let category = document.getElementById('category');
let price = document.getElementById('price');
let qt = document.getElementById('qt');
let createBtn = document.getElementById('create-btn');
let editBtn = document.getElementById('edit');
let deleteBtn = document.getElementById('delete');


function clearData(){
   proName.value = '';
   category.value = '';
   price.value = '';
   qt.value = '';
};




let product;
if(localStorage.prodInfo != null){
   product = JSON.parse(localStorage.prodInfo);
}else{
   product = [];
};


function createProduct(){
      let productInfo = {
       Name: proName.value,
       Category: category.value,
       Price: price.value,
       Qauntity: qt.value,
      }
   product.push(productInfo);
   localStorage.setItem("prodInfo", JSON.stringify(product));
   }



function usingInfo(){
   let table = '';
   
   for(let i = 0; i < product.length; i++){
      table += `
      <tr>
          <td>${product[i].Name}</td>
          <td>${product[i].Category}</td>
          <td>${product[i].Qauntity}</td>
          <td>${product[i].Price}</td>
          <td class="table-btn"><button id="edit">Edit</button></td>
          <td class="table-btn"><button id="delete">Delete</button></td>
      </tr>
      `
   }





   document.getElementById('tbody').innerHTML = table;
}

createBtn.onclick = function(){
   if(category.value != '' && price.value != '' && qt.value != '' && category.value != ''){
     createProduct();
   }else{
      alert('please Complete The Informations');
   };
   clearData();
   usingInfo();
   
};
usingInfo();
