document.addEventListener("DOMContentLoaded", function () {
  // Define the async function for fetching user data
  async function fetchUserData() {
    // API URL
    const apiUrl = "https://jsonplaceholder.typicode.com/users";

    // Select the data container element
    const dataContainer = document.getElementById("api-data");

    try {
      // Fetch data from the API
      const response = await fetch(apiUrl);

      // Convert response to JSON
      const users = await response.json();

      // Clear the loading message
      dataContainer.innerHTML = "";

      // Create a <ul> element
      const userList = document.createElement("ul");

      // Loop through the users array and create list items
      users.forEach((user) => {
        const listItem = document.createElement("li");
        listItem.textContent = user.name; // Set the user's name as text
        userList.appendChild(listItem); // Append <li> to the <ul>
      });

      // Append the userList <ul> to the dataContainer
      dataContainer.appendChild(userList);
    } catch (error) {
      // Handle any errors that occur during the fetch operation
      dataContainer.innerHTML = "Failed to load user data.";
    }
  }

  // Call fetchUserData once the DOM has fully loaded
  fetchUserData();
});
