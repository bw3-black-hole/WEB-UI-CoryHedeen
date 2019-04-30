
const menu = document.querySelector('.dropdown');

class Menu {
  constructor(menu){
    this.menu = menu;
    console.log(this.menu)
    this.drops = this.menu.querySelector('.dropdown-items')
    this.menu.addEventListener('click', () => this.toggle())
  }
  toggle(){
    this.drops.classList.toggle('dropdown-hidden')
  }
}



const thisMenu = new Menu(menu);
