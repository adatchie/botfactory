// main.js

// ゲームの設定
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// プレイヤー（Pac-Man）の設定
const player = {
    x: 100,
    y: 100,
    width: 20,
    height: 20,
    color: '#FFFF00',
    speed: 2,
    direction: 'right' // 'up', 'down', 'left', 'right'
};

// 壁の設定
const walls = [
    { x: 50, y: 50, width: 20, height: 20, color: '#0000FF' }
];

// ドットの設定
const dots = [
    { x: 200, y: 100, width: 10, height: 10, color: '#FFFFFF' }
];

// ゲームループ
function gameLoop() {
    // 画面のクリア
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // プレイヤーの描画
    ctx.fillStyle = player.color;
    ctx.beginPath();
    ctx.arc(player.x, player.y, player.width / 2, 0, Math.PI * 2);
    ctx.fill();

    // 壁の描画
    walls.forEach(wall => {
        ctx.fillStyle = wall.color;
        ctx.fillRect(wall.x, wall.y, wall.width, wall.height);
    });

    // ドットの描画
    dots.forEach(dot => {
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.width / 2, 0, Math.PI * 2);
        ctx.fill();
    });

    // プレイヤーの移動（自動テスト）
    player.x += player.speed;
    if (player.x > canvas.width) {
        player.x = 0;
    }

    // ループ
    requestAnimationFrame(gameLoop);
}

// キーボード操作
document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'ArrowUp':
            player.y -= player.speed;
            break;
        case 'ArrowDown':
            player.y += player.speed;
            break;
        case 'ArrowLeft':
            player.x -= player.speed;
            break;
        case 'ArrowRight':
            player.x += player.speed;
            break;
    }
});

// ゲーム開始
window.onload = () => {
    gameLoop();
};
