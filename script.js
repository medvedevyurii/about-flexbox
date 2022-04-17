
// Set Display

function setDisplayValue() {
    let a = document.querySelectorAll('.section-1__box');
    const checkDisplay = document.getElementsByName('select-1');
    let setDisplay;

    for (let i = 0; i <= checkDisplay.length - 1; i++){
        if (checkDisplay[i].checked == true) {
            setDisplay = checkDisplay[i].value;
        }
    };

    switch (setDisplay) {
        case "block":
            document.querySelector('.section-1__wrapper').style.display = "block";
            for (var i = 0; i <= 2; i++) {
                a[i].style.display = "block";
            };
            document.querySelector('.section-1__text').innerHTML = "<p>Блочные элементы занимают всю длину элемента-родителя.</p>\
            <p>Зелёная рамка - контейнер для секций.</p><hr/>";
            document.querySelector('.section-1__footer').innerHTML ="И контейнер и секции - display:block"; break

        case "inline":
            document.querySelector('.section-1__wrapper').style.display = "block";
            for (var i = 0; i <= 2; i++) {
                a[i].style.display = "inline";
            };
            document.querySelector('.section-1__text').innerHTML = "<p>Строчные элементы выстраиваются в одну строку.</p>\
            <p>Вертикальный padding выходит за пределы контейнера т.к. высота строчного элемента равна высоте его содержимого.</p>\
            <p>Белые полосы между блоками - это обычный пробел, который появляется, чтобы текст не сливался в одно слово</p><hr>";
            document.querySelector('.section-1__footer').innerHTML ="Контейнер - display:block, секции - display:inline"; break
        
        case "inline-block":
            document.querySelector('.section-1__wrapper').style.display = "block";
            for (var i = 0; i <= 2; i++) {
                a[i].style.display = "inline-block";
            };
            document.querySelector('.section-1__text').innerHTML = "<p>Строчные элементы выстраиваются в одну строку, но теперь у них есть высота,\
            включающая верхний и нижний паддинг</p>\
            <p>Белые полосы между блоками - это обычный пробел, который появляется, чтобы текст не сливался в одно слово</p><hr>";
            document.querySelector('.section-1__footer').innerHTML ="Контейнер - display:block, секции - display:inline-block"; break
        
        case "flex":
            document.querySelector('.section-1__wrapper').style.display = "flex";
            for (var i = 0; i <= 2; i++) {
                a[i].style.display = "block";
            };
            document.querySelector('.section-1__text').innerHTML = "<p>Flex элементы занимають пространство равное их содержимому плюс падинги</p><hr>";
            document.querySelector('.section-1__footer').innerHTML ="Контейнер - display:flex, секции - display:block"; break
        
        case "inline-flex":
            document.querySelector('.section-1__wrapper').style.display = "inline-flex";
            for (var i = 0; i <= 2; i++) {
                a[i].style.display = "block";
            };
            document.querySelector('.section-1__text').innerHTML = "<p>Flex элементы занимають пространство равное их содержимому плюс падинги</p>\
            <p>Ширина родителя равна сумме ширин потомков</p><hr>";
            document.querySelector('.section-1__footer').innerHTML ="Контейнер - display:inline-flex, секции - display:block"; break
        
    }
}


