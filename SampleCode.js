const prompt = require("prompt-sync")();
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
function CheckoutBooks(bookname, user)
{
    user = {name:"xxx", book:""}
    user.book = bookname;
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


function createUserProfile(username, email)
{
    let user = {'name':username, 'email':email};
    return user;
}
// List books
function fetchBookList()
    {
        let bookList = [
            {genre: 'Romance',title:'Pride and Prejudice' ,author: 'Jane Austen'},
            {genre: 'Mystery',title:'The Locked Room ',author: 'Edgar Allan Poe'},
            {genre:  'Fantasy',title:'The Hobbit', author:'J.R.R. Tolkien'},
            {genre: 'Science Fiction',title: 'Dune',author:'Frank Herbert'},
                     
       ]
       return bookList;
    }

while(true)
    {
        console.log(`*********************************\nWELCOME TO THE E-READING PLATFORM\n*********************************`);
        let option = prompt('Do you want to continue or exit? ');
        if(option == 'continue')
            {
                let user_name = prompt(`Please create a user account,enter your name: `);
                let email = prompt('Enter your email: ');
                let userInfo = createUserProfile(user_name,email);

                if(userInfo !=null){
                    console.log(`Hello, ${userInfo.name} !`);
                    let view_books = prompt("Would you like to view a list of available books ? Yes or No : ");
                    if(view_books.toLowerCase() == 'yes')
                        {
                                let all_books = fetchBookList();
                                console.log(`Name\t\t\tGenre\t\t\tAuthor\n------------------------------------------------------`);
                                for (book of all_books)
                                {
                                    console.log(`${book.title}\t${book.genre}\t\t\t${book.author}\n`);
                                    
                                }
                                let choice = prompt("Enter the book name would like to read: ");
                        }
                    else 
                    {
                        break;
                    }
                }
            }
        else{
            break;
        }
    }

