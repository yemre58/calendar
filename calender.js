

const ulElement=document.createElement('ul');

const days= document.querySelector('.days');




days.appendChild(ulElement);
if(!days.querySelector('ul')){
    days.appendChild(ulElement);
}

const daysList=document.querySelector('.date '); 

const   forwarButton=document.createElement('span');
forwarButton.textContent='>';
forwarButton.classList.add('navigations','forwarButton'); 
forwarButton.id='fowar';

const backwarButton=document.createElement('span');
backwarButton.textContent='<'; 
backwarButton.classList.add('navigations','backwarButton'); 
backwarButton.id = 'back';


const months= [
        'Ocak','Şubat','Mart','Nisan','Mayıs','HAziran','Temmuz','Ağustos','Eylül','Ekim','Kasım' ,'Aralık'    
    ];


let currentMonthsIndex=9;
function updateMonth(){
    
    const monthsHeader=document.querySelector('.date h1');
if(monthsHeader){
    monthsHeader.textContent=months[currentMonthsIndex];
                    }
}


forwarButton.addEventListener('click',()=>{


        if(currentMonthsIndex<months.length -1){
            currentMonthsIndex++;

        }
            else{
                currentMonthsIndex=0;
                currYear++;
            }
        updateMonth();
        currMonth=currentMonthsIndex;
        renderCalendar();
        updateCalendarDays();
        updateMouseOverEvent();
        
        
    });

backwarButton.addEventListener('click',()=>{
    

    if(currentMonthsIndex>0){
        currentMonthsIndex--; 
    }
    else{
        currentMonthsIndex=months.length -1;
        currYear--;
    }
        updateMonth();
        currMonth = currentMonthsIndex;
    renderCalendar();
    updateCalendarDays();
updateMouseOverEvent();



});

daysList.appendChild(backwarButton); 
daysList.appendChild(forwarButton);

const currentDate=document.querySelector('.date h1');
let date=new Date();
let currYear=date.getFullYear();
let currMonth=date.getMonth();
let currdays=date.getDate();


let today = new Date(); 

const renderCalendar = () => {
    if (currdays === today.getDate() && currMonth === today.getMonth() && currYear === today.getFullYear()) {
        currentDate.textContent =`${currdays} ${months[currentMonthsIndex]} ${currYear}`;
    } else {
        currentDate.textContent = `${currentMonthsIndex + 1} ${months[currentMonthsIndex]} ${currYear}`;
    }
}

                
            
renderCalendar();



  
function getFirstDayOfMonth() {
    const firstDayOfMonth = new Date(currYear, currentMonthsIndex, 7);
    return firstDayOfMonth.getDay(); 
  }
  
    function updateCalendarDays() {
        const ulElement = document.querySelector('.days ul');
        ulElement.innerHTML = '';
        const totalDays = new Date(currYear, currentMonthsIndex + 1, 0).getDate();
        const startingDay = getFirstDayOfMonth();
    
        for (let i = 0; i < startingDay; i++) {
        const emptyListItem = document.createElement('li');
        ulElement.appendChild(emptyListItem);
        }
        
        for (let i = 1; i <= totalDays; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = i;
        ulElement.appendChild(listItem);
        }
      
        for (let i = 11; i > startingDay; i--) {
            const emptyListItem = document.createElement('li');
            ulElement.appendChild(emptyListItem);
            }
    }
    
  updateCalendarDays();
  
  

   
  const thisMonth = document.querySelectorAll('.days');
  
  thisMonth.forEach(monthDiv => {
    const monthListItems = monthDiv.querySelectorAll('ul li');
    monthListItems.forEach(item => {
      item.addEventListener('mouseover', function () {
        item.style.backgroundColor = 'red';
      });
  
      item.addEventListener('mouseout', function () {
        item.style.backgroundColor = '';
      });
    });
  });





const listItems = document.querySelectorAll('.days ul li');

    listItems[currdays +5].classList.add('today');
    
     
    const thismonth = document.querySelectorAll('.days');

    thismonth.forEach(monthDiv => {
        const monthListItems = monthDiv.querySelectorAll('ul li');
        monthListItems.forEach(item => {
            item.addEventListener("mouseover", function () {
            
                item.style.backgroundColor = "red";
            });

            item.addEventListener("mouseout", function () {
                
                item.style.backgroundColor = "";
            });
        }); 
    });

function updateMouseOverEvent() {
    const allMonths = document.querySelectorAll('.days ul');

    allMonths.forEach(monthDiv => {
        const monthListItems = monthDiv.querySelectorAll('li');
        monthListItems.forEach(item => {
            item.addEventListener("mouseover", function() {
                item.style.backgroundColor = "red";
            });

            item.addEventListener("mouseout", function() {
                item.style.backgroundColor = "";
            });
        });
    });
    
}