//set direction
function setDirection() {
    let sect2 = document.querySelector('.section-2__wrapper');
    const check_2 = document.getElementsByName('select-2');
    let box2 = document.querySelectorAll('.section-2__box');

    for (let i = 0; i <= check_2.length - 1; i++){
        if (check_2[i].checked == true) {
            var direction = check_2[i].value;
        }
    };

    switch (direction) {
        case "row":
            sect2.style.flexDirection = "row";
            document.querySelector('.section-2__text-1').innerHTML = "<p>Элементы выстраиваются в строку слева направо</p>\
            <p>Зелёная рамка - контейнер для секций.</p><hr>";
            document.querySelector('.section-2__footer-1').innerHTML="Контейнеру задано - flex-direction:row"; break
        case "row-reverse":
            sect2.style.flexDirection = "row-reverse"; 
            document.querySelector('.section-2__text-1').innerHTML = "<p>Элементы выстраиваются в строку справа налево</p>\
            <p>Зелёная рамка - контейнер для секций.</p><hr>";
            document.querySelector('.section-2__footer-1').innerHTML="Контейнеру задано - flex-direction:row-reverse"; break
        case "column":
            sect2.style.flexDirection = "column";
            document.querySelector('.section-2__text-1').innerHTML = "<p>Элементы выстраиваются в столбец сверху вниз</p>\
            <p>Зелёная рамка - контейнер для секций.</p><hr>";
            document.querySelector('.section-2__footer-1').innerHTML="Контейнеру задано - flex-direction:column";break
        case "column-reverse":
            sect2.style.flexDirection = "column-reverse";
            document.querySelector('.section-2__text-1').innerHTML = "<p>Элементы выстраиваются в столбец снизу вверх</p>\
            <p>Зелёная рамка - контейнер для секций.</p><hr>";
            document.querySelector('.section-2__footer-1').innerHTML="Контейнеру задано - flex-direction:column-reverse"; break
        }
}

// Set wrap

function setWrap() {
    let sect3 = document.querySelector('.section-3__wrapper');
    const check_3 = document.getElementsByName('select-3');
    
    for (let i = 0; i < check_3.length; i++){
        if (check_3[i].checked == true) {
            var wrap = check_3[i].value;
        }
    };

    switch (wrap) {
        case "nowrap":
            sect3.style.flexWrap = "nowrap";
            document.querySelector('.section-3__text').innerHTML = "<p>Элементы сжимаются так, чтобы уместиться в одну строку</p><hr>";
            document.querySelector('.section-3__footer').innerHTML = "Контейнеру задано - flex-wrap:nowrap</p>"; break 
        case "wrap":
            sect3.style.flexWrap = "wrap";
            document.querySelector('.section-3__text').innerHTML = "<p>Элементы переносятся сверху вниз</p><hr>"
            document.querySelector('.section-3__footer').innerHTML ="Контейнеру задано - flex-wrap:wrap"; break 
        case "wrap-reverse":
            sect3.style.flexWrap = "wrap-reverse";
            document.querySelector('.section-3__text').innerHTML = "<p>Элементы переносятся снизу вверх</p><hr>"
            document.querySelector('.section-3__footer').innerHTML ="Контейнеру задано - flex-wrap:wrap-reverse"; break
        }
}

// set justify-content
function setJustify(){
    let sect4 = document.querySelector('.section-4__wrapper');
    const check_4 = document.getElementsByName('select-4');
    
    for (let i = 0; i < check_4.length; i++){
        if (check_4[i].checked == true) {
            var justify = check_4[i].value;
        }
    };

    switch (justify) {
        case "flex-start":
            sect4.style.justifyContent = "flex-start";
            document.querySelector('.section-4__text').innerHTML = "<p>Элементы расставляются от начала строки</p><hr>";
            document.querySelector('.section-4__footer').innerHTML ="Контейнеру задано - justify-content:flex-start"; break  
        case "center":
            sect4.style.justifyContent = "center";
            document.querySelector('.section-4__text').innerHTML = "<p>Элементы центрированы вдоль строки</p><hr>";
            document.querySelector('.section-4__footer').innerHTML ="Контейнеру задано - justify-content:center"; break  
        case "flex-end":
            sect4.style.justifyContent = "flex-end";
            document.querySelector('.section-4__text').innerHTML = "<p>Элементы размещены с конца строки</p><hr>";
            document.querySelector('.section-4__footer').innerHTML ="Контейнеру задано - justify-content:flex-end"; break  
        case "space-between":
            sect4.style.justifyContent = "space-between";
            document.querySelector('.section-4__text').innerHTML = "<p>Элементы равномерно распределены по строке, первый элемент находится вначале строки, последний в конце</p><hr>";
            document.querySelector('.section-4__footer').innerHTML ="Контейнеру задано - justify-content:space-between"; break  
        case "space-around":
            sect4.style.justifyContent = "space-around";
            document.querySelector('.section-4__text').innerHTML = "<p>Элементы  равномерно распределены по строке с равным местом вокруг них</p><hr>";
            document.querySelector('.section-4__footer').innerHTML ="Контейнеру задано - justify-content:space-around"; break  
        case "space-evenly":
            sect4.style.justifyContent = "space-evenly";
            document.querySelector('.section-4__text').innerHTML = "<p>Элементы  распределены таким образом, что свободное пространство между любыми двумя элементами равномерно, как и место до границы края контейнера</p><hr>";
            document.querySelector('.section-4__footer').innerHTML ="Контейнеру задано - justify-content:space-evenly"; break  
        }
}


