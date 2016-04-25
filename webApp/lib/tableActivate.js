//Load table
$(document).ready(function() {
     $('#table').dataTable( {
     "paging": false,
     "sDom": "tl"
				  });
                  } );

$(document).ready(function(){
    $('#table').dataTable();

    $('.mdl-textfield__input').on( 'keyup click', function () {
       $('#table').DataTable().search(
           $('.mdl-textfield__input').val()
       ).draw();
    } );
});
