var sList = [];
var num = 1;
var q = {
    1: { "title": "면이 당기나요?", "A": "응", "B": "아니", "C": "상관없어" },
    2: { "title": "얼큰한 국물이 필요한가요?", "A": "응", "B": "아니", "C": "상관없어" },
    3: { "title": "단백질이 필요한가요?", "A": "응", "B": "아니", "C": "상관없어" },
    5: { "title": "고기가 필요한가요?", "A": "응", "B": "아니", "C": "상관없어" },
    6: { "title": "생선 어떤가요?", "A": "응", "B": "아니", "C": "상관없어" },
    7: { "title": "저렴하게 드시고 싶나요?", "A": "응", "B": "아니", "C": "상관없어" },
    8: { "title": "건강한 음식을 원하나요?", "A": "응", "B": "아니", "C": "상관없어" },
    9: { "title": "밥도둑이 필요한가요?", "A": "응", "B": "아니", "C": "상관없어" },
    10: { "title": "채소 위주로 드실래요?", "A": "응", "B": "아니", "C": "상관없어" },
    11: { "title": "매운 음식이 당기나요?", "A": "응", "B": "아니", "C": "상관없어" },
    12: { "title": "간편한 음식이 필요한가요?", "A": "응", "B": "아니", "C": "상관없어" },
}
var li = {
    '짜장면': ['Y', 'N', 'N', 'N'],
    '파스타': ['Y', 'N', 'N', 'Y'],
    '국밥': ['N', 'Y', 'W', 'N'],
    '닭갈비': ['N', 'N', 'Y', 'N'],
    '치킨': ['N', 'N', 'Y', 'N']
};

var realLi = ['짜장면', '파스타', '국밥', '닭갈비', '치킨'];

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

function add_img(food_name,container) {
    var img = document.createElement('img');
    img.src = "img/" + food_name + ".png";
    img.alt = food_name;
    img.class = "foodImage";
    img.style.width = 160+'px';
    img.style.height = 220+'px';

    document.getElementById(container).appendChild(img);
}

function next() {
    if (num == 5) {
        $(".question").hide();
        $('.result').show();
        $('.bg-modal').hide();
        var k = 0;
        for (var key in li) {
            for (var i = 0; i < 4; i++) {
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

        var filteredLi = realLi.filter(function (x) {
            return x !== undefined;
        });

        if (Object.keys(filteredLi).length == 0) {
            add_img("꽝","result_images");
        } else {
            for (var food in filteredLi) {
                add_img(filteredLi[food],"result_images");
            }
        }
        console.log(filteredLi);
    } else {
        $("#progress_text").html(num + "/" + 4);
        $(".progress-bar").attr('style', 'width: calc(100/4*' + num + '%)');
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
    var filteredLi = realLi.filter(function (x) {
        return x !== undefined;
    });
    const randomElement = filteredLi[Math.floor(Math.random() * filteredLi.length)];
    add_img(randomElement,"random_result");
});

function exit_random() {
    $(".overlay").hide();
    $(".bg-modal").hide();
    const myNode = document.getElementById("random_result");
    myNode.innerHTML = '';

}

$('#go_to_home').click(function () {
    $(".result").hide();
    $(".start").show();
    sList = [];
    num = 1;
    realLi = ['짜장면', '스파게티', '국밥', '닭갈비', '치킨'];
    const resultImages = document.getElementById("result_images");
    resultImages.innerHTML = '';
    
});