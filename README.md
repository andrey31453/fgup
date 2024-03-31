## install with docker

1. git clone https://github.com/kvisatchaderah/fgup.git
2. cd ./fgup
3. chmod +x ./dev.sh
4. ./dev.sh
5. open http://localhost:8000/

## install without docker

1. git clone https://github.com/kvisatchaderah/fgup.git
2. cd ./fgup
3. npm i
4. npm run dev
5. open http://localhost:8000/

## data

3 пользователя: П1, П2, П3.
3 пункта меню: ПМ1, ПМ2, ПМ3.
3 таблицы с данными: Т1 (ДФО, ЦФО, ДФО, УФО, ЦФО), Т2 (ЦФО, ДФО, ЦФО, СФО, СЗФО, ДФО), Т3 (СФО, ЦФО, СФО, УФО, СЗФО).
Нажатие по ПМ1 отображает данные из Т1, по ПМ2 из Т2, по ПМ3 из Т3.

## task

Вход в систему и меню с таблицами.
П1 видит ПМ1, ПМ2, ПМ3 и все данные.
П2 видит ПМ1, ПМ2 и данные, ограниченные ДФО.
П3 видит ПМ2, ПМ3 и данные, ограниченные СФО, СЗФО.
