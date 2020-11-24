class SortableItem {
    constructor(i, value) {
        this.index = i;
        this.visibility = true;
        this.value = value;
        this.color = [100, 100, 100];
        this.min = false;
    }
}

const numItems = 10;
const maxValue = 20;
let numbers = [];
var darkGreen = [];
var current = 0;
var min = 0;


for (let i = 0; i < numItems; ++i) {
    numbers.push(new SortableItem(i, Math.round(Math.random() * maxValue) + 0.5));
}

function setup() {
    createCanvas(600, 400);
    sorter = selectionSort();
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
        numbers[i].index += (i - numbers[i].index) / 15;
        let locationX = map(numbers[i].index, 0, numbers.length, 0, width - 100);
        let rectHeight = map(numbers[i].value, 0, maxValue, 0, height - 100);
        fill(numbers[i].color);
        if (darkGreen.includes(i)) {
            fill(0, 100, 0);
        }
        if (i == min) {
            fill(0, 255, 0);
        }
        if (i == current) {
            fill(255, 0, 0);
        }
        rect(locationX + 50 + 15, height - 50, 30, -rectHeight);
    }
}

function* selectionSort() {

    for (var i = 0; i < numbers.length - 1; ++i) {
        min = i;
        current = i;
        yield;
        for (var j = i + 1; j < numbers.length; ++j) {
            if (numbers[j].value < numbers[min].value) {
                min = j;
            }
            current = j;
            yield;
        }
        temp = { ...numbers[min] };
        numbers[min] = { ...numbers[i] };
        numbers[i] = { ...temp };
        numbers[i].color = [0, 100, 0];
        min = -1;
        current = -1;
        yield;
    }
    current = numbers.length - 1;
    yield;
    current = -1;
    numbers[numbers.length-1].color = [0, 100, 0];
}
