fetch("recyclingdata.json")
  .then(response => response.json())
  .then(data => {
    const recyclingCenters = data;

    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    const recyclingCentersContainer = document.getElementById("recyclingCentersContainer");

    button1.addEventListener("click", function() {
      displayRecyclingCenters(getRecyclingCentersByName("Ecopost"), recyclingCentersContainer);
    });

    button2.addEventListener("click", function() {
      displayRecyclingCenters(getRecyclingCentersByName("EcoCycle Center"), recyclingCentersContainer);
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
      centerDiv.classList.add("recycling-center"); // Add the CSS class to the div
      centerDiv.innerHTML = `<h3>${center.name}</h3>
                             <p>${center.location}</p>
                             <p>${center.contact}</p>
                             <a href="${center.website}" target="_blank">Website</a>`;
      recyclingCentersContainer.appendChild(centerDiv);
    });
  }
  


  // function displayRecyclingCenters(recyclingCenters, button) {
  //   const container = button.parentNode;
  //   const recyclingCentersContainer = document.createElement("div");
  //   recyclingCentersContainer.classList.add("recycling-centers-container");
  
  //   recyclingCenters.forEach(center => {
  //     const centerDiv = document.createElement("div");
  //     centerDiv.classList.add("recycling-center");
  
  //     centerDiv.innerHTML = `<h3>${center.name}</h3>
  //                            <p>${center.location}</p>
  //                            <p>${center.contact}</p>
  //                            <a href="${center.website}" target="_blank">Website</a>`;
  //     recyclingCentersContainer.appendChild(centerDiv);
  //   });
  
  //   container.insertBefore(recyclingCentersContainer, button);
  // }
  
  // const button1 = document.getElementById("button1");
  // const button2 = document.getElementById("button2");
  // const button3 = document.getElementById("button3");
  // const button4 = document.getElementById("button4");
  
  // button1.addEventListener("click", function() {
  //   const recyclingCenters = getRecyclingCentersByName("Ecopost");
  //   displayRecyclingCenters(recyclingCenters, button1);
  // });
  
  // button2.addEventListener("click", function() {
  //   const recyclingCenters = getRecyclingCentersByName("Organic");
  //   displayRecyclingCenters(recyclingCenters, button2);
  // });
  
  // button3.addEventListener("click", function() {
  //   const recyclingCenters = getRecyclingCentersByName("Metal");
  //   displayRecyclingCenters(recyclingCenters, button3);
  // });
  
  // button4.addEventListener("click", function() {
  //   const recyclingCenters = getRecyclingCentersByName("Paper");
  //   displayRecyclingCenters(recyclingCenters, button4);
  // });
  
  // function getRecyclingCentersByName(name) {
  //   // Logic to filter recycling centers based on the name
  //   // Adjust this function to match your actual filtering logic
  //   return recyclingCenters.filter(center => center.name === name);
  // }
  