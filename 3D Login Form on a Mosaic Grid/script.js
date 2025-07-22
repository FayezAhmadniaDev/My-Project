const cols = document.querySelectorAll('.col-item');

cols.forEach(col => {
  let timeoutId

  col.addEventListener('mouseenter', () => {
    col.style.backgroundColor = '#14b8a6'

    if (timeoutId) {
      clearTimeout(timeoutId)
    }
  });

  col.addEventListener('mouseleave', () => {
    timeoutId = setTimeout(() => {
      col.style.backgroundColor = '#262626'
    }, 300); 
  });
});
