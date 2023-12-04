function print(phone, city){
    phone = document.getElementById('phone');
    city = document.getElementById('city');
    var c = city.value;
    var p = phone.value;
    if (c==''  && p == ''){
    alert('Введіть номер телефону\nВведіть місто');
    }
    else if (p==''){
    alert('Введіть номер телефону');
    }
    else if (c==''){
    alert('Введіть назву міста');
    }
    else if (p.length>=12 || p.length<=5){
    alert('Уведіть номер (від 5 до 12 символів)')
    }
    else switch (c){
    case 'Київ':
      alert('+38044'+p);
      break;    
    case 'Первомайськ':
      alert('+3805161'+p);
      break;
    case 'Ковель':
      alert('+3803352'+p);
      break;
    case 'Дніпро':
      alert('+38056'+p);
      break;
    case 'Козятин':
      alert('+04342'+p);
      break;
    case 'Дрогобич':
      alert('+380324'+p);
      break;
    default:
      alert('Такого міста немає у списку(');
    }
}
let html="";
function clear() {
	document.getElementById("result").innerHTML = " ";
}