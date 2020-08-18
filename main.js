$(function() {

    // console.log( "ready!" );

    debugger;

    addEvents()
})

function addEvents(){

    let $buttonElement = $("#submitButton")

    $buttonElement.on("click", function(event) {

        // console.log(event);

        let $firstNameElement = $("#firstName");

        // console.log($firstNameElement.val())

        if ($firstNameElement.val() === "") {
            console.log("Empty value");
            $firstNameElement.addClass("invalidInput");
        }
        else {
            // let $newElement = $(`<div>Hello, ${firstNameElement.val()} </div>`);
            let $newElement = $("<div> Hello, </div>");
            console.log($newElement.html());
            $newElement($newElement.html + $firstNameElement.val());
            // let $newElement = $("<div>Hello, " + $firstNameElement.val() + " </div>");
            $("form").append($newElement);
            // $newElement.append($firstNameElement.val());
            console.log($newElement);
            console.log("Non empty value");
            $firstNameElement.removeClass("invalidInput");
        }

    });
    // console.log($buttonElement)
}

function pow(x, n) {
    if (n == 1) {
      return x;
    } else {
      return x * pow(x, n - 1);
    }
  }
  
  alert( pow(2, 3) ); // 8