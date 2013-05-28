//Javascript Document

$(document).ready(function(){
   
    var menuOn = false;   
       
    $('nav').click(menuClick);
    
    //this below will show the list when clicked
    function menuClick() {
        
        //$('li').show(); //this will ONLY show t he list, nothing else
        
        if(!menuOn){
            $('li').slideDown();
            menuOn = true; //menuOn = !menuOn (this is the same as saying what is commented out)
        } else {
            $('li').hide();
            $('li:nth-child(1)').show();
            menuOn = false;
        }
    }
   
   
   
   
   
});