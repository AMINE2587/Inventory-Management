let proName = document.getElementById('eqp-name');
let category = document.getElementById('category');
let price = document.getElementById('price');
let qt = document.getElementById('qt');
let createBtn = document.getElementById('create-btn');
let container = document.getElementById('container');
let editContainer = document.getElementById('edit-container');
let editName = document.getElementById('edit-name');
let categoryEdit = document.getElementById('edit-category');
let prixEdit = document.getElementById('prix-edit');
let qauntityEdit = document.getElementById('quan-edit');
let saveBtn = document.getElementById('save');

let currentIndex = null;

function clearData() {
  proName.value = '';
  category.value = '';
  price.value = '';
  qt.value = '';
}

let product = localStorage.prodInfo ? JSON.parse(localStorage.prodInfo) : [];

function createProduct() {
  let productInfo = {
    Name: proName.value.trim(),
    Category: category.value.trim(),
    Price: price.value.trim(),
    Qauntity: qt.value.trim(),
  };
  product.push(productInfo);
  localStorage.setItem("prodInfo", JSON.stringify(product));
}

function usingInfo() {
  let table = '';
  for (let i = 0; i < product.length; i++) {
    table += `
      <tr>
        <td>${product[i].Name}</td>
        <td>${product[i].Category}</td>
        <td>${product[i].Qauntity}</td>
        <td>${product[i].Price}<span> DH</span></td>
        <td class="table-btn"><button onclick="editItem(${i})">Edit</button></td>
        <td class="table-btn"><button onclick="delItem(${i})">Delete</button></td>
      </tr>
    `;
  }
  document.getElementById('tbody').innerHTML = table;
}

createBtn.onclick = function () {
  if (
    proName.value.trim() !== '' &&
    category.value.trim() !== '' &&
    price.value.trim() !== '' &&
    qt.value.trim() !== ''
  ) {
    createProduct();
    clearData();
    usingInfo();
  } else {
    alert('Please complete all fields');
  }
};

function delItem(i) {
  product.splice(i, 1);
  localStorage.setItem("prodInfo", JSON.stringify(product));
  usingInfo();
}

function editItem(i) {
  currentIndex = i;
  container.style.display = 'none';
  editContainer.style.display = 'block';

  editName.value = product[i].Name;
  categoryEdit.value = product[i].Category;
  prixEdit.value = product[i].Price;
  qauntityEdit.value = product[i].Qauntity;
}

function saveItem(i) {
  if(editName.value.trim() !== '' &&
     categoryEdit.value.trim() !== '' &&
     prixEdit.value.trim() !== '' &&
     qauntityEdit.value.trim() !== ''){
     product[i].Name = editName.value.trim();
     product[i].Category = categoryEdit.value.trim();
     product[i].Price = prixEdit.value.trim();
     product[i].Qauntity = qauntityEdit.value.trim();

     localStorage.setItem("prodInfo", JSON.stringify(product));
     container.style.display = 'block';
     editContainer.style.display = 'none';
     usingInfo();
     }else{
      alert('please complete the infomations');
     };
    usingInfo();
};

saveBtn.onclick = function () {
  if (currentIndex !== null) {
    saveItem(currentIndex);
    clearEdit();
  }
};

function clearEdit() {
  editName.value = '';
  categoryEdit.value = '';
  prixEdit.value = '';
  qauntityEdit.value = '';
}

usingInfo();
