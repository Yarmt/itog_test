function showSelected() {
  const selectedOkrug = document.getElementById('okrug').value;
  const selectedRayon = document.getElementById('rayon').value;
  const selectedType = document.getElementById('type').value;
  const selectedDiscount = document.getElementById('discount').value;

  document.getElementById('selected').textContent = `Выбрано: Округ - ${selectedOkrug}, Район - ${selectedRayon}, Тип - ${selectedType}, Скидка - ${selectedDiscount}`;
}
let enterprises = [];

function addEnterprise() {
  const name = document.getElementById('name').value;
  const type = document.getElementById('type').value;
  const district = document.getElementById('district').value;
  const okrug = document.getElementById('okrug').value;

  enterprises.push({ name, type, district, okrug });
  displayEnterprises(enterprises);
}

function filterEnterprises() {
  const selectedType = document.getElementById('typeFilter').value;
  if (selectedType === 'all') {
    displayEnterprises(enterprises);
  } else {
    const filteredEnterprises = enterprises.filter(enterprise => enterprise.type === selectedType);
    displayEnterprises(filteredEnterprises);
  }
}

function displayEnterprises(enterpriseList) {
  const table = document.getElementById('enterpriseTable');
  enterpriseList.forEach(enterprise => {
    const row = table.insertRow(-1);
    const nameCell = row.insertCell(0);
    const typeCell = row.insertCell(1);
    const districtCell = row.insertCell(2);
    const okrugCell = row.insertCell(3);
    nameCell.innerHTML = enterprise.name;
    typeCell.innerHTML = enterprise.type;
    districtCell.innerHTML = enterprise.district;
    okrugCell.innerHTML = enterprise.okrug;
  });
}


function showAlert(message) {
    const alert = document.createElement('div');
    alert.style.display = 'none';
    alert.style.backgroundColor = '#f0f0f0';
    alert.style.border = '1px solid #ddd';
    alert.style.padding = '20px';
    alert.style.margin = '20px';
    alert.textContent = message;
    alert.style.position = 'absolute';
    alert.style.left = '50%';
    alert.style.top = '50%';
    alert.style.transform = 'translate(-50%, -50%)';
  
    document.body.appendChild(alert);
  
    setTimeout(() => {
      alert.style.display = 'none';
    }, 30000);
  }
  document.getElementById('cart-image').addEventListener('click', function() {
    alert('Аллерты работают.');
  });