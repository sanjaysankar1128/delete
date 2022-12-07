
function myFunction(){

    $.ajax({
        url: "https://634e4a6af34e1ed826877685.mockapi.io/students/19",
        method: 'DELETE',
        success: function () {
            alert('record has been deleted');
            getAllBooks();
        }
    });
    
    }