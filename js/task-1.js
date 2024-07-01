// Знаходимо всі елементи li з класом "item" всередині ul з id "categories"
const categories = document.querySelectorAll('#categories .item')

// Виводимо кількість категорій
console.log('Кількість категорій:', categories.length)

// Проходимося по кожній категорії
categories.forEach(category => {
    // Знаходимо заголовок категорії (тег h2) і виводимо його текст
    const title = category.querySelector('h2').textContent

    // Знаходимо всі елементи li всередині поточної категорії та рахуємо їх
    const itemsCount = category.querySelectorAll('ul li').length

    // Виводимо інформацію про категорію
    console.log(`Категорія: ${title}`)
    console.log(`Кількість елементів: ${itemsCount}`)
})