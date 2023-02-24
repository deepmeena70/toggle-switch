(() => {
  console.log('js is running');

  const select = (selector) => {
    return document.querySelector(selector);
  };

  const toggleSwitch = (slideBtn) => {
    console.log('clicked on toggle switch');

    if (slideBtn.classList.contains('toggle')) {
      slideBtn.classList.remove('toggle-switch-on', 'toggle');
      return;
    }
    slideBtn.classList.add('toggle-switch-on', 'toggle');
  };

  select('.toggle-switch-1').addEventListener('click', () => toggleSwitch(select('.slide-btn-1')));
  select('.toggle-switch-2').addEventListener('click', () => toggleSwitch(select('.slide-btn-2')));
})();
