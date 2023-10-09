var customerName = "bob"
const leastFavoriteCustomer= "sadam"
function setBestCustomer() {
    bestCustomer= 'not bob'
}
 
function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
}
    
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer= "mwende"
}

function upperCaseCustomerName (){
    if(typeof customerName==='string'){
        customerName=customerName.toUpperCase()
    }
}