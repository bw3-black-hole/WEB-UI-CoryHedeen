const menu = document.querySelector('.dropdown');


class Menu {
  constructor(item){
    this.item = item;
    this.drops = document.querySelector('.dropdown-items')
    this.item.addEventListener('click', () => this.toggle())
  }
  toggle(){
    this.drops.classList.toggle('dropdown-hidden')
  }
}





const newDrop = new Menu(menu);
