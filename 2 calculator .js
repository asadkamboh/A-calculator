let string = "";
let buttnons = document.querySelectorAll('.button');
Array.from(buttnons).forEach((buttnons) => {
    buttnons.addEventListener('click', (elements) => {
        if (elements.target.innerHTML == '=') {

            string = eval(string);
        }
        else if (elements.target.innerHTML == 'AC') {
            string = "";

        }
        else if (elements.target.innerHTML == 'DE') {
            string = string.substring(0, string.length - 1);

        }
        else {
            console.log(elements.target.innerHTML);
            string = string + elements.target.innerHTML;
        }


        document.querySelector('input').value = string;



    })
});
