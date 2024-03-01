const btnMenu = document.querySelector('.menu_btn_right');
const btnMenuClose = document.querySelector('.close_btn');

btnMenu.addEventListener('click', () => {
    document.querySelector('.menu_content').classList.add('active');
    document.querySelector('.menu_content').classList.remove('noactive');
});

btnMenuClose.addEventListener('click', () => {
    document.querySelector('.menu_content').classList.add('noactive');
    document.querySelector('.menu_content').classList.remove('active');
})

/* tab */

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active_tab", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active_tab";
  }