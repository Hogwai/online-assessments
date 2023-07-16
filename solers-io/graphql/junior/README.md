# GraphQL Query Books 

## Instructions
Using GraphQL, write a query to return a book with an argument of ISBN which is equal to the string 0743273567. 

A book is retrieved from the database and converted into an object with the following structure:

|ISBN |```<string>```|
|-----|-------|
|title|```<string>```|
|published|```<string>```|
|author|```<string>```|
|pages|```<int>```|
|publisher|```<string>```|
|genres|```<array<string>>```|
|reviews|```<array<review object>>```|

For the book query, return the fields in the following order:

title, author, published, publisher, pages, genres, reviews

A review object has the fields: author, date, and content. 

Finally, make sure to set a limit of 1 for the reviews field.