$( function() 
{
    $('#delete').click(function(){ //При клике на кнопку Удалить
        /*
        var elements = $('.selected');
        for (i = 0; i < elements.length; i++) 
            elements[i].style.display = 'none';*/

        $('.selected').toggleClass('deleted', true);
        $('.selected').toggleClass('selected', false);
        $( '#refresh' ).removeAttr('disabled'); 
        $( '#delete' ).attr('disabled', 'disabled'); 
    });

    $('#refresh').click(function(){ //При клике на кнопку Сбросить
        $('.deleted').toggleClass('deleted', false);
        /*
        var elements = $('.deleted');
        for (i = 0; i < elements.length; i++) 
            elements[i].style.display = 'inline-block';*/
        $( '#refresh' ).attr('disabled', 'disabled');    
    });

    $('#addcell').click(function(){ //При клике на кнопку Сбросить
        var items = document.getElementsByClassName('cells__elem');
        //console.log(items[0]);
        //console.log(items[0].getAttribute('data-sort'));
        
        var arItems = $.makeArray(items);

        var maxDataSort = 0;

        for (i = 0; i < arItems.length; i++)
        {
            console.log('mDS = ' + maxDataSort);
            console.log('data = ' + arItems[i].getAttribute('data-sort'));
            if (Number(maxDataSort) < Number(arItems[i].getAttribute('data-sort')))
            {
                console.log('mDS(' + maxDataSort + ') = data(' + arItems[i].getAttribute('data-sort'));
                maxDataSort = arItems[i].getAttribute('data-sort');
            }
        }

        var ul = document.getElementById("sortable");
        var li = document.createElement('li');
        li .setAttribute('class', 'cells__elem ui-sortable-handle');
        li.setAttribute('data-sort', Number(maxDataSort) + 1);
        li.appendChild(document.createTextNode(Number(maxDataSort) + 1));
        ul.appendChild(li);
        console.log('добавленоы');
        

        
        
        
/*
        arItems .sort(function(a, b) 
        {
            return $(a).data("sort") - $(b).data("sort")
        });

        /*
/*
        for (i = 0; i < arItems.length; i++)
        {
            if ((i + 1) != arItems[i])
            {
                arItems.push();
            }
        }*/

        //$(".cells").items.
        //$(".cells").push(arItems[0]);
        //$(arItems).push(".cells");// .appendTo(".cells");
        /*
        var elements = $('.deleted');
        for (i = 0; i < elements.length; i++) 
            elements[i].style.display = 'inline-block';*/
           
    });
    
    $('#b1').click(function(){  //Кнопку увеличения размера
        $('.cells').toggleClass('bigcells', true); 
    });

    $('#b2').click(function(){  //Кнопка уменьшения размера
        $('.cells').toggleClass('bigcells', false);
    });

    $('#sort__ascending').click(function(){  //Сортировать по возрастанию
        items = $('.cells .cells__elem');
        arItems = $.makeArray(items);

        arItems .sort(function(a, b) 
        {
            return $(a).data("sort") - $(b).data("sort")
        });

        $(arItems).appendTo(".cells");
    });

    $('#sort__descending').click(function(){  //Сортировать по убыванию
        items = $('.cells .cells__elem');
        arItems = $.makeArray(items);

        arItems .sort(function(b, a) 
        {
            return $(a).data("sort") - $(b).data("sort")
        });

        $(arItems).appendTo(".cells");
    });

    $( "#sortable" ).sortable({ //Перетаскивание элементов
        placeholder: "placeforcell",
        containment: ".container"
    });    

    $('ul').on("click", "li.cells__elem", function(){ //При клике на невыделенный элемент 
        $( this ).toggleClass('selected');
        if ($('.selected').length != 0)
        {
            $( '#delete' ).removeAttr('disabled');
        }
        else
        {
            $( '#delete' ).attr('disabled', 'disabled'); 
        }
    });

    //$( ".sortable" ).disableSelection();
} );

