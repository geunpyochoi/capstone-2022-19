const eyeTrackingStartButton = document.getElementById("startBtn");
const videoEl = document.getElementById("video");

let count = 0;
let arr = ['상단', '중앙', '하단', '좌측', '우측', '을 바라보세요'];
let word = ["topWord", "centerWord", "bottomWord", "leftWord", "rightWord"]

let try_num = 5;
let animal = ['캥거루', '토끼' ,'강아지', '고양이', '코알라', '고릴라', '원숭이', '고래', '낙타', '뱀', 
'물개', '쥐', '소', '말', '돼지', '거북이', '악어', '호랑이', '표범', '치타',
'늑대', '여우', '스컹크', '두더지', '돌고래', '도마뱀', '독소리', '바다표범', '가재',
'랍스타', '원앙', '까마귀', '오리', '앵무새', '부엉이', '참새', '꾀꼬리', '나비',
'잠자리', '이구아나', '카멜레온', '개미핥기', '거미', '잉어', '곰', '펭귄', '거위',
'박쥐', '병아리', '닭'];



async function coordinate(){
    console.log("count"+count);
    alert(arr[count]+arr[arr.length-1]);
    document.getElementById(word[count]).innerText=animal[(Math.floor(Math.random() * 50))];
    runInitialTest(localvideo);
}

async function inputAnimal(){

    //console.log("visible");
    //document.getElementById("info").style.display="block";
    inputPrompt = prompt('동물을 입력하세요');
    if(inputPrompt !=document.getElementById(word[count]).innerText){
        alert("동물이 틀렸습니다. 다시한번 테스트하겠습니다.");
        coordinate();
    }
    else{
        let retValue = returnValue();
        console.log(retValue);
        count++;
        zeroSet();
        if(count === 5){
            document.getElementById("page2").style.display = "none";
            document.getElementById("page3").style.display = "block";
        }
    }
}


document.getElementById("centerWord").addEventListener('click',coordinate);

