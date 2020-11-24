class SortableItem {
    constructor(i, value) {
        this.index = i;
        this.visibility = true;
        this.value = value;
        this.color = [150, 150, 150];
    }
}

const numItems = 10;
const maxValue = 20;
let numbers = [];
var darkGreen = [];
var current = -1;
var sorted = 0;


for (let i = 0; i < numItems; ++i) {
    numbers.push(new SortableItem(i, Math.round(Math.random() * maxValue) + 0.5));
}

function setup() {
    createCanvas(600, 400);
    sorter = insertionSort();
}

function draw() {
    background(0);
    stroke(0);
    if (frameCount % 30 == 0) {
        sorter.next();
    }
    drawList(numbers);
}

function drawList(numbers) {
    for (let i = 0; i < numbers.length; ++i) {
        if (numbers[i].visibility == false) continue;
        numbers[i].index += (i - numbers[i].index) / 15;
        let locationX = map(numbers[i].index, 0, numbers.length, 0, width - 100);
        let rectHeight = map(numbers[i].value, 0, maxValue, 0, height - 100);
        fill(numbers[i].color);
        if (i < sorted) {
            fill(0, 150, 0);
        }
        rect(locationX + 50 + 15, height - 50, 30, -rectHeight);
    }
}

function* insertionSort() {
    for (var i = 0; i < numbers.length; ++i)
    {
        var j = i - 1;
        temp = {...numbers[i]};
        yield;
        sorted++;
        while (j >= 0 && numbers[j].value > temp.value)
        {
            numbers[j].visibility = false;
            numbers[j+1] = {...numbers[j]};
            numbers[j+1].visibility = true;
            j = j - 1;
            yield;
        }
        numbers[j+1] = {...temp};
        numbers[j+1].index = j+1;
        numbers[j+1].visibility = true;
        yield;
    }
}