// align-items

function setAlignItems(){
    let sect5 = document.querySelector('.section-5__wrapper');
    const check_5 = document.getElementsByName('select-5');
    
    for (let i = 0; i < check_5.length; i++){
        if (check_5[i].checked == true) {
            var alignItems = check_5[i].value;
        }
    };
    switch (alignItems) {
        case "flex-start":
            sect5.style.alignItems = "flex-start";
            document.querySelector('.section-5__text').innerHTML = "<p>Элементы размещаются с начала поперечной оси</p><hr>";
            document.querySelector('.section-5__footer').innerHTML ="Контейнеру задано - align-items:flex-start"; break  
        case "center":
            sect5.style.alignItems = "center";
            document.querySelector('.section-5__text').innerHTML = "<p>Элементы центрируются по поперечной оси</p><hr>";
            document.querySelector('.section-5__footer').innerHTML ="Контейнеру задано - align-items:center"; break  
        case "flex-end":
            sect5.style.alignItems = "flex-end";
            document.querySelector('.section-5__text').innerHTML = "<p>Элементы размещаются с конца поперечной оси</p><hr>";
            document.querySelector('.section-5__footer').innerHTML ="Контейнеру задано - align-items:flex-end"; break  
        case "stretch":
            sect5.style.alignItems = "stretch";
            document.querySelector('.section-5__text').innerHTML = "<p>Дефолтное состояние, при котором элементы заполяют контейнер, с учетом min-width и max-width</p><hr>";
            document.querySelector('.section-5__footer').innerHTML ="Контейнеру задано - align-items:stretch"; break  
        case "baseline":
            sect5.style.alignItems = "baseline";
            document.querySelector('.section-5__text').innerHTML = "<p>Элементы выравниваются по 'базовой линии'. Базовая линия - это воображаемая\
            линия, проходящая по нижнему краю символов без учета свисаний, например, как у букв 'ц', 'д', 'р', 'щ'</p><hr>";
            document.querySelector('.section-5__footer').innerHTML ="Контейнеру задано - align-items:baseline"; break  
    }
}

// align-content

