let mapCollisionId = [124, 125, 126, 140, 141, 142, 156, 157, 158];
const mapdata = {
    "compressionlevel": -1,
    "height": 30,
    "infinite": false,
    "layers": [
        {
            "data": [
                18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18,
                18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18,
                18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18,
                18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18,
                18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18,
                18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18,
                18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18,
                18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18,
                18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18,
                18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18,
                18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 124, 125, 125, 125, 125, 125, 125, 125, 125, 126, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18,
                18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 140, 141, 141, 141, 141, 141, 141, 141, 141, 142, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18,
                18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 140, 141, 141, 141, 141, 141, 141, 141, 141, 142, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18,
                18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 140, 141, 141, 141, 141, 141, 141, 141, 141, 142, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18,
                18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 140, 141, 141, 141, 141, 141, 141, 141, 141, 142, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18,
                18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 140, 141, 141, 141, 141, 141, 141, 141, 141, 142, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18,
                18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 140, 141, 141, 141, 141, 141, 141, 141, 141, 142, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18,
                18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 140, 141, 141, 141, 141, 141, 141, 141, 141, 142, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18,
                18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 140, 141, 141, 141, 141, 141, 141, 141, 141, 142, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18,
                18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 156, 157, 157, 157, 157, 157, 157, 157, 157, 158, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18,
                18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18,
                18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18,
                18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18,
                18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18,
                18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18,
                18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18,
                18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18,
                18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18,
                18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18,
                18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18,
            ],
            "height": 30,
            "id": 6,
            "name": "Ground",
            "opacity": 1,
            "type": "tilelayer",
            "visible": true,
            "width": 30,
            "x": 0,
            "y": 0
        }
    ],
    "nextlayerid": 8,
    "nextobjectid": 1,
    "orientation": "orthogonal",
    "renderorder": "right-down",
    "tiledversion": "1.11.2",
    "tileheight": 8,
    "tilesets": [
        {
            "columns": 16,
            "firstgid": 1,
            "image": "colored_tilemap_packed.png",
            "imageheight": 80,
            "imagewidth": 128,
            "margin": 0,
            "name": "tiles",
            "spacing": 0,
            "tilecount": 160,
            "tileheight": 8,
            "tilewidth": 8
        }
    ],
    "tilewidth": 8,
    "type": "map",
    "version": "1.10",
    "width": 30
};
let width = 720;
let height = 720;
let scale = 2;
let lastDamageTime = 0;
let damageCooldown = 1000; // 冷卻時間，單位毫秒
let player;
let playerFacing = new Phaser.Math.Vector2(0, 1);
let cursors;
let map;
let enemies;
let bullets;
let healthText;
let levelText;
// 玩家屬性：含有職業數值
let playerStats = {
    health: 100,
    attack: 20,
    speed: 100,
};
let exp = 0;
let level = 1;
// 區塊設定：假設每個區塊 30×30 個 tile（依照原圖 tile 大小）
const CHUNK_WIDTH = 30 * mapdata.tilewidth;
const CHUNK_HEIGHT = 30 * mapdata.tileheight;
// 當前載入的區塊資訊與圖層集合
let currentChunk = { chunkX: -1, chunkY: -1 };
let currentChunks = {};
// 新增變數儲存目前動態加入的碰撞器
let currentColliders = [];
class Scene extends Phaser.Scene {
    constructor(config) {
        if (config instanceof Function)
            config = config.name;
        super(config);
    }
    addText(x, y, text, style = {}) {
        var _a;
        (_a = style.fontFamily) !== null && _a !== void 0 ? _a : (style.fontFamily = "Arial");
        return this.add.text(x, y, text, style);
    }
    setBackGround(color = 0x000000) {
        return this.add.rectangle(0, 0, this.cameras.main.width, this.cameras.main.height, color, 0.7).setOrigin(0);
    }
    addButton(x, y, text, style, click) {
        if (typeof style === "function") {
            click = style;
            style = {};
        }
        const btn = this.addText(x, y, text, style);
        if (click) {
            btn.setInteractive({ useHandCursor: true })
                .on("pointerdown", () => { click(btn); })
                .on("pointerover", () => { btn.setColor("#ff0"); })
                .on("pointerout", () => { btn.setColor("#fff"); });
        }
        return btn;
    }
}
// MenuScene：初始畫面
class MenuScene extends Scene {
    constructor() { super(MenuScene); }
    create() {
        this.addText(width / 2, 150, "我的遊戲", { fontSize: 48, color: "#fff" });
        this.addButton(width / 2, height - 300, "開始遊戲", { fontSize: 32, color: "#fff" }, b => this.scene.start("GameScene"));
    }
}
// 升級子畫面，請將此 Scene 加入遊戲的 scene 列表中
class UpgradeScene extends Scene {
    constructor() { super(UpgradeScene); }
    create() {
        this.setBackGround();
        this.addOption(100, 150, "升級生命 +20", () => playerStats.health += 20);
        this.addOption(100, 250, "升級攻擊 +2", () => playerStats.attack += 2);
        this.addOption(100, 350, "升級移動速度 +10", () => playerStats.speed += 10);
    }
    addOption(x, y, text, cbfn) {
        return this.addButton(x, y, text, { fontSize: 24 }, b => {
            cbfn();
            this.scene.stop(); // 關閉升級子畫面
            this.scene.resume("GameScene"); // 恢復遊戲
        });
    }
}
class GameScene extends Scene {
    constructor() { super(GameScene); }
    preload() {
        // 載入地圖 JSON 與 Tileset 圖片
        this.load.tilemapTiledJSON("map", mapdata);
        this.load.image("tiles", "colored_tilemap_packed.png");
        this.load.spritesheet("tiles_sprites", "colored_tilemap_packed.png", {
            frameWidth: mapdata.tilewidth,
            frameHeight: mapdata.tileheight
        });
    }
    create(data) {
        map = this.make.tilemap({ key: "map" });
        const tileset = map.addTilesetImage("tiles", "tiles");
        player = this.physics.add.sprite(64, 64, "tiles_sprites", 6).setDepth(10).setScale(scale);
        healthText = this.add.text(10, 40, `Health: ${playerStats.health}`, { fontSize: 20, color: "#fff" }).setScrollFactor(0);
        enemies = this.physics.add.group();
        // 建立子彈群組，每秒自動發射子彈
        bullets = this.physics.add.group();
        this.time.addEvent({
            delay: 500,
            callback: () => {
                console.log("玩家朝向:", playerFacing.x, playerFacing.y);
                const bullet = this.physics.add.sprite(player.x, player.y, "tiles_sprites", 129).setScale(scale).setDepth(10);
                const bulletSpeed = 200;
                bullet.setData("vec", [playerFacing.x * bulletSpeed, playerFacing.y * bulletSpeed]);
                console.log("子彈初始速度:", bullet.body.velocity.x, bullet.body.velocity.y);
                // 子彈與怪物碰撞時，扣除怪物血量（根據玩家攻擊力），血量耗盡則消滅怪物並獲得經驗
                this.physics.add.overlap(bullet, enemies, (b, enemySprite) => {
                    let enemyHealth = enemySprite.getData("health");
                    enemyHealth -= playerStats.attack;
                    if (enemyHealth > 0)
                        enemySprite.setData("health", enemyHealth);
                    else {
                        this.gainExp(enemySprite.getData("lootexp") || 10);
                        enemySprite.destroy();
                    }
                    b.destroy();
                });
                this.time.addEvent({
                    delay: 3000,
                    callback: () => {
                        bullet.destroy();
                    }
                });
                bullets.add(bullet);
            },
            loop: true
        });
        // 召喚初次怪物，並持續每秒產生新怪物
        this.summonMonster();
        this.time.addEvent({
            delay: 1500,
            callback: () => this.summonMonster(),
            loop: true
        });
        this.physics.add.overlap(player, enemies, (playerSprite, enemySprite) => {
            const now = this.time.now;
            if (now - lastDamageTime <= damageCooldown)
                return;
            // 根據怪物的攻擊力扣除玩家血量，預設值為 10（也可以改成 enemySprite.getData("attack")）
            const damage = enemySprite.getData("attack") || 0;
            playerStats.health -= damage;
            if (playerStats.health <= 0) {
                this.scene.stop(this);
                this.scene.start("MenuScene");
            }
            lastDamageTime = now;
            console.log(`玩家觸碰怪物，扣血 ${damage}，目前血量：${playerStats.health}`);
        }, undefined, this);
        // 顯示等級文字與玩家狀態
        levelText = this.add.text(10, 10, `Level: ${level}`, { fontSize: 20, color: "#fff" }).setDepth(11).setScrollFactor(0);
        // 設定鍵盤控制
        cursors = this.input.keyboard.createCursorKeys();
        // 攝影機跟隨玩家
        this.cameras.main.startFollow(player);
        // 初始載入玩家所在區塊及周邊 3x3 區塊
        const initChunk = getChunkIndex(player.x, player.y);
        currentChunk = { chunkX: initChunk.chunkX, chunkY: initChunk.chunkY };
        loadChunks(this, currentChunk.chunkX, currentChunk.chunkY, tileset);
    }
    update(time, delta) {
        // 玩家移動控制，使用 playerStats.speed 影響移動速度
        const speed = playerStats.speed;
        player.setVelocity(0, 0);
        let direction = new Phaser.Math.Vector2(0, 0);
        if (cursors.left.isDown) {
            player.setVelocityX(-speed);
            direction.x = -1;
        }
        else if (cursors.right.isDown) {
            player.setVelocityX(speed);
            direction.x = 1;
        }
        if (cursors.up.isDown) {
            player.setVelocityY(-speed);
            direction.y = -1;
        }
        else if (cursors.down.isDown) {
            player.setVelocityY(speed);
            direction.y = 1;
        }
        // 若有輸入方向則更新玩家朝向
        if (direction.length() > 0) {
            playerFacing = direction.normalize();
        }
        // 更新子彈的速度（依據預先設定的方向向量）
        bullets.getChildren().forEach((bullet) => {
            let [vx, vy] = bullet.getData("vec");
            bullet.setVelocity(vx, vy);
        });
        // 讓每個敵人追蹤玩家
        enemies.getChildren().forEach((enemy) => {
            this.physics.moveToObject(enemy, player, 30);
        });
        healthText.setText(`Health: ${playerStats.health}`).setDepth(11);
        // 檢查玩家是否進入新的區塊，若是則更新載入的 3x3 地圖區塊
        updateChunks(this);
    }
    // 召喚怪物，並為怪物設定數值
    summonMonster() {
        const x = player.x + Phaser.Math.Between(-150, 150);
        const y = player.y + Phaser.Math.Between(-150, 150);
        console.log("玩家位置:", player.x, player.y);
        const enemy = this.physics.add.sprite(x, y, "tiles_sprites", 7)
            .setDepth(10).setScale(scale);
        // 設定怪物數值（例如：血量 30、攻擊力 5）
        enemy.setData("health", 30);
        enemy.setData("attack", 5);
        enemy.setData("lootexp", 10);
        enemies.add(enemy);
        // 為新敵人新增目前所有牆壁區塊的碰撞設定
        for (let key in currentChunks) {
            currentColliders.push(this.physics.add.collider(enemy, currentChunks[key]).setName(key));
        }
    }
    // 增加經驗值，並在達到指定經驗後升級
    gainExp(amount) {
        exp += amount;
        const needed = 50 * level;
        if (exp < needed)
            return;
        exp -= needed;
        level++;
        // 每次升級獲得一個升級點
        this.scene.pause("GameScene");
        this.scene.launch("UpgradeScene");
        levelText.setText(`Level: ${level}`);
    }
}
const game = new Phaser.Game({
    type: Phaser.AUTO,
    width,
    height,
    pixelArt: true,
    physics: { default: "arcade", arcade: { debug: true } },
    scene: [MenuScene, GameScene, UpgradeScene],
});
// ── 區塊載入與更新相關函數 ──
// 根據玩家座標取得所在區塊索引
function getChunkIndex(x, y) {
    return {
        chunkX: Math.floor(x / CHUNK_WIDTH),
        chunkY: Math.floor(y / CHUNK_HEIGHT)
    };
}
function clearOutsideChunks(centerChunkX, centerChunkY) {
    const minX = centerChunkX - 2;
    const maxX = centerChunkX + 1;
    const minY = centerChunkY - 2;
    const maxY = centerChunkY + 1;
    // 先刪除超出範圍的區塊
    for (const key in currentChunks) {
        // 假設 key 格式為 "ground_x_y"
        const parts = key.split("_");
        const cx = parseInt(parts[1]);
        const cy = parseInt(parts[2]);
        if (cx < minX || cx > maxX || cy < minY || cy > maxY) {
            currentChunks[key].destroy();
            delete currentChunks[key];
        }
    }
    // 再移除與已刪除區塊相關的碰撞器
    currentColliders = currentColliders.filter(collider => {
        if (!(collider.object2 instanceof Phaser.Tilemaps.TilemapLayer) ||
            Object.keys(currentChunks).includes(collider.object2.name))
            return true;
        collider.destroy();
        return false;
    });
}
// 將原始圖層指定區域的資料複製到新建立的區塊圖層中
function fillChunkLayer(chunkLayer, sourceLayerName, offsetX, offsetY) {
    for (let ty = 0; ty < CHUNK_HEIGHT; ty++) {
        for (let tx = 0; tx < CHUNK_WIDTH; tx++) {
            // 計算循環用的 tile 座標（取餘數）
            let tileX = (offsetX + tx) % map.width;
            let tileY = (offsetY + ty) % map.height;
            // 若餘數為負數則補正
            if (tileX < 0)
                tileX += map.width;
            if (tileY < 0)
                tileY += map.height;
            const tile = map.getTileAt(tileX, tileY, false, sourceLayerName);
            if (tile) {
                chunkLayer.putTileAt(tile.index, tx, ty);
            }
        }
    }
}
// 載入以 (centerChunkX, centerChunkY) 為中心、周邊 3x3 區塊的地圖
function loadChunks(scene, centerChunkX, centerChunkY, tileset) {
    clearOutsideChunks(centerChunkX, centerChunkY);
    for (let y = centerChunkY - 2; y <= centerChunkY + 1; y++) {
        for (let x = centerChunkX - 2; x <= centerChunkX + 1; x++) {
            // 載入 Ground 區塊
            const groundChunkName = `ground_${x}_${y}`;
            if (currentChunks[groundChunkName])
                continue;
            let groundChunk = map.createBlankLayer(groundChunkName, tileset, x * CHUNK_WIDTH, y * CHUNK_HEIGHT, CHUNK_WIDTH, CHUNK_HEIGHT).setDepth(0);
            fillChunkLayer(groundChunk, "Ground", x * CHUNK_WIDTH, y * CHUNK_HEIGHT);
            groundChunk.setCollision(mapCollisionId);
            currentChunks[groundChunkName] = groundChunk;
            // 為玩家與現有敵人新增牆壁碰撞，並將 collider 存入 currentColliders 以便後續清除
            let colPlayer = scene.physics.add.collider(player, groundChunk).setName(groundChunkName);
            currentColliders.push(colPlayer);
            enemies.getChildren().forEach((enemy) => {
                let colEnemy = scene.physics.add.collider(enemy, groundChunk).setName(groundChunkName);
                currentColliders.push(colEnemy);
            });
        }
    }
}
// 每次更新時檢查玩家所在區塊是否改變，若改變則重新載入區塊
function updateChunks(scene) {
    const { chunkX, chunkY } = getChunkIndex(player.x, player.y);
    if (chunkX !== currentChunk.chunkX || chunkY !== currentChunk.chunkY) {
        currentChunk = { chunkX, chunkY };
        const tileset = map.tilesets[0];
        loadChunks(scene, chunkX, chunkY, tileset);
    }
}
// 找到距離玩家最近的敵人
function getClosestEnemy(player, enemiesGroup) {
    let minDist = Number.MAX_VALUE;
    let closest = null;
    enemiesGroup.children.iterate((enemy) => {
        const enemySprite = enemy;
        const dist = Phaser.Math.Distance.Between(player.x, player.y, enemySprite.x, enemySprite.y);
        if (dist < minDist) {
            minDist = dist;
            closest = enemySprite;
        }
        return true;
    });
    return closest;
}
