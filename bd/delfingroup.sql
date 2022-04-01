-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Мар 31 2022 г., 22:00
-- Версия сервера: 8.0.24
-- Версия PHP: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `delfingroup`
--

-- --------------------------------------------------------

--
-- Структура таблицы `категория`
--

CREATE TABLE `категория` (
  `id` int NOT NULL,
  `Название` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `id_категории` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `категория`
--

INSERT INTO `категория` (`id`, `Название`, `id_категории`) VALUES
(1, 'Моторные масла', 'oil'),
(2, 'Пластиковая тара', 'plasic');

-- --------------------------------------------------------

--
-- Структура таблицы `пользователь`
--

CREATE TABLE `пользователь` (
  `Логин` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Пароль` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Роль` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `заказы`
--

CREATE TABLE `заказы` (
  `id` int NOT NULL,
  `Товар` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `id_товара` int NOT NULL,
  `Цена` decimal(8,0) NOT NULL,
  `Количество` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `Дата` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `товар`
--

CREATE TABLE `товар` (
  `id` int NOT NULL,
  `Наименование` text COLLATE utf8_unicode_ci NOT NULL,
  `Объем` int NOT NULL,
  `Стоимость` int NOT NULL,
  `Бренд` text COLLATE utf8_unicode_ci NOT NULL,
  `Тип` text COLLATE utf8_unicode_ci NOT NULL,
  `Цена` int NOT NULL,
  `Категория` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `категория`
--
ALTER TABLE `категория`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `пользователь`
--
ALTER TABLE `пользователь` ADD FULLTEXT KEY `Логин` (`Логин`);

--
-- Индексы таблицы `товар`
--
ALTER TABLE `товар`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `товар`
--
ALTER TABLE `товар`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
