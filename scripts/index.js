class Activity{
    constructor(id, title, description, imgUrl){
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

class Repository{
    constructor(){
        this.id = 0;
        this.activities = [];
    }

    getAllActivities(){
        return this.activities;
    }

    createActivity(title, description, imgUrl){
        this.id += 1;
        const activity = new Activity(this.id, title, description, imgUrl)
        this.activities.push(activity);
    }

    deleteActivity(id){
        this.activities  = this.activities.filter((activity => activity.id != id))
    }
}

const repository = new Repository();
const addActivity = document.getElementById("addActivity")
addActivity.addEventListener("click", handler)

function addObjectActivity(Activity){
    const {id, title, description, imgUrl} = Activity
    const elementTarget = document.createElement("div");
    elementTarget.classList.add("box-tech")

    const elementTitle = document.createElement("h3");
    const elementDescription = document.createElement("p");
    const elementImgUrl = document.createElement("img");
    const elementDelete = document.createElement("img");

    elementTitle.innerHTML = title
    elementDescription.innerHTML = description    
    elementImgUrl.src = imgUrl

    elementDelete.src = "https://icons.veryicon.com/png/o/miscellaneous/forestry-in-yiliang/delete-316.png"
    elementDelete.classList.add("cross")
    elementDelete.addEventListener("click", (e) => {
        repository.deleteActivity(id)
        e.target.parentNode.remove();
        if(repository.getAllActivities().length === 0){
            document.getElementById("container").innerHTML = "Aún no se han agregado actividades";
        }
    })

    elementTarget.appendChild(elementTitle)
    elementTarget.appendChild(elementImgUrl);
    elementTarget.appendChild(elementDescription)
    elementTarget.appendChild(elementDelete)

    return elementTarget;
}

function refreshContainer(){
    const container = document.getElementById("container");

    container.innerHTML = "";

    const allActivities = repository.getAllActivities();

    const htmlActivities = allActivities.map(activity => addObjectActivity(activity))

    htmlActivities.forEach(activity => {
        container.appendChild(activity)
    })
}


function handler(){
    const title = document.getElementById("title");
    const description = document.getElementById("description");
    const imgUrl = document.getElementById("imgUrl");

    if(title.value === "" || description.value === "" || imgUrl.value === ""){
        alert("Debe rellenar todos los campos")
    }else{
        repository.createActivity(title.value, description.value, imgUrl.value)
        refreshContainer();
        title.value = ""
        description.value = ""
        imgUrl.value = ""
    }

}

module.exports = {
    Activity, Repository
}