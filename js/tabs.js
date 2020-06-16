refs = {
    sessions: document.querySelector( '.program-body' ),
    session: document.querySelectorAll( '.session' ),
    listLink: document.querySelectorAll( '.link--sessions' ),
    menu: document.querySelector( '.program-menu' ),
    sectionsFirs: document.querySelectorAll( '.session-item' )

}

$( document ).ready( function ( $ ) {
    $( '.program-menu__item' ).on( 'click', function ( e ) {
        e.preventDefault();
        var target = $( this ).data( 'target' );
        $( '.module.active' ).removeClass( 'active' );
        $( '.' + target ).addClass( 'active' );
        $( '.program-menu__item.active' ).removeClass( 'active' );
        $( this ).addClass( 'active' );
    } );
} );

refs.sessions.addEventListener( 'click', openSession );
refs.menu.addEventListener( 'click', openFirstSession );

function openFirstSession( e ) {
    refs.sectionsFirs.forEach( element => {
        if ( e.target.dataset.menu == element.dataset.first ) {
            element.children[0].classList.add( 'active' );
            element.children[1].classList.add( 'active' );
        }
    } )
}


function openSession( e ) {
    e.preventDefault();
    const link = e.target.dataset.link;

    if ( !link ) return;

    refs.session.forEach( element => {
        if ( link == element.id ) {
            const block = element;
            closeSession( block );
            return;
        }
        element.classList.remove( 'active' );

    } );
    refs.listLink.forEach( element => {
        if ( link == element.dataset.link ) {
            const block = element;
            remoweActiv( block );
            return;
        }
        element.classList.remove( 'active' );
    } );
}


function closeSession( block ) {
    if ( block.classList.contains( 'active' ) ) {
        block.classList.remove( 'active' );
        return;
    }
    block.classList.add( 'active' );
}

function remoweActiv( block ) {
    if ( block.classList.contains( 'active' ) ) {
        block.classList.remove( 'active' );
        return;
    }
    block.classList.add( 'active' );
}




