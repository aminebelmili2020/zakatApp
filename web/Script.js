/*function{
    
}
let money = document.getElementById("money")
let zakat = document.write(0.025 * money);
*/
function calcZakat(){
    let money = document.getElementById('Money').value;

    if (money >= 750000) {
        let zakat = document.getElementById('zakati').value = 0.025 * money ;
    }
    else{
        document.getElementById('zakati').value = 'مالك لم يكتمل النصاب'
    }
}