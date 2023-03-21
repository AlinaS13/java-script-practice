## Завдання 3

Напишите код, который работает так:
- пока промис выполняется, в p с Id="loader" выводится текст "...Loading books";
- если промис выполнен успешно - в ul с id="book-list" выводится список книг из массива ниже;
- если промис выполнен с ошибкой - в ul с id="book-list" выводится сообщение "Not found";
- независимо от того, как выполнился промис, сообщение "...Loading books" должно удалятся после выполнения промиса;
```
const books = [{
            "id": "u9kgwNWGi3uUUwh0b8V49",
            "title": "Eloquent JavaScript, Third Edition",
            "author": "Marijn Haverbeke"
        },
        {
            "id": "YxhM4QDxPeA3SmPHcEZPJ",
            "title": "Practical Modern JavaScript",
            "author": "Nicolas Bevacqua"
        },]
```



