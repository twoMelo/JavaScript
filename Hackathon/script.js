function addItem() {
    const name = document.getElementById('item-name').value.trim();
    const quantity = document.getElementById('item-quantity').value;
    const category = document.getElementById('category').value;
    const quantidade = document.getElementById('quantidade')
  
    if (name === '' || quantity <= 0) {
      alert("Insira um nome válido e quantidade maior que zero.");
      return;
    }
  
    const ul = document.querySelector(`#${category} ul`);
    const li = document.createElement('li');
  
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = () => {
      itemText.classList.toggle('checked');
    };
  
    const itemText = document.createElement('span');
    itemText.textContent = `${name} (x${quantity})`;
    
  
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remover';
    removeBtn.onclick = () => li.remove();
  
    li.appendChild(checkbox);
    li.appendChild(itemText);
    li.appendChild(removeBtn);
    ul.appendChild(li);
  
  
    document.getElementById('item-name').value = '';
    document.getElementById('item-quantity').value = '';
  }
  
  function clearAll() {
    document.querySelectorAll('.category ul').forEach(ul => ul.innerHTML = '');
  }