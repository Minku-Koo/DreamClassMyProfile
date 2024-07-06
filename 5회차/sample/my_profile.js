
document.addEventListener('DOMContentLoaded', function() {
    // 1
	const title = document.querySelector('#title_as_btn');
    const movie = document.querySelector('.box_hide');
    
    title.addEventListener('click', function() {
        if (movie.style.display === 'none') {
            movie.style.display = 'block';
        } else {
            movie.style.display = 'none';
        }
    });
	
	// 2
	const image = document.querySelector('#karina');
	
	image.addEventListener('mouseenter', function() {
		image.style.width = (image.clientWidth + 20) + 'px';
		image.style.height = (image.clientHeight + 20) + 'px';
	});
	
	image.addEventListener('mouseleave', function() {
		image.style.width = '';
		image.style.height = '';
	});
});


