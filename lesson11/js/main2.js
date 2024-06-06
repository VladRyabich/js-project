//// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
const sectionMenu = document.createElement('section');
sectionMenu.classList.add('section-menu');
document.body.appendChild(sectionMenu);

const menuList = document.createElement('ul');
menuList.classList.add('menu-list');
sectionMenu.appendChild(menuList);
fetch('https://dummyjson.com/recipes')
    .then ((response)=>response.json())
    .then(({recipes})=>{console.log(recipes)
    })
fetch('https://dummyjson.com/recipes')
    .then ((response)=>response.json())
    .then(({recipes})=>{
        for(let description of recipes){
            const dishItem = document.createElement('li');
            dishItem.classList.add('dish-item');
            menuList.appendChild(dishItem);

            const dishInfoBlock = document.createElement('div');
            dishInfoBlock.classList.add('dish-info-block');
            dishInfoBlock.innerHTML=`   <h2 class="id-title">ID: ${description.id}</h2>
                                        <h3 class="dish-title">${description.name}</h3>
                                        <p class="info-text"><span class="info-subtitle">Rating:</span> ${description.rating}</p>
                                        <p class="info-text"><span class="info-subtitle">Cuisine:</span> ${description.cuisine}</p>
                                        <p class="info-text"><span class="info-subtitle">Difficulty:</span> ${description.difficulty}</p>
                                        <p class="info-text"><span class="info-subtitle">Calories per serving:</span> ${description.caloriesPerServing}</p>
                                        <p class="info-text"><span class="info-subtitle">Cook time minutes:</span> ${description.cookTimeMinutes}</p>
                                        <p class="info-text"><span class="info-subtitle">Prep time minutes:</span> ${description.prepTimeMinutes}</p>
                                        <p class="info-text"><span class="info-subtitle">Review count:</span> ${description.reviewCount}</p>
                                        <p class="info-text"><span class="info-subtitle">Servings:</span> ${description.servings}</p>
                                        <p class="info-text"><span class="info-subtitle">User ID:</span> ${description.userId}</p>
                                        <p class="info-text"><span class="info-subtitle">Meal type:</span> ${description.mealType}</p>
                                        <p class="info-text"><span class="info-subtitle">Tags:</span> ${description.tags}</p>`
            dishItem.appendChild(dishInfoBlock);

            const img = document.createElement('img');
            img.classList.add('img');
            img.src=description.image;
            dishInfoBlock.appendChild(img);

            const recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipe-block');
            dishItem.appendChild(recipeDiv);

            const ingredientsTitle = document.createElement('h3');
            ingredientsTitle.classList.add('ingredients-title')
            ingredientsTitle.innerText = 'Ingredients:';

            const ingredientsList = document.createElement('ul');
            ingredientsList.classList.add('ingredients-list');

            for(let iterIngredients of description.ingredients){
                const ingredientItem = document.createElement('li');
                ingredientItem.innerHTML=`${iterIngredients}`
                ingredientsList.appendChild(ingredientItem);
            }

            const instructionsTitle = document.createElement('h3');
            instructionsTitle.classList.add('instructions-title')
            instructionsTitle.innerText = 'Instructions:';

            const instructionsList = document.createElement('ol');
            instructionsList.classList.add('instructions-list');

            for(let iterInstruction of description.instructions){
                const instructionsLi = document.createElement('li');
                instructionsLi.innerHTML=`${iterInstruction}`
                instructionsList.append(instructionsLi)
            }

            recipeDiv.append(ingredientsTitle, ingredientsList, instructionsTitle, instructionsList);
        }
    })