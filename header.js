class Header {
    constructor(target) {
        this.target = document.querySelector(target);
        this.menuOpenBtn = this.target.querySelector('.menu_open_btn');
        this.menuCloseBtn = this.target.querySelector('.menu_close_btn');
        this.init();
    }

    init(){
        window.addEventListener('resize', this.resize.bind(this));

        this.menuOpenBtn.addEventListener('click', this.openMenu.bind(this));
        this.menuCloseBtn.addEventListener('click', this.closeMenu.bind(this));        
    }

    resize(){ window.innerWidth > 768 ? this.closeMenu() : null; }
    openMenu(){ this.target.classList.add('open'); }
    closeMenu(){ this.target.classList.remove('open'); }
}