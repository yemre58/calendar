const ulElement=document.createElement('ul');// const ile ulElement adında bir değişken oluşturduk ve document de de creat element il ul diy ebir etiket oluşturup içine atadık

const days= document.querySelector('.days');//dasy adında bir değişken tanımladık ve documentin  içeirndeki days a atadık

for(let i=1;i<=31;i++){//i değişkeni oluştrduk ve 1 den 31 e kadar for döngüsü ile dolaştırdık
    const listItem=document.createElement('li');//const ile listItem adında bir değişken oluşturduk ve documentte create element il ebir li etiketi oluşturup içerisie atadık 
    listItem.textContent=`${i}`;//listItem değişkeni  yani li textConten özelliği ile içerisine for ile oluturulan  atanır 
    ulElement.appendChild(listItem);// ul nin içeirsine li etiketi eklemeyi sağlar
}
days.appendChild(ulElement);//days öğesine ulElement değişkenine atanmış ul etikeni appenChil ile eklmeyi sağlar
if(!days.querySelector('ul')){//eğer days ın içerisinde ul etiketi yokmu diye bakar yoksa aşağıdaki kodu çalıştırı
    days.appendChild(ulElement);//dasy ın içerisne appendChil ile ul ekler
}
const daysList=document.querySelector('.days ul'); //const ile daysList adında bir değişken oluşturuluyor ve document tin days ul sine atanıyor

const   forwarButton=document.createElement('span');//fowarButton adlı bir değişken oluşturulur ve documentte create element ile bit sspan etiketi oluşturularak içerisine atılır
forwarButton.textContent='ileri';//fowar buttonun textine ileri yazılır
forwarButton.classList.add('navigation-button','forwarButton');//fowar buttona calss list add(eklemek)ile iki adet sınıf eklenir 


const backwarButton=document.createElement('span');// const  ile backwar button diye bir değişken oluşturuur ve document te de create elementile span etike oluşturulur ve içerisine atanır
backwarButton.textContent='geri';// textine geri yazılır 
backwarButton.classList.add('navigation-button','backwarButton');// calss list add ile iki adet sınıf eklenir 


const months=[
        'Ocak','Şubat','Mart','Nisan','Mayıs','HAziran','Temmuz','Ağustos','Eylül','Ekim','Kasım' ,'Aralık'    
    ];

let currentMonthsIndex=0;

function updateMonth(){
    const monthsHeader=document.querySelector('.date h1');
    monthsHeader.textContent=months[currentMonthsIndex];
}


forwarButton.addEventListener('click',()=>{
    if(currentMonthsIndex<months.length -1){
        currentMonthsIndex++;
        updateMonth();
    }
});

backwarButton.addEventListener('click',()=>{
      if(currentMonthsIndex>0){
        currentMonthsIndex--;
        updateMonth();
      }  

});








daysList.appendChild(backwarButton);
daysList.appendChild(forwarButton);






