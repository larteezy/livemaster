$( function() 
{
    $('.cells__elem').click(function(){ //При клике на невыделенный элемент 
        $( this ).toggleClass('selected');
        $( '#delete' ).removeAttr('disabled');
    });

    $('.selected').click(function(){ //При клике на выделенный элемент
        $( this ).toggleClass('selected');
        /*if ($('.selected').length < 1) 
        {
            $( '#delete' ).attr('disabled', 'disabled'); 
        }*/
    });

    $('#delete').click(function(){ //При клике на кнопку Удалить
        //$( this ).attr('class', 'selected');
        var elements = $('.selected');
        for (i = 0; i < elements.length; i++) 
            elements[i].style.display = 'none';

        $( '#refresh' ).removeAttr('disabled'); 
        $( '#delete' ).attr('disabled', 'disabled'); 
    });

    $('#refresh').click(function(){ //При клике на кнопку Сбросить
        var elements = $('.selected');
        for (i = 0; i < elements.length; i++) 
            elements[i].style.display = 'inline-block';

        elements.toggleClass('selected');
        $( '#refresh' ).attr('disabled', 'disabled');    
    });
    
    $('#b1').click(function(){  //При клике на кнопку увеличения размера
        var elements = $('.cells__elem');

        for (i = 0; i < elements.length; i++) 
        {
            elements[i].style.width = '420px';
            elements[i].style.height = '420px';
            elements[i].style.lineHeight = '420px';
            elements[i].style.fontSize = '200px'; 
        }  
    });

    $('#b2').click(function(){  //Кнопка уменьшения размера
        var elements = $('.cells__elem');

        for (i = 0; i < elements.length; i++) 
        {
            elements[i].style.width = '200px';
            elements[i].style.height = '200px';
            elements[i].style.lineHeight = '200px';
            elements[i].style.fontSize = '100px'; 
        }  
    });

    $('#sort__ascending').click(function(){  //Кнопка уменьшения размера
        items = $('.cells .cells__elem');
        arItems = $.makeArray(items);

        arItems .sort(function(a, b) 
        {
            return $(a).data("sort") - $(b).data("sort")
        });

        $(arItems).appendTo(".cells");
    });

    $('#sort__descending').click(function(){  //Кнопка уменьшения размера
        items = $('.cells .cells__elem');
        arItems = $.makeArray(items);

        arItems .sort(function(b, a) 
        {
            return $(a).data("sort") - $(b).data("sort")
        });

        $(arItems).appendTo(".cells");
    });

    $( ".sortable" ).sortable();    //Перетаскивание элементов
    //$( ".sortable" ).disableSelection();
} );

