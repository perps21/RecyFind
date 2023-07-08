fetch("recyclingdata.json")
  .then(response => response.json())
  .then(data => {
    const recyclingCenters = data;

    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    const button3 = document.getElementById("button3");
    const button4 = document.getElementById("button4");
    const recyclingCentersContainer = document.getElementById("recyclingCentersContainer");

    button1.addEventListener("click", function() {
      displayRecyclingCenters(getRecyclingCentersByName("Ecopost",), recyclingCentersContainer);
    });

    button2.addEventListener("click", function() {
      displayRecyclingCenters(getRecyclingCentersByName("Sanergy Organics Recycling Factory"), recyclingCentersContainer);
    });


    button3.addEventListener("click", function() {
      displayRecyclingCenters(getRecyclingCentersByName("Rishit Metal Ltd"), recyclingCentersContainer);
    });

    button4.addEventListener("click", function() {
      displayRecyclingCenters(getRecyclingCentersByName("Kamongo Waste Paper Kenya Limited"), recyclingCentersContainer);
    });

    function getRecyclingCentersByName(name) {
      return recyclingCenters.filter(center => center.name === name);
    }
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });

  function displayRecyclingCenters(recyclingCenters, recyclingCentersContainer) {
    recyclingCentersContainer.innerHTML = "";
  
    recyclingCenters.forEach(center => {
      const centerDiv = document.createElement("div");
      recyclingCentersContainer.classList.add("recycling-center"); // Add the CSS class to the div
      centerDiv.innerHTML = `<h3>${center.name}</h3>
                             <p>${center.location}</p>
                             <p>${center.contact}</p>
                             <a href="${center.website}" target="_blank">Website</a>`;
      recyclingCentersContainer.appendChild(centerDiv);
    });
  }
  

  