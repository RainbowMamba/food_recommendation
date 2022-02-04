var sList = [];
var filteredLi = [];
var num = 1;
var q = {
    1: { "title": "면이 당기나요?", "A": "응", "B": "아니", "C": "상관없어" },
    2: { "title": "얼큰한 국물이 필요한가요?", "A": "응", "B": "아니", "C": "상관없어" },
    3: { "title": "고기가 필요한가요?", "A": "응", "B": "아니", "C": "상관없어" },
    4: { "title": "해물 어떤가요?", "A": "응", "B": "아니", "C": "상관없어" },
    5: { "title": "매운 음식이 당기나요?", "A": "응", "B": "아니", "C": "상관없어" },
    6: { "title": "밥과 함께 먹을건가요?", "A": "응", "B": "아니", "C": "상관없어" },
    7: { "title": "채식주의자인가요?", "A": "응", "B": "아니", "C": "상관없어" },
}
var li = {
    '설렁탕': ['N', 'Y', 'N', 'N', 'N', 'Y', 'N'],
    '짜장면': ['Y', 'N', 'N', 'N', 'N', 'N', 'N'],
    '파스타': ['Y', 'N', 'N', 'N', 'N', 'N', 'N'],
    '국밥': ['N', 'Y', 'Y', 'N', 'N', 'Y', 'N'],
    '닭갈비': ['N', 'N', 'Y', 'N', 'Y', 'W', 'N'],
    '치킨': ['N', 'N', 'Y', 'N', 'W', 'W', 'N'],
    '곱창전골': ['N', 'Y', 'N', 'N', 'Y', 'W', 'N'],
    '곱창구이': ['N', 'N', 'N', 'N', 'N', 'W', 'N'],
    '한우구이': ['N', 'N', 'Y', 'N', 'N', 'W', 'N'],
    '닭볶음탕': ['N', 'N', 'Y', 'N', 'Y', 'W', 'N'],
    '갈치구이': ['N', 'N', 'Y', 'Y', 'N', 'W', 'N'],
    '죽': ['N', 'N', 'N', 'Y', 'N', 'N', 'N'],
    '추어탕': ['N', 'Y', 'N', 'N', 'N', 'W', 'N'],
    '묵은지김치찜': ['N', 'N', 'Y', 'N', 'Y', 'W', 'N'],
    '쭈꾸미구이': ['N', 'N', 'N', 'Y', 'Y', 'W', 'N'],
    '삼계탕': ['N', 'Y', 'Y', 'N', 'N', 'W', 'N'],
    '고등어구이': ['N', 'N', 'Y', 'Y', 'N', 'W', 'N'],
    '한우불고기': ['N', 'N', 'Y', 'N', 'N', 'W', 'N'],
    '대게': ['N', 'N', 'Y', 'Y', 'N', 'W', 'N'],
    '랍스터': ['N', 'N', 'Y', 'Y', 'N', 'N', 'N'],
    '킹크랩': ['N', 'N', 'Y', 'Y', 'N', 'W', 'N'],
    '새우구이': ['N', 'N', 'Y', 'Y', 'N', 'W', 'N'],
    '감자탕': ['N', 'Y', 'N', 'N', 'W', 'W', 'N'],
    '닭발': ['N', 'N', 'N', 'N', 'Y', 'W', 'N'],
    '갈비탕': ['N', 'Y', 'Y', 'N', 'N', 'W', 'N'],
    '돼지갈비': ['N', 'N', 'Y', 'N', 'N', 'W', 'N'],
    '오리주물럭': ['N', 'N', 'Y', 'N', 'N', 'W', 'N'],
    '낙지전골': ['N', 'Y', 'N', 'N', 'W', 'W', 'N'],
    '냉면': ['Y', 'N', 'N', 'N', 'N', 'N', 'N'],
    '만두국': ['N', 'Y', 'N', 'N', 'N', 'W', 'N'],
    '삼겹살': ['N', 'N', 'Y', 'N', 'N', 'W', 'N'],
    '칼국수': ['Y', 'Y', 'N', 'N', 'N', 'N', 'N'],
    '게장': ['N', 'N', 'N', 'Y', 'N', 'Y', 'N'],
    '제육볶음': ['N', 'N', 'Y', 'N', 'Y', 'Y', 'N'],
    '육회': ['N', 'N', 'Y', 'N', 'N', 'W', 'N'],
    '돼지불백': ['N', 'N', 'Y', 'N', 'N', 'Y', 'N'],
    '보쌈': ['N', 'N', 'Y', 'N', 'N', 'W', 'N'],
    '족발': ['N', 'N', 'Y', 'N', 'N', 'W', 'N'],
    '찜닭': ['N', 'N', 'Y', 'N', 'Y', 'W', 'N'],
    '부대찌개': ['N', 'Y', 'N', 'N', 'Y', 'W', 'N'],
    '콩비지찌개': ['N', 'Y', 'N', 'N', 'W', 'W', 'N'],
    '차돌박이': ['N', 'N', 'Y', 'N', 'N', 'W', 'N'],
    '김치찌개': ['N', 'Y', 'N', 'N', 'Y', 'W', 'N'],
    '육개장': ['N', 'Y', 'N', 'N', 'W', 'W', 'N'],
    '덮밥': ['N', 'N', 'N', 'N', 'N', 'Y', 'N'],
    '오삼불고기': ['N', 'N', 'Y', 'Y', 'Y', 'W', 'N'],
    '아구찜': ['N', 'Y', 'N', 'Y', 'Y', 'W', 'N'],
    '두루치기': ['N', 'N', 'N', 'N', 'Y', 'W', 'N'],
    '샤브샤브': ['N', 'N', 'N', 'N', 'N', 'W', 'N'],
    '콩나물해장국': ['N', 'Y', 'N', 'N', 'N', 'W', 'N'],
    '김밥': ['N', 'N', 'N', 'N', 'N', 'Y', 'N'],
    '닭강정': ['N', 'N', 'N', 'N', 'Y', 'W', 'N'],
    '떡볶이': ['N', 'N', 'N', 'N', 'Y', 'N', 'N'],
    '라면': ['Y', 'N', 'N', 'N', 'Y', 'W', 'N'],
    '튀김': ['N', 'N', 'N', 'N', 'N', 'W', 'N'],
    '순대': ['N', 'N', 'N', 'N', 'N', 'W', 'N'],
    '삼선볶음밥': ['N', 'N', 'N', 'N', 'N', 'Y', 'N'],
    '짬뽕': ['Y', 'Y', 'N', 'W', 'Y', 'N', 'N'],
    '탕수육': ['N', 'N', 'N', 'N', 'N', 'N', 'N'],
    '잡채': ['Y', 'N', 'N', 'N', 'N', 'W', 'N'],
    '깐쇼새우': ['N', 'N', 'N', 'Y', 'N', 'W', 'N'],
    '마파두부': ['N', 'N', 'N', 'N', 'Y', 'Y', 'N'],
    '찐만두': ['N', 'N', 'N', 'N', 'N', 'W', 'N'],
    '군만두': ['N', 'N', 'N', 'N', 'N', 'W', 'N'],
    '초밥': ['N', 'N', 'N', 'Y', 'N', 'Y', 'N'],
    '회': ['N', 'N', 'N', 'Y', 'N', 'W', 'N'],
    '돈까스': ['N', 'N', 'Y', 'N', 'N', 'W', 'N'],
    '규카츠': ['N', 'N', 'Y', 'N', 'N', 'W', 'N'],
    '돈부리': ['N', 'N', 'N', 'N', 'N', 'Y', 'N'],
    '오니기리': ['N', 'N', 'N', 'N', 'N', 'Y', 'N'],
    '소바': ['Y', 'N', 'N', 'N', 'N', 'N', 'N'],
    '우동': ['Y', 'N', 'N', 'N', 'N', 'N', 'N'],
    '오꼬노미야끼': ['N', 'N', 'N', 'N', 'N', 'N', 'N'],
    '수제버거': ['N', 'N', 'Y', 'N', 'N', 'N', 'N'],
    '피자': ['N', 'N', 'N', 'N', 'N', 'N', 'N'],
    '햄버거': ['N', 'N', 'N', 'N', 'N', 'N', 'N'],
    '리조또': ['N', 'N', 'N', 'N', 'N', 'Y', 'N'],
    '스테이크': ['N', 'N', 'Y', 'N', 'N', 'W', 'N'],
    '닭가슴살샐러드': ['N', 'N', 'N', 'N', 'N', 'N', 'N'],
    '치킨샐러드': ['N', 'N', 'N', 'N', 'N', 'N', 'N'],
    '샐러드': ['N', 'N', 'N', 'N', 'N', 'N', 'W'],
    '샌드위치': ['N', 'N', 'N', 'N', 'N', 'N', 'N'],
    '토스트': ['N', 'N', 'N', 'N', 'N', 'N', 'N'],
    '핫도그': ['N', 'N', 'N', 'N', 'N', 'N', 'N'],
    '장어구이': ['N', 'N', 'N', 'Y', 'N', 'W', 'N'],
    '조개구이': ['N', 'N', 'N', 'Y', 'N', 'W', 'N'],
    '쌀국수': ['Y', 'N', 'N', 'N', 'N', 'N', 'N'],
    '양꼬치': ['N', 'N', 'Y', 'N', 'N', 'W', 'N'],
    '카레': ['N', 'N', 'N', 'N', 'W', 'Y', 'N'],
    '타코': ['N', 'N', 'N', 'N', 'N', 'N', 'N'],
    '부리또': ['N', 'N', 'N', 'N', 'N', 'N', 'N'],
    '병아리콩샐러드': ['N', 'N', 'N', 'N', 'N', 'N', 'W'],
    '버섯전골': ['N', 'N', 'N', 'N', 'N', 'W', 'W'],
};

