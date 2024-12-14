const iframes = document.querySelectorAll('iframe');

// iframe のリストを表示
console.log("フルスクリーン可能な iframe 一覧:");
iframes.forEach((iframe, index) => {
    console.log(`番号: ${index}, src: ${iframe.src}`);
});

// ユーザーに番号を入力させる
const num = prompt("フルスクリーンにしたい iframe の番号を入力してください:");

// 入力をチェックしてフルスクリーン化
if (num >= 0 && num < iframes.length) {
    const iframe = iframes[num];
    iframe.requestFullscreen?.() || iframe.webkitRequestFullscreen?.() || iframe.msRequestFullscreen?.();
} else {
    console.log(`指定された番号 ${num} の iframe は存在しません。`);
}
