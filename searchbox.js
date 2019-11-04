//declare variables

const $SearchBox = $('#searchbox');

let UserInput = '';
let DataTitle = '';

// look for results when the user starts typen
$SearchBox.keyup(function(){

    //Gets the value of the user input once they start typing in the search box
    UserInput = $SearchBox.val();
    
    /**
      When there is input, start filtering images. We loop through the a element's data-title attribute to see if they contains the inserted value. The data-title and the inserted value is converted to all lower case letters.
     */
    $("a").each(function() {
        if(UserInput !== ''){
            DataTitle = $(this).attr('data-title').toLowerCase();
            if(DataTitle.indexOf(UserInput.toLowerCase()) > -1){
                $(this).show();
            } else{
                $(this).hide();
            }
        }else{
            $(this).show();
        }
    })
});
