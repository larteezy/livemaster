$( function() 
{
    $('.cells__elem').click(function(){ //При клике на невыделенный элемент 
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

    //$( ".sortable" ).disableSelection();
} );