var realLi = [
    '설렁탕',
    '짜장면',
    '파스타',
    '국밥',
    '닭갈비',
    '치킨',
    '곱창전골',
    '곱창구이',
    '한우구이',
    '닭볶음탕',
    '갈치구이',
    '죽',
    '추어탕',
    '묵은지김치찜',
    '쭈꾸미구이',
    '삼계탕',
    '고등어구이',
    '한우불고기',
    '대게',
    '랍스터',
    '킹크랩',
    '새우구이',
    '감자탕',
    '닭발',
    '갈비탕',
    '돼지갈비',
    '오리주물럭',
    '낙지전골',
    '냉면',
    '만두국',
    '삼겹살',
    '칼국수',
    '게장',
    '제육볶음',
    '육회',
    '돼지불백',
    '보쌈',
    '족발',
    '찜닭',
    '부대찌개',
    '콩비지찌개',
    '차돌박이',
    '김치찌개',
    '육개장',
    '덮밥',
    '오삼불고기',
    '아구찜',
    '두루치기',
    '샤브샤브',
    '콩나물해장국',
    '김밥',
    '닭강정',
    '떡볶이',
    '라면',
    '튀김',
    '순대',
    '삼선볶음밥',
    '짬뽕',
    '탕수육',
    '잡채',
    '깐쇼새우',
    '마파두부',
    '찐만두',
    '군만두',
    '초밥',
    '회',
    '돈까스',
    '규카츠',
    '돈부리',
    '오니기리',
    '소바',
    '우동',
    '오꼬노미야끼',
    '수제버거',
    '피자',
    '햄버거',
    '리조또',
    '스테이크',
    '닭가슴살샐러드',
    '치킨샐러드',
    '샐러드',
    '샌드위치',
    '토스트',
    '핫도그',
    '장어구이',
    '조개구이',
    '쌀국수',
    '양꼬치',
    '카레',
    '타코',
    '부리또',
    '병아리콩샐러드',
    '버섯전골',
];