function setAlignContent(){
    let sect6 = document.querySelector('.section-6__wrapper');
    const check_6 = document.getElementsByName('select-6');
    
    for (let i = 0; i < check_6.length; i++){
        if (check_6[i].checked == true) {
            var alignContent = check_6[i].value;
        }
    };
    switch (alignContent) {
        case "flex-start":
            sect6.style.alignContent = "flex-start";
            document.querySelector('.section-6__text').innerHTML = "<p>Строки расположены от начала контейнера</p><hr>";
            document.querySelector('.section-6__footer').innerHTML ="Контейнеру задано - align-content:flex-start"; break  
        case "center":
            sect6.style.alignContent = "center";
            document.querySelector('.section-6__text').innerHTML = "<p>Строки расположены от центра контейнера</p><hr>";
            document.querySelector('.section-6__footer').innerHTML ="Контейнеру задано - align-content:center"; break  
        case "flex-end":
            sect6.style.alignContent = "flex-end";
            document.querySelector('.section-6__text').innerHTML = "<p>Строки расположены от конца контейнера</p><hr>";
            document.querySelector('.section-6__footer').innerHTML ="Контейнеру задано - align-content:flex-end"; break  
        case "stretch":
            sect6.style.alignContent = "stretch";
            document.querySelector('.section-6__text').innerHTML = "<p>Состояние, при котором строки растягиваются на всё оставшееся место</p><hr>";
            document.querySelector('.section-6__footer').innerHTML ="Контейнеру задано - align-content:stretch"; break  
        case "space-between":
            sect6.style.alignContent = "space-between";
            document.querySelector('.section-6__text').innerHTML = "<p>Строки равномерно распределены, первая строка находится в начале контейнера, тогда как последняя находится в конце</p><hr>";
            document.querySelector('.section-6__footer').innerHTML ="Контейнеру задано - align-content:space-between"; break  
        case "space-around":
            sect6.style.alignContent = "space-around";
            document.querySelector('.section-6__text').innerHTML = "<p>Строки равномерно распределены с равным местом вокруг каждой строки</p><hr>";
            document.querySelector('.section-6__footer').innerHTML ="Контейнеру задано - align-content:space-around"; break
        case "space-evenly":
            sect6.style.alignContent = "space-evenly";
            document.querySelector('.section-6__text').innerHTML = "<p>Строки распределены таким образом, что свободное пространство между любыми двумя строками равномерно, как и место до границы контейнера</p><hr>";
            document.querySelector('.section-6__footer').innerHTML ="Контейнеру задано - align-content:space-evenly"; break
    }
}

// order

function setOrderValue(){
    let sect7 = document.querySelectorAll('.section-7__box');
    const check_7 = document.getElementsByName('select-7');
    
    for (var i = 0; i < check_7.length; i++){
        if (check_7[i].checked == true) {
            var order = check_7[i].value;
        }
    };

    switch (order) {
        case "2":
            sect7[1].style.order = order;
            sect7[0].style.order = parseInt(order)-1;
            sect7[2].style.order =parseInt(order)+1;
            document.querySelector('.section-7__text').innerHTML = "<p>Элементы расположены по порядку</p><hr>";
            document.querySelector('.section-7__footer').innerHTML ="У средней секции - order:2"; break  
        case "3":
            sect7[1].style.order = order;
            sect7[0].style.order = parseInt(order)-2;
            sect7[2].style.order = parseInt(order)-1;
            document.querySelector('.section-7__text').innerHTML = "<p>Средняя секция стала последней</p><hr>";
            document.querySelector('.section-7__footer').innerHTML ="У средней секции - order:3"; break  
        case "-1":
            sect7[1].style.order = order;
            sect7[0].style.order = parseInt(order)+1;
            sect7[2].style.order = parseInt(order)+2;
            document.querySelector('.section-7__text').innerHTML = "<p>Средняя секция стала первой</p><hr>";
            document.querySelector('.section-7__footer').innerHTML ="У средней секции - order:-1"; break  
    }
}

// flex-grow

function setGrowValue(){
    let sect8 = document.querySelectorAll('.section-8__box');
    const check_8 = document.getElementsByName('select-8');

    for (var i = 0; i < check_8.length; i++){
        if (check_8[i].checked == true) {
            var grow = check_8[i].value;
        }
    };

    switch (grow) {
        case "0":
            for(let j=0; j<sect8.length; j++){
                sect8[j].style.removeProperty("flex-grow");
            }
            document.querySelector('.section-8__text').innerHTML = "<p>Ширина секций в соответствии с их содержимым</p><hr>";
            document.querySelector('.section-8__footer').innerHTML ="У всех секций - flex-grow отсутствует"; break  
        case "1":
            for(let j=0; j<sect8.length; j++){
                sect8[j].style.flexGrow = "1";
            }
            document.querySelector('.section-8__text').innerHTML = "<p>Все секции растянулись и поделили между собой свободное место</p><hr>";
            document.querySelector('.section-8__footer').innerHTML ="У всех секций - flex-grow:1"; break  
        case "2":
            sect8[0].style.flexGrow = "1";
            sect8[1].style.flexGrow = "2";
            sect8[2].style.flexGrow = "1";
            document.querySelector('.section-8__text').innerHTML = "<p>Средняя секция получила в два раза больше свободного места, чем крайние.</p>\
            <p>ПОДЕЛЕНО БЫЛО ТОЛЬКО СВОБОДНОЕ МЕСТО, А НЕ ВСЯ ШИРИНА РОДИТЕЛЯ!</p><hr>";
            document.querySelector('.section-8__footer').innerHTML ="У крайних секций - flex-grow:1, у средней - flex-grow:2"; break  
        case "3":
            sect8[0].style.flexGrow = "1";
            sect8[1].style.flexGrow = "2";
            sect8[2].style.flexGrow = "3";
            document.querySelector('.section-8__text').innerHTML = "<p>Свободное место было поделено на 6 (1+2+3).\
            Первый элемент получил одну часть, второй - две, а третий - три</p>\
            <p>ПОДЕЛЕНО БЫЛО ТОЛЬКО СВОБОДНОЕ МЕСТО, А НЕ ВСЯ ШИРИНА РОДИТЕЛЯ!</p><hr>";
            document.querySelector('.section-8__footer').innerHTML ="У первой секции - flex-grow:1, у второй flex-grow:2, у третьей flex-grow:3"; break  
    }
}

