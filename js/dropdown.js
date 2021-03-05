const writeButton = document.querySelector('.navigation-upload-button');
const dropdown = document.querySelector('.drop-down');
const hidden = document.querySelector('.navigation-app-download');

writeButton.addEventListener('click', () => {
    if (dropdown.style.display === "none")
    {
        dropdown.style.display = "flex";
        hidden.style.display = "none";
    }
    else
    {
        dropdown.style.display = "none";
        hidden.style.display = "inline-block";
    }
});