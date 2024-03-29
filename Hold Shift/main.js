const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
    //check if they had shift key down
    //and check that they are cheking it
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        //go ahead and do what we please
        //loop over every single checkbox
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if (checkbox == this || checkbox === lastChecked) {
                inBetween = !inBetween;
            }

            if (inBetween) {
                checkbox.checked = true;
            }
        })
    }
    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));