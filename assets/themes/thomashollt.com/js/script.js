$(window).on("load", function(e){
  
  $(function() {
    
    $(".folderContent").hide();
    
    // cache the open folder
    var openFolderId = "";
    
    $(".row").click(function(event) {
      
      // get the clicked folder id
      var clickedFolder = $(this);
      var clickedFolderId = clickedFolder.attr('id');
      
      // if there is an open folder always close it
      if( openFolderId != "" ){
        
        var openFolderContent = $("#content"+openFolderId);
        openFolderContent.slideUp("medium", "swing");
      }
   
      // if an open folder was clicked no new folder is open
      if( clickedFolderId == openFolderId ){
        openFolderId = "";
      
      // if the clicked folder was not already open, open it here
      } else {
      
        var folderContent = $("#content"+clickedFolderId);
        folderContent.remove();
      
        clickedFolder.after(folderContent);

        folderContent.slideDown("medium", "swing"); 

        openFolderId = clickedFolderId;
      }
      
      event.preventDefault();
    });
  });
});

$(function(){
	var navHeight = $(".navbar-container").height() + 40;
    $('a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
				if(true) targetOffset -= navHeight;
                $('html,body').animate({scrollTop: targetOffset}, 1000);
                return false;
            }
        }
    });
});