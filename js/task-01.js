const selectedCategories = document.querySelectorAll('.item');
console.log(`В списке ${selectedCategories.length} категории.`);

document.querySelectorAll('.item h2').forEach(num => 
  console.log(`Категория: ${num.textContent} 
  Количество элементов: ${num.nextElementSibling.children.length}`));