
const categories = document.querySelectorAll('#categories > .item');
console.log('Number of categories:', categories.length);  

categories.forEach(categorie => {
    const navEl = categorie.querySelector('h2').textContent;
    const nav = categorie.querySelectorAll('li')
    console.log(`Category: ${navEl}\nElements: ${nav.length}`);
});
