let array = []
// let arrayPreShowF = []
// let arrayPreShowT = []
function toArray (obj) {
    let i = 0
    for (i in obj) {
      if (obj[i] && i < 10) {
        array.push(obj[i])
      }
    }
  }

//   function toArrays (data) {
//     const reg = new RegExp(/[A-Za-zА-Яа-я]{2,}/)
//     for (let i = 0; i < data.length; i++) {
//     //   if (data[i].status === 1) {
//     //     arrow.showMessage.push(data[i])
//     //   }
//       if (reg.test(data[i].talon)) {
//         arrayPreShowF.push(data[i])
//       } else {
//         arrayPreShowT.push(data[i])
//       }
//     }
// }
    
//     fetch('https://api.sdo.mpgu.org/queue')
//     .then(r => r.json())
//     .then(json => {
//         console.log(json, typeof json)
//         toArray(json)
//         console.log(array, typeof array)
//         toArrays(json)
//         console.log(arrayPreShowF, arrayPreShowT)
//         console.log(array[1].talon, array[1].status)
//     }
//     )

// https://tablo-83a92-default-rtdb.firebaseio.com/queue.json

// function CreateRequest()
// {
//     var Request = false;

//     if (window.XMLHttpRequest)
//     {
//         //Gecko-совместимые браузеры, Safari, Konqueror
        
//         Request = new XMLHttpRequest();
//     }
//     else if (window.ActiveXObject)
//     {
//         //Internet explorer
//         try
//         {
          
//              Request = new ActiveXObject("Microsoft.XMLHTTP");

//         }    
//         catch (CatchException)
//         {
          
//              Request = new ActiveXObject("Msxml2.XMLHTTP");
//         }
//     }
 
//     if (!Request)
//     {
//         alert("Невозможно создать XMLHttpRequest");
//     }
    
//     return Request;
// } 

//     var module_contacts_list = (function() {
//         setInterval(function() 
//         {
//             function ajax(url, callback) {
//               let xhr = CreateRequest()
//                 // var xhr = new XMLHttpRequest();
//                 xhr.open('GET', url);
//                 xhr.onreadystatechange = function() {
//                   if (this.readyState == 4) {
//                     if (this.status == 200)
//                       callback(JSON.parse(this.responseText));
//                   }
//                 };
//                 xhr.send(null);
//               }
      
//                 array = []
//               ajax('https://api.sdo.mpgu.org/queue', function(data) {
//                   /*alert(JSON.stringify(data));*/
//                   var contacts_list = document.getElementById('contacts_list');
//                 toArray(data)
//                   contacts_list.innerHTML = array.map(function(el, index){
//                       let bgBlue="bgBlue"
//                       if(index < 5 && index % 2 !== 0) {
//                           bgBlue = ""
//                       } else if(index > 4 && index % 2 === 0) {
//                           bgBlue = ""
//                       }
      
//                           return "<div class='talon "+bgBlue+"' name='"+el.talon+"'>"+
//                           "<div class='person'>"+
//                           JSON.stringify(el.talon).split('"').join('')+
//                           "</div>"+
//                           "<img class='img' src='./assets/arrow.png' />"+
//                           "<div class='table'>"+
//                           JSON.stringify(el.number_of_table).split('"').join('')+
//                           "</div>"+
//                           "</div>";
                    
                    
//                   }).join('');
//                 });
//         }, 5000)
        
//       })();

window.onload = function() {
  console.log('load')
  // document.getElementById('contacts_list').innerHTM = "<div> Talon </div>";
  document.getElementById('myAnchor').innerHTML="<h1>"+"Hello world"+"</h1>";
 
}


    

