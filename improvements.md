## Предложения по коду

- Перенести на новый сборщик для удобства программирования
- Добавить Typescript
- Удалить ненужные комментарии в index.html 
- Удалить файлы, созданные при инициализации проекта index.css и т.д.
- Удалить повторяющиеся файлы logo
- Удалить неиспользующиеся тесты в index.js
- Вынести пути из файлы App.js в отдельную директорию navigation, соеденить его с routes.js и переписать на TS
- В App.js Перенести данные, передаваемые в MainView, внутрь самого компонента
- Отказаться от AntDesign и создать свои элементы
- Отказаться от Mobx в пользу Apollo из-за использования кэша и быстроты работы
- Вынести функции из src/client/index.js в src/hooks и переделать их в хуки, описав получаемые и выходные данные через ts, посылать запросы через apollo
- В файле src/components/Category.jsx описать типы props через TS 
- Переделать src/img в src/assets/images
- Отказаться от Views и сделать Pages
- Добавить alias для комопнентов, утилит, страниц, хуков, ассетов
- Сделать тесты для смены локации, удаления и т.д.
- Поменять архитектуру проекта в пользу современных архитектур React'a:
---
+ src
    + asets
      + images
      + svg
    + components
      + tests
      + ui
      + ux
      + Export.ts
    + pages
      + WinnerPage
        + components
          + PeopleWin
          + SpyWin
      + Export.ts
    + hooks
      + tests
      + useFetch.
      + Export.ts
    + layouts
      + tests
      + Navbar.
      + Export.ts
    + utils
      + tests
      + helpers.
      + Export.ts
    + router
      + routes.ts
    + types
      + Export.ts 
    + config
      + vite.
      + tsconfig.
