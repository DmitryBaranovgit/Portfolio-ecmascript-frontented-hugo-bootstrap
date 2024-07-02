---
title: "Exercise 06 - News - RSS Feeds"
date: 2024-07-01T16:00:15Z
draft: false
weight: 30

scripts:
    - /js/01/exercise-06-news-rss-feeds.js
---


## Exercise 06 - News - RSS Feeds

* Формулировка задачи
* Моё описание задачи
* Почему
* [Ссылка на скрипт](/js/01/exercise-06-news-rss-feeds.js)

---
<style>
/* DivTable.com */
.divTable{
    display: table;
    width: 100%;
}
.divTableRow {
    display: table-row;
}
.divTableHeading {
    background-color: #EEE;
    display: table-header-group;
}
.divTableCell, .divTableHead {
    border: 1px solid #999999;
    display: table-cell;
    padding: 3px 10px;
}
.divTableHeading {
    background-color: #EEE;
    display: table-header-group;
    font-weight: bold;
}
.divTableFoot {
    background-color: #EEE;
    display: table-footer-group;
    font-weight: bold;
}
.divTableBody {
    display: table-row-group;
}
</style>

<h3>Избранные новостные ленты</h3>
<br>
<div>
    <label for = "upda-te-interval">Интервал обновления (сек.):</label>
    <input id = "update-interval" type = "number" value = "4" min = "1" max = "30">
    <br>
    <button class = "button button-success" onclick = "startUpdating()">Начать обновление новостных лент</button>
    <button class = "button button-warning" onclick = "stopUpdating()">Закончить обновление новостных лент</button>
</div>
<br>
<div id = "news-board-container" class = "divTable" style = "width: 100%; border: 2px solid #000;">
    <div class = "divTableBody">
        <div class = "panel panel-primary divTableRow"
        id = "news-board-container-row" style = "display: none">
        </div>
    </div>
</div>

---