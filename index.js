fetch("https://api.spacexdata.com/v4/launches/")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then((data) => {
    console.log(data);
    displayRecord(data);
  })
  .catch((error) => console.error("FETCH ERROR:", error));

function displayRecord(data) {
  //   const cocktailIngredients = document.createElement("ul");

  const list = document.getElementById("list-container");
  const listItems = document.createElement("ul");
  list.appendChild(listItems);
  data.map((record, i) => {
    // console.log(i.success);
    if (i < 10) {
      listItem = document.createElement("li");
      listItemArticle = document.createElement("article");
      listItemArticleImage = document.createElement("img");
      listItemArticleDetails = document.createElement("div");
      listItemArticleDetails.classList.add("details");
      listItemArticleImage.src = record.links.patch.small;
      //   listItem.innerHTML = record.links.patch.small;
      listItemArticle.appendChild(listItemArticleImage);
      listItemArticle.appendChild(listItemArticleDetails);
      listItem.appendChild(listItemArticle);
      listItems.appendChild(listItem);
    }
  });

  //   for (let datas in data) {
  //     console.log(datas);
  // const list = document.getElementById("list-container");

  // const listItems = document.createElement("ul");
  // list.appendChild(listItems);

  // for (let key in getIngredients) {
  //         let value = getIngredients[key];
  //         listItem = document.createElement("li");
  //         listItem.innerHTML = value;
  //         cocktailIngredients.appendChild(listItem);
  //       }

  // let value = datas.success;
  // listItem = document.createElement("li");
  // listItem.innerHTML = value;
  //   }

  //   const cocktail = data.drinks[0];
  //   const cocktailDiv = document.getElementById("cocktail");
  //   const cocktailName = cocktail.strDrink;
  //   const heading = document.createElement("h1");
  //   heading.innerHTML = cocktailName;
  //   cocktailDiv.appendChild(heading);
  //   const cocktailImg = document.createElement("img");
  //   cocktailImg.src = cocktail.strDrinkThumb;
  //   cocktailDiv.appendChild(cocktailImg);
  //   const cocktailIngredients = document.createElement("ul");
  //   cocktailDiv.appendChild(cocktailIngredients);

  //   const getIngredients = Object.keys(cocktail)
  //     .filter(function (ingredient) {
  //       return ingredient.indexOf("strIngredient") == 0;
  //     })
  //     .reduce(function (ingredients, ingredient) {
  //       if (cocktail[ingredient] != null) {
  //         ingredients[ingredient] = cocktail[ingredient];
  //       }
  //       return ingredients;
  //     }, {});

  //   for (let key in getIngredients) {
  //     let value = getIngredients[key];
  //     listItem = document.createElement("li");
  //     listItem.innerHTML = value;
  //     cocktailIngredients.appendChild(listItem);
  //   }
}
