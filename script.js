// Get all accordion items
const accordionItems = document.querySelectorAll('.accordion li');

// Add event listener to each item
accordionItems.forEach((item) => {
  const label = item.querySelector('label');
  const content = item.querySelector('.content');

  label.addEventListener('click', () => {
    // Toggle the content visibility
    if (content.style.maxHeight === '0px' || content.style.maxHeight === '') {
      content.style.maxHeight = '1000px';
      content.style.overflow = 'visible';
      content.style.padding = '10px';
      label.innerHTML = '- ' + label.innerHTML.slice(2); // Change the icon to '-'
    } else {
      content.style.maxHeight = '0px';
      content.style.overflow = 'hidden';
      content.style.padding = '0px';
      label.innerHTML = '+ ' + label.innerHTML.slice(2); // Change the icon to '+'
    }
  });

  // Initialize the icon
  label.innerHTML = '+ ' + label.innerHTML;
});
