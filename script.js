//! <<<<<<<<< Global Variables >>>>>>>>

let input = document.querySelector('#inputBox');


let buttons = document.querySelectorAll('.btn');


let string = '';


let arr = Array.from(buttons);



//! <<<<<<<<<< Functions >>>>>>>>>>> 


arr.forEach(button => {


    button.addEventListener('click', (e) => {


        if (e.target.innerHTML == '='){


            if (input.value == '') {


                string = '0';


                input.value = string;

            } else {


                string = eval(string.replace('%', '/100'));
    
    
                input.value = string;

            }



        }


        else if (e.target.innerHTML == 'C') {

            string = '';


            input.value = string;


        }


        else if (e.target.innerHTML == 'DEL') {


            string = string.substring(0, string.length - 1);


            input.value = string;

        }


        else {


            string += e.target.innerHTML;
            
    
            input.value = string;
        }


    })
})