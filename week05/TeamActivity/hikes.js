
  
class getHike {
    
    constructor(imgBasePath, hikesList){
        this.imgBasePath = imgBasePath;
        this.hikesList = hikesList;
    }
           
   showHikeList() {
  
    const hikeListElement = document.getElementById("hikes");
    hikeListElement.innerHTML = "";
    this.renderHikeList(this.hikesList, hikeListElement);
    }

    renderHikeList(hikes, parent) {
        hikes.forEach(hike => {
        parent.appendChild(this.renderOneHike(hike));
    });
    }
    renderOneHike(hike) {
        const item = document.createElement("li");

        item.innerHTML = ` <h2>${hike.name}</h2>
            <div class="image"><img src="${this.imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
            <div class="description">
                    <div>
                        <h3>Distance</h3>
                        <p>${hike.distance}</p>
                    </div>
                    <div>
                        <h3>Difficulty</h3>
                        <p>${hike.difficulty}</p>
                    </div>
            </div>`;

    return item;
}

renderJustOneHike(hike) {
    const item = document.createElement("li");

    item.innerHTML = ` <h2>${hike.name}</h2>
        <div class="image"> <img src="${this.imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
        <div class="description">
                <div>
                    <h3>Distance</h3>
                    <p>${hike.distance}</p>
                </div>
                <div>
                    <h3>Difficulty</h3>
                    <p>${hike.difficulty}</p>
                </div>
                <div>
                <h3>Description</h3>
                <p>${hike.description}</p>
            </div>
            <div>
                <h3>Directions</h3>
                <p>${hike.directions}</p>
            </div>
                
        </div>`;

return item;
}

  }

  export default getHike;
