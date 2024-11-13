const buttonTwo = document.querySelector('.btn-2');
 
function alertBtn() {
        alert('I Love Javascript');
    
};

buttonTwo.addEventListener('click', alertBtn);

const revealBtn = document.querySelector(`.reveal-btn`);

const hiddenContent = document.querySelector(`.hidden-content`);

function revealCotent() {
        if(hiddenContent.classList.contains(`reveal-btn`)
        )
        
                {
                        hiddenContent.classList.contains(`reveal-btn`)
                }else {
                        hiddenContent.classList.remove(`reveal-btn`)
                }

                revealBtn.addEventListener('click',revealCotent)
               
}
 let btn = document.querySelector(`#name`)