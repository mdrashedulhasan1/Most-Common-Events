    //Step1: Add Button Event Handler
    document.getElementById('post-comment-btn').addEventListener('click', function(){
        //Step2:Get User Comment
        const userCommentField = document.getElementById('user-comment-field');
        const userComment = userCommentField.value;
        //Step3:Create Paragraph
        const p = document.createElement('p');
        p.innerText = userComment;
        //Step4:Append the Comment
        const parent = document.getElementById('container');
        parent.appendChild(p);
        //Step5:Clean the Comment Box
        userCommentField.value = '';
    })