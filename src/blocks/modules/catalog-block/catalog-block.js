if(document.querySelector('[data-filter]')){
    
    var countElem = 6;
    const step = 1;
    var activeTab = null;

    function $(elem){
        return document.querySelector(elem)
    }

    document.querySelectorAll('[data-filter]').forEach(function(item, index){

        if(!index){
            item.classList.add('active') 
            filterItems(item.dataset.filter)
            activeTab = item.dataset.filter
        } 

        item.addEventListener('click', function(event){

            $('.catalog-block__nav li.active').classList.remove('active')
            this.classList.add('active')
            activeTab = item.dataset.filter
            filterItems(item.dataset.filter)
            countElem = 6;
        })


    })

    function filterItems (param){
        document.querySelectorAll('[data-card]').forEach(function(item, index){

            item.classList.remove('hide')

            if(item.dataset.card != param){
                item.classList.add('hide')
            } 
        })

        pagination(param)
        
    }

    function pagination (param){
        var hideElements = document.querySelectorAll('[data-card="'+param+'"]');

        hideElements.forEach(function(item, index){

            item.classList.remove('hide')

            if (index >= countElem){
                item.classList.add('hide')
            }
        })

        if(!document.querySelectorAll('[data-card="'+param+'"].hide').length){
            $('.catalog-block__more').classList.add('hide')
        }else {
            $('.catalog-block__more').classList.remove('hide')
        }

    }

    $('.catalog-block__more').addEventListener('click', function(event){
        countElem += step
        pagination (activeTab)
    })



}
