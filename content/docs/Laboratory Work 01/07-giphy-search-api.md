---
title: "Exercise 07 - GIPHY Search API"
date: 2024-07-01T16:00:15Z
draft: false
weight: 30

scripts:
    - /js/01/exercise-07-giphy-search-api.js
---


## Exercise 07 - GIPHY Search API

* Формулировка задачи
* Моё описание задачи
* Почему
* [Ссылка на скрипт](/js/01/exercise-07-giphy-search-api.js)

---
<style>
/* DivTable.com */
.divTable {
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

<h3>Поиск анимации в сервисе GIPHY</h3>
<br>
<div>
    <form id = "search-form">
        <label for = "search-line">Поисковый запрос:</label>
        <input id = "search-line" type = "text">
        <br>
        <button id = "search-submit" type = "submit" class = "button
        button-success">Найти анимации на GIPHY!</button>
    </form>
</div>
<br>
<div id = "news-board-container" class = "divTable" style = "width: 100%; border: 2px solid #000;">
    <div class = "divTableBody">
        <div class = "panel panel-primary divTableRow">
            <div class = "divTableCell" id = "giphy-search-result-container"
            style = "display: none"></div>
        </div>
    </div>
</div>

---