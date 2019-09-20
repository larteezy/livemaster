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

    $('#addcell').click(function(){ //При клике на кнопку Сбросить
        items = $('.cells .cells__elem');
        
        arItems = $.makeArray(items);
        arItems .sort(function(a, b) 
        {
            return $(a).data("sort") - $(b).data("sort")
        });

        for (i = 0; i < arItems.length; i++)
        {
            console.log(i);
            
            if ((i + 1) != arItems[i])
            {
                var ul = document.getElementById("sortable");
                var li = document.createElement('li');
                li.setAttribute('class', 'cells__elem');
                li.setAttribute('datasort', i + 2);
                li.appendChild(document.createTextNode(i + 2));
            }
        }
        
        //li.appendChild(document.createTextNode("9"));
        //var a = document.createAttribute('value');
        //a.value = '9';
        //li.appendChild(a);
        ul.appendChild(li);
        //ul.appendChild(items[1]);
        //$(".cells ul").append ('<li class="cells__elem" data-sort="9">9</li>');
        console.log('<li class="cells__elem" data-sort="9">9</li>');
        
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

    //$( ".sortable" ).disableSelection();
} );