function start() {
    $(".start").hide();
    $(".question").show();
    next();
}
$("#A").click(function () {
    sList.push('Y');
    next();
});

$('#B').click(function () {
    sList.push('N');
    next();
});

$('#C').click(function () {
    sList.push('W');
    next();
});

function add_img(food_name, container) {
    var img = document.createElement('img');
    img.src = "img/" + food_name + ".png";
    img.alt = food_name;
    img.class = "foodImage";
    img.style.width = 160 + 'px';
    img.style.height = 220 + 'px';

    document.getElementById(container).appendChild(img);
}

function next() {
    if (num == 8) {

        var k = 0;
        for (var key in li) {
            for (var i = 0; i < 7; i++) {
                if (sList[i] == 'Y') {
                    if (li[key][i] == 'N') {
                        delete realLi[k]
                    }
                }
                else if (sList[i] == 'N') {
                    if (li[key][i] == 'Y') {
                        delete realLi[k]
                    }
                }
            }
            k += 1;
        }

        filteredLi = realLi.filter(function (x) {
            return x !== undefined;
        });

        if (Object.keys(filteredLi).length == 0) {
            $(".question").hide();
            $('.result-none').show();
            add_img("꽝", "result_images_none");
        } else {
            $(".question").hide();
            $('.result').show();
            $('.bg-modal').hide();
            if (filteredLi.length > 5) {
                
                const f_randomSelection = (n) => {
                    let newArr = [];
                    for (let i = 0; i < n; i++) {
                        let newElem = filteredLi[Math.floor(Math.random() * filteredLi.length)];
                        while (newArr.includes(newElem)) {
                            newElem = filteredLi[Math.floor(Math.random() * filteredLi.length)];
                        }
                        newArr.push(newElem);
                    }
                    return newArr;
                }
                filteredLi = f_randomSelection(6);
                for (var food in filteredLi) {
                    add_img(filteredLi[food], "result_images");
                }

            }
            else {
                for (var food in filteredLi) {
                    add_img(filteredLi[food], "result_images");
                }
            }
        }
        console.log(filteredLi);


    } else {
        $("#progress_text").html(num + "/" + 7);
        $(".progress-bar").attr('style', 'width: calc(100/7*' + num + '%)');
        $("#question_title").html(q[num]['title']);
        $('#type').val(q[num]['type']);
        $("#A").html(q[num]['A']);
        $("#B").html(q[num]['B']);
        $("#C").html(q[num]['C']);
        $('#sListShow').html(sList);
        num++;
    }
}

