// This function builds a 3 word crossword puzzle 
function loadCrosswordPuzzle(){
    // this is the  the table on the html page
    var table = document.getElementById ("puzzle")
    // an array that holds the word for the crossword puzzle 
    var arrWords = new Array ("Javascript", "cascade", "html", "Kevin")

    // this is the 2nd row on the table
    var tr = table.rows[1];
    /*this for loop prints out the first word in the array
     on the 2nd row of the table*/
    for(var i=0; i<arrWords[0].length; i++){
        //this is the cell that will have a letter added to it
        var cell = tr.cells[i];
        // nnText allows you to change the text of the cell
        cell.innerText = arrWords[0][i];
    }

    /*this for loop prints out the second word in the array
     on the 2nd row of the table*/
for(var i=0; i<arrWords[1].length; i++){
        //each time the loop runs, we need to change the current row
        var trow = table.rows[i];
        //this is the 2nd column in the current row
        var cell = trow.cells[1];
        cell.innerText = arrWords[1][i];
    }

    /*this for loop prints out the third word in the array
     on the 10th row of the table*/
for(var i=0; i<arrWords[2].length; i++){
        //each time the loop runs, we need to change the current row
        var trow = table.rows[i];
        //this is the 10th column in the current row
        var cell = trow.cells[9];
        cell.innerText = arrWords[2][i];
    }
    var tr = table.rows[6];
    for(var i=0; i<arrWords[3].length; i++){
        //this is the cell that will have a letter added to it
        var cell = tr.cells[i];
        // nnText allows you to change the text of the cell
        cell.innerText = arrWords[3][i];
    }

}