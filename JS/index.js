
const menu = document.querySelector('.dropdown');
const links = document.querySelectorAll('.tabs-link');


class Menu {
  constructor(menu){
    this.menu = menu;
    this.drops = this.menu.querySelector('.dropdown-items')
    this.menu.addEventListener('click', () => this.toggle())
  }
  toggle(){
    this.drops.classList.toggle('dropdown-hidden')
  }
}
class TabLink {
  constructor(link){
    this.link = link;
    this.data = this.link.dataset.tab;
    this.item = document.querySelector(`.tabs-item[data-tab="${this.data}"]`)
    this.tabItem = new TabItem(this.item);

    this.link.addEventListener('click', () => this.select());
  }
  select(){
    const links = document.querySelectorAll('.tabs-link');
    links.forEach(item => item.classList.remove('tabs-link-selected'));
    this.link.classList.add('tabs-link-selected');
    const para = document.querySelectorAll('.tabs-item p');
    para.forEach(item=> item.classList.remove('hidden'))
    this.tabItem.select();
  }

}
class TabItem {
  constructor(element){
    this.element = element;
    this.para = document.querySelectorAll('.tabs-item p');
    this.btn = document.querySelector('.submit');
    this.btn.addEventListener('click', () => this.toggle());
  }
  select(){
    const items = document.querySelectorAll('.tabs-item');
    items.forEach(item => item.classList.remove('tabs-item-selected'));
    this.element.classList.add('tabs-item-selected')
  }
  toggle(){
    this.para.forEach(item => item.classList.toggle('hidden'));
  }
}


const thisMenu = new Menu(menu);
links.forEach(item => new TabLink(item));
