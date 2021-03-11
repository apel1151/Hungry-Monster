const searchFood = () => {

    const seacrhText = document.getElementById("seacrh-field").value;
    // console.log(seacrhText.value);

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${seacrhText}`

    fetch(url)
        .then(res => res.json())
        .then(data => mealFirstName(data.meals))

}

const mealFirstName = food => {


    const mealsDiv = document.getElementById("mealsDiv");
    mealsDiv.innerHTML = '';

    food.map(function(food) {

        const mealDiv = document.createElement('div');
        mealDiv.className = 'foods';



        mealInfo = `

            <h1>${food.strMeal}</h1>
            <p>${food.strArea}</p>
            <img onclick='showDetails(${food.idMeal})' src = " ${food.strMealThumb}" class= "img" style='width: 300px ; height: 300px'; >


        `

        mealDiv.innerHTML = mealInfo;
        mealsDiv.appendChild(mealDiv);


        const hideAllMeals = document.getElementById("mealsDiv");
        hideAllMeals.style.display = 'grid';

        const showAllMeals = document.getElementById('meal-details');
        showAllMeals.style.display = 'none';
    })







}



const showDetails = idMeal => {

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data.meals[0]));
}


const displayDetails = food => {

    const mealDetails = document.getElementById("meal-details");
    mealDetails.innerHTML = `

    <img src="${food.strMealThumb}" style='width: 300px ; height: 300px'; >
    <h1>${food.strMeal}</h1>
    <h2>Origin: ${food.strArea} </h2>
    
    <h4>Ingredients: ${food.strIngredient1}, ${food.strIngredient2}, ${food.strIngredient3}, ${food.strIngredient4}, ${food.strIngredient5}, ${food.strIngredient6}, ${food.strIngredient7}</h4>
    
     `

    const hideAllMeals = document.getElementById("mealsDiv");
    hideAllMeals.style.display = 'none';

    const showAllMeals = document.getElementById('meal-details');
    showAllMeals.style.display = 'block';

}