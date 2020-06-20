const menuBtn = document.querySelector( '.js-menu-icon' );
const menu = document.querySelector( '.menu-wrapper' );

menuBtn.addEventListener( 'click', openMenu );
menu.addEventListener( 'click', closeMenu );

function openMenu( e ) {
    menu.classList.add( 'active' );
}
function closeMenu( e ) {
    if ( e.target.nodeName !== 'SPAN' && e.target.nodeName !== 'A' ) return;

    menu.classList.remove( 'active' );
}


