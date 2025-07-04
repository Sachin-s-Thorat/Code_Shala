const allQuizData = [
  // HTML Questions
  { topic: "html", question: "What does HTML stand for?", a: "Hyper Text Markup Language", b: "Home Tool Markup Language", c: "Hyperlinks and Text Markup Language", d: "Hyper Tool Multi Language", correct: "a" },
  { topic: "html", question: "Choose the correct HTML element for the largest heading:", a: "<heading>", b: "<h1>", c: "<head>", d: "<h6>", correct: "b" },
  { topic: "html", question: "What is the correct HTML element for inserting a line break?", a: "<lb>", b: "<br>", c: "<break>", d: "<line>", correct: "b" },
  { topic: "html", question: "Which tag is used to create a hyperlink in HTML?", a: "<a>", b: "<link>", c: "<href>", d: "<hyper>", correct: "a" },
  { topic: "html", question: "Which HTML element is used for inserting an image?", a: "<img>", b: "<src>", c: "<image>", d: "<pic>", correct: "a" },
  { topic: "html", question: "Which attribute is used in HTML to define inline styles?", a: "style", b: "class", c: "font", d: "styles", correct: "a" },
  { topic: "html", question: "Which tag is used to define a table row in HTML?", a: "<tr>", b: "<td>", c: "<table>", d: "<th>", correct: "a" },
  { topic: "html", question: "Which tag is used to define a list item?", a: "<li>", b: "<ul>", c: "<ol>", d: "<item>", correct: "a" },
  { topic: "html", question: "Which tag is used to create a dropdown list?", a: "<select>", b: "<dropdown>", c: "<list>", d: "<option>", correct: "a" },
  { topic: "html", question: "Which attribute is used to uniquely identify HTML elements?", a: "id", b: "class", c: "name", d: "key", correct: "a" },

  // CSS Questions
  { topic: "css", question: "What does CSS stand for?", a: "Colorful Style Sheets", b: "Creative Style System", c: "Cascading Style Sheets", d: "Computer Style Sheets", correct: "c" },
  { topic: "css", question: "Which is the correct CSS syntax?", a: "body {color: black;}", b: "{body: color=black;}", c: "{body;color:black;}", d: "body:color=black;", correct: "a" },
  { topic: "css", question: "Which property is used to change the background color?", a: "color", b: "background-color", c: "bgcolor", d: "background", correct: "b" },
  { topic: "css", question: "Which CSS property controls the text size?", a: "text-size", b: "font-size", c: "font-style", d: "text-style", correct: "b" },
  { topic: "css", question: "How do you make text bold in CSS?", a: "font-weight: bold;", b: "text-style: bold;", c: "font: bold;", d: "weight: bold;", correct: "a" },
  { topic: "css", question: "How do you add a background image in CSS?", a: "background-image", b: "img-background", c: "image", d: "bg-image", correct: "a" },
  { topic: "css", question: "Which property is used to align text to the center?", a: "text-align", b: "align", c: "center-text", d: "text-center", correct: "a" },
  { topic: "css", question: "How do you select an element with id 'demo'?", a: "#demo", b: ".demo", c: "demo", d: "*demo", correct: "a" },
  { topic: "css", question: "Which symbol is used for class selector in CSS?", a: ".", b: "#", c: "*", d: "&", correct: "a" },
  { topic: "css", question: "Which unit is used for relative font size in CSS?", a: "em", b: "px", c: "cm", d: "mm", correct: "a" },

  // JavaScript Questions
  { topic: "js", question: "Inside which HTML element do we put the JavaScript?", a: "<js>", b: "<scripting>", c: "<script>", d: "<javascript>", correct: "c" },
  { topic: "js", question: "Which keyword is used to declare a variable in JavaScript?", a: "var", b: "int", c: "let", d: "Both A and C", correct: "d" },
  { topic: "js", question: "What does '===' mean in JavaScript?", a: "Assign value", b: "Equals value only", c: "Equals value and type", d: "Compare strings", correct: "c" },
  { topic: "js", question: "Which method is used to display data in the browser console?", a: "console.log()", b: "print()", c: "write()", d: "display()", correct: "a" },
  { topic: "js", question: "How do you write a comment in JavaScript?", a: "// comment", b: "<!-- comment -->", c: "# comment", d: "** comment **", correct: "a" },
  { topic: "js", question: "Which symbol is used for single-line comments in JavaScript?", a: "//", b: "/*", c: "--", d: "##", correct: "a" },
  { topic: "js", question: "What will typeof null return?", a: "object", b: "null", c: "undefined", d: "number", correct: "a" },
  { topic: "js", question: "How do you define a function in JavaScript?", a: "function myFunc() {}", b: "def myFunc() {}", c: "func myFunc() {}", d: "fn myFunc() {}", correct: "a" },
  { topic: "js", question: "Which operator is used to assign a value to a variable?", a: "=", b: "==", c: "===", d: "+=", correct: "a" },
  { topic: "js", question: "What is the correct syntax for an if statement in JavaScript?", a: "if (x > y)", b: "if x > y then", c: "if x > y: end if", d: "if x > y then do", correct: "a" }
];
