/***
 * Include commented pseudocode to break down the logic for what you
are trying to accomplish in each example.
○ Use console logs to test your outputs and ensure your code works as
expected.
○ Follow all of the syntax rules and conventions you have learned about
in Unit 0.
○ Include comments to identify where the skill from each module is
represented in the code.
■ You’ll have comments to explain 6 total skills. One from each of
the following modules:
● Values, Data Types, and Operations
● Stringing Characters Together
● Control Structures and Logic
● Working with Loops
● Building Arrays
● Using Arrays 
 * 
 * ***/

// Prompt the user and validate user credentials
function user_authentication(userInfo)
{
    if (userInfo === true){console.log("authentication success!");}
    else { console.log("Failed login attempt")}
}
// Subscription service
function select_Subcription(sub_type, user_info)
{
        subscriptions = ["yearly","monthly","non-member"]
        for ( s of subscriptions)
            {
                if(sub_type === s ){console.log("Save subscription info")}
            }
}
// Checkout books
function CheckoutBooks(){bookname, user}
{
    user = {name:"xxx", book:""}
    user.book = bookname;
}
// List books
function getBooks(){
    books = [
        'Othello',
        'Hamilton',
        'Pride and Prejudice',
        'Monk who sold his ferrari',
        'Sherlock Holmes'
    ]
    return books;
}
// function show book info
function getBookInfo(id){
    book = {id:123232, name:"Penguins in Madagascar",author:"David",Year:2002}
    if(id === book.id){
        return book;
    }
    else{
        return "Book not Found!";
    }
}

