    // JavaScript code here
    const listItems = document.querySelectorAll('ol li');
    const paragraphs = document.querySelectorAll('ol li p');

    // Add event listener to each list item
    listItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        // Toggle the visibility of the corresponding paragraph
        paragraphs[index].classList.toggle('show');
      });
    });