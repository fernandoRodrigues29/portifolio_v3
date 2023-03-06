function revelacao(){
    let reveal = document.querySelectorAll('.animationConteiner > .card');
    let revealContact = document.querySelectorAll('.animationConteinerContact > .card');
        // services
        for (var i = 0; i < reveal.length; i++) {
            var windowHeight = window.innerHeight;
            var revealTop = reveal[i].getBoundingClientRect().top;
            var revealPoint = 150;
            console.log('reveal services top ',(revealTop));
            // if(revealTop < windowHeight - revealPoint){
            if(revealTop < 580){    
                reveal[i].classList.add('show');
            }else{
                reveal[i].classList.remove('show');
            }
        }
        // contact
        for (var i2 = 0; i2 < revealContact.length; i2++) {
            var windowHeight2 = window.innerHeight;
            var revealTop2 = reveal[i2].getBoundingClientRect().top;
            var revealPoint2 = 150;
           
            if(revealTop2 < -1200){
                revealContact[i2].classList.add('show');
            }else{
                revealContact[i2].classList.remove('show');
            }
        }
        countDowCounter();
}
function clickMenu(){
    let menu = document.querySelector('.mobile-menu');
    let menuItem = document.querySelectorAll('.itemMenuMobile');

        menu.addEventListener('click',()=>{
            let menu_area = document.querySelector('.menuArea');
                menu_area.classList.toggle('active');
        });
         for (var i3 = 0; i3 < menuItem.length; i3++) {
            menuItem[i3].addEventListener('click',()=>{
                let menu_area = document.querySelector('.menuArea');
                    menu_area.classList.toggle('active');
            });
         }
}
//countdown
function countDowCounter(){
    let valDisplay = document.querySelectorAll('.number');
    let interval = 500;
    
    valDisplay.forEach((valDisplay)=>{
        let fristValue = 0;
        let endValue = parseInt(valDisplay.getAttribute("data-val"));
        let duration = Math.floor(interval/endValue);
        let counter = setInterval(()=>{
            fristValue +=1;
            valDisplay.textContent=`+ ${fristValue}`;
            if(fristValue == endValue){
                clearInterval(counter);
            }
        }, duration);
    });

}
//countdown
//evento
window.addEventListener('scroll',revelacao);
clickMenu();