// flex-shrink

function setShrinkValue(){
    let sect9 = document.querySelectorAll('.section-9__box');
    const check_9 = document.getElementsByName('select-9');

    for (var i = 0; i < check_9.length; i++){
        if (check_9[i].checked == true) {
            var shrink = check_9[i].value;
        }
    };

    switch (shrink) {
        case "0":
            for(let j=0; j<sect9.length; j++){
                sect9[j].style.removeProperty("flex-shrink");
            }
            document.querySelector('.section-9__text').innerHTML = "<p>Ширина секций в соответствии с их содержимым</p><hr>";
            document.querySelector('.section-9__footer').innerHTML ="У всех секций - flex-shrink отсутствует"; break  
        case "1":
            for(let j=0; j<sect9.length; j++){
                sect9[j].style.flexShrink = "1";
            }
            document.querySelector('.section-9__text').innerHTML = "<p>Недостаток места равномерно поделён между секциями.</p><hr>";
            document.querySelector('.section-9__footer').innerHTML ="У всех секций - flex-shrink:1"; break  
        case "2":
            sect9[0].style.flexShrink = "0";
            sect9[1].style.flexShrink = "1";
            sect9[2].style.flexShrink = "2";
            document.querySelector('.section-9__text').innerHTML = "<p>Первая секция не сжимается. Вторая и третья делят между собой недостаток места.\
            Вторая секция сжимается меньше, а третья 'берёт удар на себя' и максимально сжимается, чтобы компенсировать недостаток места.</p><hr>";
            document.querySelector('.section-9__footer').innerHTML ="У первой секции - flex-shrink:0, у второй - flex-shrink:1, у третьей - flex-shrink:2"; break  
        case "3":
            sect9[0].style.flexShrink = "0.1";
            sect9[1].style.flexShrink = "0.5";
            sect9[2].style.flexShrink = "1";
            document.querySelector('.section-9__text').innerHTML = "<p>Опять недостаток свободного места компенсируется за счёт третьей секции, т.к.\
            у неё самое большое значение flex-shrink</p><hr>";
            document.querySelector('.section-9__footer').innerHTML ="У первой секции - flex-shrink:0,1, у второй flex-shrink:0,5, у третьей flex-shrink:1"; break  
    }
}


// flex-basis

