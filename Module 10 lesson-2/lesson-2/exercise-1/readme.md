## Завдання 1

Сделайте пагинацию книг -  при отправке AJAX-запроса по адресу по адресу `https://books-store-zcsi.onrender.com/api/books?page=1&limit=3` вам вернется объект вида:
```
total: 12,
page: 1,
items: []
```
Где `total` - общее количество книг в базе, `page` - текущая страница, а `items` - список книг в ответе. Выведите книги в ul с id="books", а пагинацию - в div с id="books-pagination". Если при запросе произошла ошибка, выведите ее в div с id="books-error".
Для решения используйте fetch.


