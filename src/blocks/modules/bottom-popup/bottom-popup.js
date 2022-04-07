import Cookies from '../../../../node_modules/js-cookie/dist/js.cookie.min.mjs';

if(document.querySelector('.bottom-popup')){
    document.addEventListener("scroll", function(){
        let scrollTop = document.querySelector('html').scrollTop;
        let start = 750;
        let container = document.querySelector('.bottom-popup');
        

        if (scrollTop >= start && !Cookies.get('popup-present')){
            container.classList.add('view')
        }else{
            if(container.classList.contains('view')){
                container.classList.remove('view')
            }
        }

    })

    document.querySelector('.bottom-popup__btn').addEventListener('click', function(){
        Cookies.set('popup-present', true)
    })

     
}

