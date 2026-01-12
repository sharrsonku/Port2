document.querySelectorAll('.opdracht').forEach(item => {
  const detail = item.querySelector('.detail');

  item.addEventListener('click', () => {
    if(item.classList.contains('active')){
      // inklappen
      detail.style.height = 0;
      item.classList.remove('active');
    } else {
      // uitklappen, dynamisch op basis van content
      detail.style.height = detail.scrollHeight + "px";
      item.classList.add('active');
    }
  });
});
