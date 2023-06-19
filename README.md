# kollok

## Установка
Для установки всех необходимых компонент необходимо запустить следующие команды:
``sh
npm init -y
npm install express
``
После этого приложение будет работать на 3000 порту

## Обрабатываемые запросы
GET /projects: Получение списка всех проектов. Ответ должен включать название проекта, описание, дедлайн и список участников.
POST /projects: Создание нового проекта. Запрос должен включать название, описание, дедлайн и ID участников.
GET /projects/{id}: Получение информации о конкретном проекте, включая список задач.
PUT /projects/{id}: Обновление информации о проекте. Запрос может включать новое название, описание, дедлайн и список участников.
DELETE /projects/{id}: Удаление проекта.