function openTabstd(event, tabId) {
    // Hide all tab content
    const tabContents = document.querySelectorAll('.tab-content-std');
    tabContents.forEach(content => content.classList.remove('active'));

    // Remove "active" class from all tab links
    const tabLinks = document.querySelectorAll('.tab-link-std');
    tabLinks.forEach(link => link.classList.remove('active'));

    // Show the clicked tab and add "active" class
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
  }

  function openTabwev(event, tabId) {
    // Hide all tab content
    const tabContents = document.querySelectorAll('.tab-content-wev');
    tabContents.forEach(content => content.classList.remove('active'));

    // Remove "active" class from all tab links
    const tabLinks = document.querySelectorAll('.tab-link-wev');
    tabLinks.forEach(link => link.classList.remove('active'));

    // Show the clicked tab and add "active" class
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
  }

/*
// Fetch the JSON data
fetch('fullbinder.json')
  .then(response => response.json())
  .then(data => {
      console.log(data);
      
      // Get the title and version from the JSON object
      const groupName = data[0].groupName;
      const ver = data[0].album[0].version[0].versionName;

      // Update the content of the div with the class 'groupTitle'
      document.querySelector('.groupTitle').textContent = groupName;
      // Get the album versions from the JSON and populate the dropdown
      const albumVersionElement = document.querySelector('#albumVersion');
      albumVersionElement.innerHTML = ''; // Clear existing options

      data[0].album[0].version.forEach(version => {
        const option = document.createElement('option');
        option.value = version.versionName;
        option.textContent = version.versionName;  // Set the option text to the version name
        albumVersionElement.appendChild(option);
     });

     // Get the member names
  })
  .catch(error => {
      console.error('Error fetching the JSON file:', error);
  });
*/

