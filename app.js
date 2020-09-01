function AddTagsClick(){
    var inputField__value = document.getElementById("inputTags").value;         //get value from text field
    let arr = inputField__value.split(',');             //create array by text field
    for (let i = 0; i < arr.length; i++) {
        let value = parseInt(arr[i]);
        if(value > 0 || value < 0 || value == 0){
            let Tags = document.createElement("p");             //create p element for tags
            let createCloseIcon = document.createElement("i");          //create i element for close icon
            createCloseIcon.className = "fas fa-times close";
            createCloseIcon.id = 'CloseTags';
            createCloseIcon.style.fontSize = "11px";
            createCloseIcon.style.marginLeft = "10px"
            Tags.className = "tagStyle";
            Tags.innerText = value;
            Tags.id = 'tag';
            if(arr[i] < 0){
                Tags.style.backgroundColor = '#63c0da';
            }else{
                Tags.style.backgroundColor = '#d55253';
            }
            Tags.appendChild(createCloseIcon);
            document.getElementById("ShowTags").appendChild(Tags);
        }else{
            continue
        }
    }
    document.getElementById("inputTags").value = "";
}
$(document).ready(function(){
    $('#EditTags').click(function(){
        $(".close").css({
            'display': 'block'
        });
        $("#EditTags").css({
            'display': 'none'
        });
        $(".SaveBtn").css({
            'display': 'block'
        });
    })
})

$(document).ready(function(){
    $('.SaveBtn').click(function(){
        $(".close").css({
            'display': 'none'
        });
        $("#EditTags").css({
            'display': 'block'
        });
        $(".SaveBtn").css({
            'display': 'none'
        });
    })
})

$(document).ready(function(){
    $('.close').click(function(){
        $('.tagStyle').css({
            'display': 'none'
        })
    })
})