class SortableItem {
    constructor(i, value) {
        this.index = i;
        this.visibility = true;
        this.value = value;
        this.color = [100, 100, 100];
    }
}

const numItems = 10;
const maxValue = 20;
let numbers = [];
var darkGreen = [];

for (let i = 0; i < numItems; ++i) {
    numbers.push(new SortableItem(i, Math.round(Math.random() * maxValue) + 0.5));
}

function setup() {
    createCanvas(600, 400);
    sorter = bubbleSort();
}

function draw() {
    background(0);
    stroke(0);
    if (frameCount % 40 == 0) {
        for (let i = 0; i < numbers.length; ++i) {
            numbers[i].color = [100, 100, 100];
        }
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
        rect(locationX + 50 + 15, height - 50, 30, -rectHeight);
    }
}

function* bubbleSort() {
    // sorting
    for (let i = numbers.length - 1; i > 0; i--) {
        swapped = false;
        for (let j = 0; j < i; j++) {
            redItems = [];
            greenItems = [];
            if (numbers[j].value > numbers[j + 1].value) {
            } else {
            }
            if (numbers[j].value > numbers[j + 1].value) {
                // swap
                swapped = true;
                var t = {...numbers[j]};
                numbers[j] = {...numbers[j + 1]};
                numbers[j + 1] = {...t}
                numbers[j].color = [0, 255, 0];
                numbers[j + 1].color = [0, 255, 0];
            }
            else
            {
                numbers[j].color = [255, 0, 0];
                numbers[j + 1].color = [255, 0, 0];
            }
            yield;
        }
        if (swapped === false)
        {
            for (var x = 0; x < numbers.length; ++x) {
                darkGreen.push(x);
            }
            return;
        }
        darkGreen.push(i);
    }
}
