$( function() 
{
    $('.cells__elem').click(function(){
        $( this ).toggleClass('selected');
        $( '#delete' ).removeAttr('disabled');
    });

    $('.selected').click(function(){
        $( this ).toggleClass('selected');
        /*if ($('.selected').length < 1) 
        {
            $( '#delete' ).attr('disabled', 'disabled'); 
        }*/
    });

    $('#delete').click(function(){
        //$( this ).attr('class', 'selected');
        var elements = $('.selected');
            for (i = 0; i < elements.length; i++) {
                elements[i].style.display = 'none';
            }
            $( '#refresh' ).removeAttr('disabled'); 
            $( '#delete' ).attr('disabled', 'disabled'); 
    });

    $('#refresh').click(function(){
        var elements = $('.selected');
            for (i = 0; i < elements.length; i++) {
                elements[i].style.display = 'inline-block';
                
            }
            elements.toggleClass('selected');
            $( '#refresh' ).attr('disabled', 'disabled');    
    });
    
    $('#b1').click(function(){
        var elements = $('.cells__elem');
            for (i = 0; i < elements.length; i++) {
                elements[i].style.width = '420px';
                elements[i].style.height = '420px';
                elements[i].style.lineHeight = '420px';
                elements[i].style.fontSize = '200px';
                //elements[i].style. = '420px';  
            }  
    });

    $('#b2').click(function(){
        var elements = $('.cells__elem');
            for (i = 0; i < elements.length; i++) {
                elements[i].style.width = '200px';
                elements[i].style.height = '200px';
                elements[i].style.lineHeight = '200px';
                elements[i].style.fontSize = '100px';
                //elements[i].style. = '420px';  
            }  
    });


/*
    $('.selected').click(function(){
        $( this ).attr('class', 'cells__elem');
    });*/
    //$('#select option:first').prop('selected', true);
    $( ".sortable" ).sortable();
    //$( ".selectable" ).selectable();
    //$( ".sortable" ).disableSelection();
} );

