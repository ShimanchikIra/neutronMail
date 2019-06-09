 let l = [//массив с цитатами
        {
            quote: "1: A new email service being developed by a group from MIT and CERN promises to bring secure,\n" +
                "encrypted email to the masses and keep sensitive information away from prying eyes.",
            author: " - Boston Herald 1"
        },
        {
            quote: "2: A new email service being developed by a group from MIT and CERN promises to bring secure,\n" +
                "encrypted email to the masses and keep sensitive information away from prying eyes.",
            author: " - Boston Herald 2"
        },
     {
         quote: "3: A new email service being developed by a group from MIT and CERN promises to bring secure,\n" +
             "encrypted email to the masses and keep sensitive information away from prying eyes.",
         author: " - Boston Herald 3"
     }
    ];
 var p=document.getElementById('slider').children[0];//получвем элемент, в который записывается цитата
 var s=document.getElementById('slider').children[1];//получвем элемент, в который записывается автор
 var n=document.getElementById('numQuotes').children;//получвем массив элемент radio

 p.innerHTML = l[0]['quote'];//при загрузке вставляем в HTML первую цитату
 s.innerHTML=l[0]['author'];//и ее автора
 n[0].checked="checked";// и выбираем первый radio
 var i=1;//счетчик для номера цитаты

 //функция, которая отслеживает изменение radio и записывает цитату, номер которой мы выбрали
 for(let j=0; j<n.length; j++) {
     n[j].onchange = () => {
         p.innerHTML = l[j]['quote'];
         s.innerHTML=l[j]['author'];
         i=j;
     };
 }
 //функция, которая меняет цитаты на странице (используется в таймере)
 function slider(arr) {
        if (i!==arr.length){
            p.innerHTML = l[i]['quote'];
            s.innerHTML=l[i]['author'];
            n[i].checked="checked";
            return i++;

        } else {
            p.innerHTML = l[0]['quote'];
            s.innerHTML=l[0]['author'];
            n[0].checked="checked";
            return i=0;
        }

    }

 setInterval(slider, 5000, l);