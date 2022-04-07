var first = 0;
var last = 10;
var data = [];
var max = false;

fetch("https://api.spacexdata.com/v4/launches/")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then((data) => {
    displayRecord(data);
    this.data = data;
  })
  .catch((error) => console.error("FETCH ERROR:", error));

function displayRecord(data) {
  document.getElementById("loading").style.display = "none";
  const list = document.getElementById("list-container");
  const listItems = document.createElement("ul");
  list.appendChild(listItems);
  data.map((record, i) => {
    if (i >= this.first && i <= this.last) {
      listItem = document.createElement("li");
      listItemArticle = document.createElement("article");
      listItemArticleImage = document.createElement("img");
      listItemArticleDetails = document.createElement("div");
      listItemArticleDetails.classList.add("details");
      listItemArticleDetailsTitle = document.createElement("h2");
      listItemArticleDetailsDescription = document.createElement("p");

      listItemArticleImage.src = record.links.patch.small;
      listItemArticle.appendChild(listItemArticleImage);

      listItemArticleDetailsTitle.innerHTML = record.name;
      listItemArticleDetails.appendChild(listItemArticleDetailsTitle);

      listItemArticleDetailsDescription.innerHTML = record.details
        ? record.details
        : "No Description";
      listItemArticleDetails.appendChild(listItemArticleDetailsDescription);

      listItemArticle.appendChild(listItemArticleDetails);

      listItem.appendChild(listItemArticle);
      listItems.appendChild(listItem);
      list.appendChild(listItems);
    }
  });
}

function moreRecords() {
  this.first += 10;
  this.last += 10;
  displayRecord(this.data);
  if (this.last > this.data.length)
    document.getElementById("seeMore").style.display = "none";
}
