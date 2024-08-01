const accordionItems = document.querySelectorAll('.accordion li');

accordionItems.forEach((item) => {
  const label = item.querySelector('label');
  const content = item.querySelector('.content');

  label.addEventListener('click', () => {
    if (content.style.maxHeight === '0px' || content.style.maxHeight === '') {
      content.style.maxHeight = '1000px';
      content.style.overflow = 'visible';
      content.style.padding = '10px';
      label.innerHTML = '- ' + label.innerHTML.slice(2); 
    } else {
      content.style.maxHeight = '0px';
      content.style.overflow = 'hidden';
      content.style.padding = '0px';
      label.innerHTML = '+ ' + label.innerHTML.slice(2); 
    }
  });

  // Initialize the icon
  label.innerHTML = '+ ' + label.innerHTML;
});