function setBasisValue(){
    let sect10 = document.querySelectorAll('.section-10__box');
    const check_10 = document.getElementsByName('select-10');
    
    for (var i = 0; i < check_10.length; i++){
        if (check_10[i].checked == true) {
            var basis = check_10[i].value;
        }
    };


    switch (basis) {
        case "0":
            for(let j=0; j<sect10.length; j++){
                sect10[j].style.flexBasis="auto";
            }
            document.querySelector('.section-10__text').innerHTML = "<p>Ширина секций в соответствии с их содержимым.</p><hr>";
            document.querySelector('.section-10__footer').innerHTML ="У всех секций - flex-basis:auto"; break  
        case "1":
            sect10[0].style.flexBasis = "30%";
            sect10[1].style.flexBasis = "auto";
            document.querySelector('.section-10__text').innerHTML = "<p>Первая секция занимает 30% родителя, остальные две делят остаток - в соответствии с их содержимым.</p><hr>";
            document.querySelector('.section-10__footer').innerHTML ="У первой секции flex-basis:30%, у остальных flex-basis:auto"; break  
        case "2":
            sect10[1].style.flexBasis = "0";
            document.querySelector('.section-10__text').innerHTML = "<p>Ширина второй секции минимальна (по самому длинному слову) с учётом падингов.</p><hr>";
            document.querySelector('.section-10__footer').innerHTML ="У второй секции flex-basis:0, у остальных flex-basis:auto"; break 
    }
}

// align-self

function setAlignSelfValue(){
    let sect11 = document.querySelectorAll('.section-11__box');
    const check_11 = document.getElementsByName('select-11');
    
    for (var i = 0; i < check_11.length; i++){
        if (check_11[i].checked == true) {
            var alignSelf = check_11[i].value;
        }
    };

    switch (alignSelf) {
        case "auto":
            for(let j=0; j<sect11.length; j++){
                sect11[j].style.alignSelf="auto";
            }
            sect11[0].innerHTML = "Секция 1";
            sect11[1].innerHTML = "Секция 2";
            sect11[1].classList.remove('text_double-size');
            sect11[2].innerHTML = "Секция 3";
            document.querySelector('.section-11__text').innerHTML = "<p>Блоки выровнены так, как задано в свойстве align-items</p><hr>";
            document.querySelector('.section-11__footer').innerHTML ="У всех секций - align-self:auto"; break  
        case "flex":
            sect11[0].style.alignSelf = "flex-start";
            sect11[0].innerHTML = "flex-start";
            sect11[1].style.alignSelf = "center";
            sect11[1].innerHTML = "center";
            sect11[1].classList.remove('text_double-size');
            sect11[2].style.alignSelf = "flex-end";
            sect11[2].innerHTML = "flex-end";
            document.querySelector('.section-11__text').innerHTML = "<p>Первая секция выравнялась по верху, средняя - по центру, третья - по низу.</p><hr>";
            document.querySelector('.section-11__footer').innerHTML ="У первой секции - align-self:flex-start, у второй секций - align-self:center, у третьей - align-self:flex-end"; break 
        case "baseline":
            sect11[0].style.alignSelf = "auto";
            sect11[0].innerHTML = "auto";
            sect11[1].style.alignSelf = "baseline";
            sect11[1].innerHTML = "baseline";
            sect11[1].classList.add('text_double-size');
            sect11[2].style.alignSelf = "baseline";
            sect11[2].innerHTML = "baseline";
            document.querySelector('.section-11__text').innerHTML = "<p>Блок выравнивается по своей базовой линии. Базовая линия - это воображаемая линия, \
            проходящая по нижнему краю символов без учета свисаний, например, как у букв 'ц', 'д', 'р', 'щ'. Чтобы свойство сработало НЕОБХОДИМО, ЧТОБЫ \
            BASELINE БЫЛ МИНИМУМ У ДВУХ ЭЛЕМЕНТОВ.</p><hr>";
            document.querySelector('.section-11__footer').innerHTML ="У второй и третьей секций - align-self:baseline, у первой - align-self:auto"; break
            case "stretch":
            sect11[0].style.alignSelf = "auto";
            sect11[0].innerHTML = "Секция 1";
            sect11[1].style.alignSelf = "stretch";
            sect11[1].innerHTML = "stretch";
            sect11[1].classList.remove('text_double-size');
            sect11[2].style.alignSelf = "auto";
            sect11[2].innerHTML = "Секция 2";
            document.querySelector('.section-11__text').innerHTML = "<p>Средняя секция растянулась на всю длину родителя.</p><hr>";
            document.querySelector('.section-11__footer').innerHTML ="У первой и последней секций - align-self:auto, у второй - align-self:stretch"; break  
    }
}



