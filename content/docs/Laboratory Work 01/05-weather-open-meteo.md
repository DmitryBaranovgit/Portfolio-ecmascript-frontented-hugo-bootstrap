---
title: "Exercise 05"
date: 2024-03-17T20:02:15Z
draft: false
weight: 30

scripts:
    - /js/01/exercise-05.js
---

## Exercise 05

* Формулировка задачи
* Моё описание задачи
* Почему
* [Ссылка на скрипт](/js/01/exercise-05-weather-open-meteo.js)

---
<h3>Поиск погоды по городам</h3>
<br>
<input type="text" id="city-input" placeholder="Введите город">
<br>
<button class="button button-success" onclick="loadWeather()">Получить погоду</button>
<br>
<div id="weather" class="panel panel-notice" style="display: none"></div>

---