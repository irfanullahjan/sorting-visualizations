var towers = [
    [5, 4, 3, 2, 1],
    [],
    []
];

var discs = towers[0].length;

var sorter;

function setup() {
    createCanvas(600, 400);
    rectMode(CENTER);
    sorter = hanoiTower(discs, towers[0], towers[1], towers[2]);
}

function draw() {
    background(0);
    stroke(255);
    strokeWeight(40);
    drawTowers(towers);
    if (frameCount > 30 && frameCount % 30 == 0) {
        sorter.next();
    }
}

function drawTowers(towers) {
    // towers
    for (var t = 0; t < towers.length; ++t) {
        // disks
        for (var d = 0; d < towers[t].length; ++d) {
            var size = map(towers[t][d], 0, discs, 0, 100);
            var xLoc = map(t, 0, towers.length, 100, width - 30) + map(size, 0, 100, 100 / 2, 0);
            var yLoc = map(d, 0, discs, height - 100, 100);
            stroke(map(size, 0, 100, 120, 255));
            line(xLoc, yLoc, xLoc + size, yLoc);
        }
    }
}

function* hanoiTower(n, source, target, auxiliary) {
    if (n > 0) {
        // Move n - 1 disks from source to auxiliary, so they are out of the way
        yield* hanoiTower(n - 1, source, auxiliary, target);

        // Move the nth disk from source to target
        target.push(source.pop());
        yield;

        // Move the n - 1 disks that we left on auxiliary onto target
        yield* hanoiTower(n - 1, auxiliary, target, source);
    }
}