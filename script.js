var internalLink = document.querySelectorAll('nav ul li a');

for(var i=0; i<internalLink.length; i++)
{
    
     internalLink[i].addEventListener('click',function(event)	  {
        event.preventDefault();
        let targetSectionContent = this.innerText;
        let targetSectionId =  targetSectionContent.trim().toLowerCase();
        let targetSection;
        if(targetSectionId == "home")
            targetSection = document.getElementById('body-header');
        else 
            targetSection = document.getElementById(targetSectionId);
        let targetCoordinate = targetSection.getBoundingClientRect();
        
         let id = setInterval(function(){
            window.scrollBy(0,50);
            	if(window.pageYOffset >= targetCoordinate['y']) {
                	clearInterval(id);
                return;
            }
             
        },20);
        
    });
}