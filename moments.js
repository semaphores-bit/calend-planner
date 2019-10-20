setInterval(function(){
    console.log("Running!")
    document.getElementById("currentDay").innerHTML = new Date()}, 1000)


function handleClick(event) {
       event.preventDefault();
        var description = event.target;
        console.log(description);
}


$(document).ready(function() {
    var hour = moment(new Date()).format('HH');
    console.log(typeof hour);

    for (var i = 9; i < parseInt(hour) + 1; i++) {
        if(i < parseInt(hour)) {
            $(`#${i}`).removeClass("future")
            $(`#${i}`).addClass("past")         
            
        } else if (i === parseInt(hour)) {
            $(`#${i}`).removeClass("future")
            $(`#${i}`).removeClass("past")
            $(`#${i}`).addClass("present")
        }
        else {
           $(`#${i}`).removeClass("past")
           $(`#${i}`).removeClass("present")
           $(`#${i}`).addClass("future")
        }
    }
        
    for (var i = 9; i < 18; i++){
        $(`#${i}`).attr("placeholder", localStorage.getItem(`${i}`))
    }
    
    
    $(".saveBtn").on("click", function(){
        var content = $($(this).siblings("input"))[0].value;
        var id = $($($(this).siblings("input"))[0]).attr("id");
        localStorage.setItem(`${id}`, content)
    })
});
   


