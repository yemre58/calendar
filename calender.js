







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





const months= [// months adında bir dizi oluşturuldu ve içerisine aylar eklendi
        'Ocak','Şubat','Mart','Nisan','Mayıs','HAziran','Temmuz','Ağustos','Eylül','Ekim','Kasım' ,'Aralık'    
    ];

let currentMonthsIndex=0;// let ile currentMonthIndex değişkeni tanımlandı ve değeri 0 olarak verildi

function updateMonth(){// updateMont adında bir function oluşturuldu -ay güncelle
    const monthsHeader=document.querySelector('.date h1');//monthsHeader adında bir değişken oluşturdu ve document in date h1  etieketine atandı
    monthsHeader.textContent=months[currentMonthsIndex];//monthheader değişkenin (ay başlığı) textine months dizisindeki içerisnde bulunduğu ay yazılır
}


forwarButton.addEventListener('click',()=>{// fowarButtona addEventListener ile dinleme olayı ekleniyor b
   
    if(currentMonthsIndex<months.length -1){//eğer currenentMonstIndex değişkeni months -1 den küçükse ayı bir artırırı -1 dizilerde 0 bir oldugu iççin
        currentMonthsIndex++;// currentMonthIndex i bir arttır
    }
        else{
            currentMonthsIndex=0;
        }
        updateMonth();//ayı güncellee fonkdiyonunu çagırarak yeni ayı yazdırır
    
});

backwarButton.addEventListener('click',()=>{// butona tıklandığında ayı değiştirmek için dinleme olayı eklenmiştir
     
    if(currentMonthsIndex>0){//currenthMOnthsIndex 0 dan büyükse eğer 
        currentMonthsIndex--;//bir azalt 
    }
    else{
        currentMonthsIndex=months.length -1;
    }
        updateMonth();//updateMonths functionu  çağır
      

});

    daysList.appendChild(backwarButton);//  dasylist (ul alt öğesine li ye ) e appendChild ile backwarButton değişkeni atanır 
    daysList.appendChild(forwarButton);// daysliste appanedChild ile fowarButton değişkeni atanır

    const currentDate=document.querySelector('.date h1');
    let date=new Date();
    let currYear=date.getFullYear();
    let currMonth=date.getMonth();
    const renderCalendar=()=>{
        currentDate.innerText=`${currMonth} ${months[currentMonthsIndex]} ${currYear} `;
    }
    renderCalendar();
    
    