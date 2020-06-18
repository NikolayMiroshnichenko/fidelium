const moduleMobilMenu = document.querySelector('.program-body');
const moduleMobilList = document.querySelectorAll('.sessions');
const firstBlock = document.querySelectorAll('.session-item');
const allLink = document.querySelectorAll('.module-title');

moduleMobilMenu.addEventListener('click', openModuleMobilSections)

function openModuleMobilSections(e) {

    e.preventDefault();
    if(e.target.nodeName !== 'H3') return;

    moduleMobilList.forEach(element => {
        if(e.target.dataset.mobailmenu == element.dataset.mobailsession) {
            closeMobilSession( element, e.target );
            return;
        }
        element.classList.remove('active');
    });
   
    firstBlock.forEach(element => {
        if(e.target.dataset.default == element.dataset.first) {
            element.children[0].classList.add( 'active' );
            element.children[1].classList.add( 'active' );
        }
    });
}

function closeMobilSession( block, link ) {
    if ( block.classList.contains( 'active' ) ) {
        remoweArrowActiv( link);
        block.classList.remove( 'active' );
        return;
    }
    remoweArrowActiv( link);
    block.classList.add( 'active' );
}
function remoweArrowActiv( block ) {
    allLink.forEach(element => {
        if(element !== block) {
            element.classList.remove('active');
        }
    });

    if ( block.classList.contains( 'active' ) ) {
        block.classList.remove( 'active' );
        return;
    }
    block.classList.add( 'active' );
}