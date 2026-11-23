document.getElementById("start").addEventListener("click", function () {

    let name = document.querySelector('input[type="text"]').value;
    let roll = document.querySelectorAll('input[type="text"]')[1].value;
    let section = document.querySelector('input[name="Section"]:checked');

    if (name === "" || roll === "" || section === null) {
        alert("Please fill all details");
        return;
    }


    document.getElementById("main").innerHTML = `
        <h1>FSD Quiz</h1>

        <p>1. HTML stands for?</p>
        <input type="radio" name="q1" value="1"> Hyper Text Markup Language<br>
        <input type="radio" name="q1" value="0"> High Text Machine Language
         <br><br>
        <p>2. CSS is used for?</p>
        <input type="radio" name="q2" value="1"> Styling a webpage<br>
        <input type="radio" name="q2" value="0"> Creating database
          <br><br>
        <p>3. JavaScript is used for?</p>
        <input type="radio" name="q3" value="1"> Making webpage interactive<br>
        <input type="radio" name="q3" value="0"> Only designing
           <br><br>
        <p>4. Which tag is used for the largest heading?</p>
        <input type="radio" name="q4" value="1"> &lt;h1&gt;<br>
        <input type="radio" name="q4" value="0"> &lt;h6&gt;
          <br><br>
        <p>5. Which keyword is used to declare a variable in JavaScript?</p>
        <input type="radio" name="q5" value="1"> let<br>
        <input type="radio" name="q5" value="0"> print

        <br><br>
        <button id="submit">Submit Quiz</button>
    `;

    document.getElementById("submit").addEventListener("click", function () {

        let marks = 0;

        for (let i = 1; i <= 5; i++) {
            let answer = document.querySelector(
                'input[name="q' + i + '"]:checked'
            );

            if (answer) {
                marks += Number(answer.value);
            }
        }

        alert("Your Marks: " + marks + " / 5");
    });
});