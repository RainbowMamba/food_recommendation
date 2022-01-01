var sList = [];
var num = 1;
var q = {
    1: { "title": "면 드실?", "A": "응", "B": "아니", "C": "상관없어" },
    2: { "title": "국물 드실?", "A": "응", "B": "아니", "C": "상관없어" },
    3: { "title": "고기 위주로?", "A": "응", "B": "아니", "C": "상관없어" },
}
var li = {
    '짜장면': ['Y', 'N', 'N'],
    '스파게티': ['Y', 'N', 'N'],
    '국밥': ['N', 'Y', 'W'],
    '닭갈비': ['N', 'N', 'Y'],
    '치킨': ['N', 'N', 'Y']
};

var realLi = ['짜장면', '스파게티', '국밥', '닭갈비', '치킨'];

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
    img.class = food_name;
    document.getElementById(container).appendChild(img);
}

function next() {
    if (num == 4) {
        $(".question").hide();
        $('.result').show();
        $('.bg-modal').hide();
        var k = 0;
        for (var key in li) {
            for (var i = 0; i < 3; i++) {
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
        $("#progress_text").html(num + "/" + 3);
        $(".progress-bar").attr('style', 'width: calc(100/3*' + num + '%)');
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