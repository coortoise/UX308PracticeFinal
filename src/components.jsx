import {hello, feet2acre, calculatemowtime, airquality, yeeha, slope} from './functions.js';

function Question1(){
    return <section>
1. Write a function that takes a _name_ as an argument and _returns a string_ that _contains "hello"_ and the name paramerer. Test at least 3 names. <br />*Note ... I solved this one already
      <h2>results</h2>
      <p>hello("Rich") == "{hello('Rich')}"</p>
      <p>hello("Bill") == "{hello('Bill')}"</p>
      <p>hello("Chris") == "{hello('Chris')}"</p>
    </section>;
}

function Question2(){
    return <section>
2. Write a program that converts square feet to acres. (squarefeet)
<h2>results</h2>
<p>feet2acre(43560) == "{feet2acre(43560)}"</p>
<p>feet2acre(87120) == "{feet2acre(87120)}"</p>
<p>feet2acre(130680) == "{feet2acre(130680)}"</p>
    </section>
}

function Question3(){
    return <section>
3. Given the&nbsp; width of a lawn in metres, length of a lawn in metres and the square metres cut per minute calculate the minutes it would take to mow that lawn. (length,width,cutpermin)
<h2>results</h2>
<p>calculatemowtime(1,1,1) == "{calculatemowtime(1,1,1)}"</p>
<p>calculatemowtime(10,10,1) == "{calculatemowtime(10,10,10)}"</p>
<p>calculatemowtime(100,100,1) == "{calculatemowtime(100,100,100)}"</p>
    </section>
}

function Question4(){
    return <section>
4. Compute the air quality given an air quality index. (aqi)
<h2>results</h2>
<p>airquality(50) == "{airquality(50)}"</p>
<p>airquality(100) == "{airquality(100)}"</p>
<p>airquality(150) == "{airquality(150)}"</p>
    </section>
}

function Question5(){
    return <section>
2. yee_ha takes an integer parameter and returns one of the following strings. (number)
<h2>results</h2>
<p>yeeha(3) == "{yeeha(3)}"</p>
<p>yeeha(7) == "{yeeha(7)}"</p>
<p>yeeha(21) == "{yeeha(21)}"</p>
<p>yeeha(1) == "{yeeha(1)}"</p>
    </section>
}

function Question6(){
    return <section>
6. Calculate the slope of a line. (x1,y1,x2,y2)
<h2>results</h2>
<p>slope(1,1,2,2) == "{slope(1,1,2,2)}"</p>
<p>slope(1,1,2,3) == "{slope(1,1,2,3)}"</p>
<p>slope(1,1,-1,-1) == "{slope(1,1,-1,-1)}"</p>
    </section>
}

export {Question1, Question2, Question3, Question4, Question5, Question6}