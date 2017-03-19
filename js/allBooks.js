/**
 * Created by Stako on 8/28/2016.
 */
$(document ).ready(function (){
	$('#bookContainer' ).on('click', '.btn-danger', function () {
		alert('Are you sure want to delete this book')
		$(this ).parent().slideUp(2000);
	})

	var byingBookDiv = $('<div id="buyingBooks"></div>');
	var sum = 0;
	var count = 1;
	$('#bookContainer' ).on('click', '.btn-success', function () {
		sum += parseFloat( $(this ).parent().find('p:nth-child(4)' ).text());
		$('#numberOrderedProducts' ).text('ord: '+count);                       // counting number of buying products
		                                                                        // displayed in <span>
		$ ( '#OrderedSum' ).text( sum + ' bgn' );                               // sum of buying products displayed in
		                                                                        // second <span>
		count++;
		$.ajax({
			url:'ajaxCallBack.php_lastProject',
			data: {
				author: $(this ).parent().find('p:nth-child(2)' ).text(),
				bookName: $(this ).parent().find('p:nth-child(3)' ).text(),
				sumOFOrder: sum,
				prodQuantity: count
			}
		} ).done(function(data) {
				$('#orderedDiv' ).text(data);
		})

		//var orderedDiv = $ ( '<div></div>' );
		//$(this ).parent().find('p').clone().appendTo(orderedDiv );
		//orderedDiv.appendTo( byingBookDiv );
		$(this ).parent().fadeOut(5);
		//$ ( 'nav' ).after( byingBookDiv );
	})
	$('#returnAllBooks' ).on('click',function (ev) {
		ev.stopPropagation();                                           // if miss this clause previous click will
		                                                                // triggered
		$ ( '#bookContainer' ).find('.smallBookContainer').fadeIn(500);


	})
})
