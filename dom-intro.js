(function () {
    function clickHandler(message){
        console.log('hi......' + message)
    }

    // Get a reference to my Button
    let myButton = document.getElementById('myButton');
    myButton.addEventListener('click', function(){clickHandler('hi frim life')});



})();