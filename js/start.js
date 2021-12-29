const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const url = 'https://knis-herotest.netlify.app/';
const endPoint = 5;
const select = [];
let finalGrade = null;

$("#heroName").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#button-addon2").click();
    }
});

function shareStoryWeb() {
    const name = document.querySelector("#heroName").value;
    const resultUrl = url + 'page/result-' + finalGrade + '.html';

    Kakao.Story.open({
      url: resultUrl,
      text: `코드네임 ${name}의 히어로 등급은 ${infoList[finalGrade].name}입니다.
      ${resultUrl}
당신은 몇 등급 히어로인가요? 링크를 통해 확인하세요!

#KNIS #지구를지켜라`,
    })
  }

function calResult() {
    var total = 0;
    let i = 0;
    for (j in select) {
        var point = qnaList[i].a[select[j]].score;
        total += point;
        i++;
    }
    return total;
}

function showResult(point, i) {
    finalGrade = i;

    const name = document.querySelector("#heroName").value;
    $('h1').append(`코드네임 ${name}의
히어로 등급`);
    const resultName = document.querySelector(".resultName");
    
    var resultImg = document.createElement("img");
    const imgDiv = document.querySelector('#resultImg');
    var imgURL = 'img/image-' + i + '.png';
    resultImg.src = imgURL;
    resultImg.alt = point;
    resultImg.classList.add("col-lg-4");
    resultImg.classList.add("col-md-4");
    resultImg.classList.add("col-sm-6");
    resultImg.classList.add("col-6");
    resultImg.classList.add("mx-auto");

    imgDiv.appendChild(resultImg);

    const resultDesc = document.querySelector('#resultDesc');
    resultDesc.innerHTML = infoList[i].desc;
}

function setResult() {
    let p = calResult();

    switch (true) {
        //S+
        case (p>33 && p<36):
            showResult(p, 0);
            break;
        //A+
        case (p>31 && p<34):
            showResult(p, 1);
            break;
        //A
        case (p>28 && p<32):
            showResult(p, 2);
            break;
        //A-
        case (p>25 && p<29):
            showResult(p, 3);
            break;
        //B+
        case (p>23 && p<26):
            showResult(p, 4);
            break;
        //B
        case (p>19 && p<24):
            showResult(p, 5);
            break;
        //B-
        case (p>15 && p<20):
            showResult(p, 6);
            break;
        //C+
        case (p == 15):
            showResult(p, 7);
            break;
        //C
        case (p>12 && p<15):
            showResult(p, 8);
            break;
        //C-
        case (p>10 && p<13):
            showResult(p, 9);
            break;
        //D-
        case (p<11):
            showResult(p, 10);
            break;
        default:
            console.log("Error: Unknown grade");
    }
}

function goResult(){
    qna.style.WebkitAnimation = "fadeOut 0.5s";
    qna.style.animation = "fadeOut 0.5s";
    setTimeout(() => {
        result.style.WebkitAnimation = "fadeIn 0.5s";
        result.style.animation = "fadeIn 0.5s";
        setTimeout(() => {
            qna.style.display = "none";
            result.style.display = "block";
        }, 250)
    })
    setResult();
}

function addAnswer(answerText, qIdx, idx) {
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('button');
    answer.classList.add('answerList');
    answer.classList.add('my-3');
    answer.classList.add('py-3');
    answer.classList.add('px-3');
    answer.classList.add('mx-auto');
    answer.classList.add('fadeIn');

    a.appendChild(answer);
    answer.innerHTML = answerText;

    answer.addEventListener("click", () => {
        var children = document.querySelectorAll('.answerList');
        for (let i=0; i < children.length; i++) {
            children[i].disabled = true;
            children[i].style.WebkitAnimation = "fadeOut 0.5s";
            children[i].style.animation = "fadeOut 0.5s";
        }
        setTimeout(() => {
            select[qIdx] = idx;
            for (let i=0; i < children.length; i++) {
                children[i].style.display = 'none';
            }
            goNext(++qIdx);
        }, 450)
    }, false);
}

function goNext(qIdx) {
    if (qIdx === endPoint) {
        goResult();
        return;
    }

    var q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIdx].q;
    for (let i in qnaList[qIdx].a) {
        addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
    }
    var status = document.querySelector('.statusBar');
    status.style.width = (100/endPoint) * (qIdx+1) + '%'
}

function begin() {
    const name = document.querySelector("#heroName").value;
    if (name === undefined || name === '' || name == null) {
        alert('코드네임을 입력해주세요.');
        return;
    }

    main.style.WebkitAnimation = "fadeOut 0.5s";
    main.style.animation = "fadeOut 0.5s";
    setTimeout(() => {
        qna.style.WebkitAnimation = "fadeIn 0.5s";
        qna.style.animation = "fadeIn 0.5s";
        setTimeout(() => {
            main.style.display = "none";
            qna.style.display = "block";
        }, 250);
        let qIdx = 0;
        goNext(qIdx);
    }, 150);
}