$('#randomSelection').click(function () {
    $(".overlay").show();
    $(".bg-modal").show();
    
    const randomElement = filteredLi[Math.floor(Math.random() * filteredLi.length)];
    add_img(randomElement, "random_result");
});

function exit_random() {
    $(".overlay").hide();
    $(".bg-modal").hide();
    const myNode = document.getElementById("random_result");
    myNode.innerHTML = '';

}

$('.go_to_home').click(function () {
    $(".result").hide();
    $(".result-none").hide();
    $(".start").show();
    sList = [];
    num = 1;
    realLi = [
        '설렁탕',
        '짜장면',
        '파스타',
        '국밥',
        '닭갈비',
        '치킨',
        '곱창전골',
        '곱창구이',
        '한우구이',
        '닭볶음탕',
        '갈치구이',
        '죽',
        '추어탕',
        '묵은지김치찜',
        '쭈꾸미구이',
        '삼계탕',
        '고등어구이',
        '한우불고기',
        '대게',
        '랍스터',
        '킹크랩',
        '새우구이',
        '감자탕',
        '닭발',
        '갈비탕',
        '돼지갈비',
        '오리주물럭',
        '낙지전골',
        '냉면',
        '만두국',
        '삼겹살',
        '칼국수',
        '게장',
        '제육볶음',
        '육회',
        '돼지불백',
        '보쌈',
        '족발',
        '찜닭',
        '부대찌개',
        '콩비지찌개',
        '차돌박이',
        '김치찌개',
        '육개장',
        '덮밥',
        '오삼불고기',
        '아구찜',
        '두루치기',
        '샤브샤브',
        '콩나물해장국',
        '김밥',
        '닭강정',
        '떡볶이',
        '라면',
        '튀김',
        '순대',
        '삼선볶음밥',
        '짬뽕',
        '탕수육',
        '잡채',
        '깐쇼새우',
        '마파두부',
        '찐만두',
        '군만두',
        '초밥',
        '회',
        '돈까스',
        '규카츠',
        '돈부리',
        '오니기리',
        '소바',
        '우동',
        '오꼬노미야끼',
        '수제버거',
        '피자',
        '햄버거',
        '리조또',
        '스테이크',
        '닭가슴살샐러드',
        '치킨샐러드',
        '샐러드',
        '샌드위치',
        '토스트',
        '핫도그',
        '장어구이',
        '조개구이',
        '쌀국수',
        '양꼬치',
        '카레',
        '타코',
        '부리또',
        '병아리콩샐러드',
        '버섯전골'];
    const resultImages1 = document.getElementById("result_images");
    resultImages1.innerHTML = '';
    const resultImages2 = document.getElementById("result_images_none");
    resultImages2.innerHTML = '';

});