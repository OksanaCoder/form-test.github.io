var btn = document.querySelector('.add-val'); 
btn.addEventListener('click', change_progress);
function change_progress() {
        var elem = document.getElementById("myBar");
       var  val = parseInt(document.getElementById("number").value);
        var message = document.querySelector('.output'); 
        var width = 0;
        var id = setInterval(frame, val);
        function frame() {
            if (width >= val) {
                clearInterval(id);
            } else {
                console.log(message);
                width++; 
                elem.style.width = width + '%';
                elem.innerHTML = width * 1  + '%';
                message.innerHTML = val + '%';
                
             }
              
        }  

    }

