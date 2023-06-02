class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    welcome() {
        console.log(`Hi! I'm ${this.name} ${this.surname}`);
    }
}

let person = new Person('Roman', 'Kolos')

person.welcome()

class Student extends Person {
    constructor(name, surname, faculty, marks) {
        super(name, surname);
        this.faculty = faculty;
        this.marks = marks;
    }

    getAvgMark() {
        let avgMark = 0;
        for (let i = 0; i < this.marks.length; i++) {
            avgMark += this.marks[i];
        }
        
        return Math.round(avgMark/this.marks.length * 10) / 10;
    }

    getMedianMark = function() {
        let medianArray = this.marks.sort((a, b) => {
            return a - b;
        })
        let medianNumber = 0;
        
        let num1 = medianArray.length / 2 - 1;
        let num2 = Math.floor(medianArray.length / 2);
        
        if (medianArray.length % 2 === 0) {
            medianNumber = (medianArray[num1] + medianArray[num2]) / 2;
        } else {
            medianNumber = medianArray[num2];
        };
    
        return medianNumber;
    }

    getMaxMark = function() {
        let maxMark = this.marks[0];
        for (let i = 1; i < this.marks.length; i++) {
            if(this.marks[i] > maxMark) {
                maxMark = this.marks[i];
            }
        }
        return maxMark;
    }

    getMinMark = function() {
        let minMark = this.marks[0];
        for (let i = 1; i < this.marks.length; i++) {
            if(this.marks[i] < minMark) {
                minMark = this.marks[i];
            }
        }
        return minMark;
    }

    getTotal = function() {
        let total = 0;
        for (let i = 0; i < this.marks.length; i++) {
            total += this.marks[i];
        }
        return total;
    }

    getInfo = function() {
        console.log(`info about student: name - ${this.name} faculty - ${this.faculty} total - ${this.getTotal()}`);
    }
}

let student = new Student('Jane', 'Smith', 'JavaScript', [97, 93, 100, 98, 100])

student.welcome();

let avgMark = student.getAvgMark();
console.log(avgMark);

let medianMark = student.getMedianMark();
console.log(medianMark);

let maxMark = student.getMaxMark();
console.log(maxMark);

let minMark = student.getMinMark();
console.log(minMark);

let total = student.getTotal();
console.log(total);

student.getInfo();

class Headman extends Student {
    constructor(name, surname, faculty, marks) {
        super(name, surname, faculty, marks);
    }

    defendGroup() {
        console.log("This is my group. I'm their hero!");
    }
}

const headman = new Headman('Bruce', 'Smith', 'Front-end Pro', [97, 93, 100, 98, 100, 87, 95]);
console.log(headman);

headman.welcome();
headman.defendGroup();

let avgMarkHeadman = headman.getAvgMark();
console.log(avgMarkHeadman);

let medianMarkHeadman = headman.getMedianMark();
console.log(medianMarkHeadman);

let maxMarkHeadman = headman.getMaxMark();
console.log(maxMarkHeadman);

let minMarkHeadman = headman.getMinMark();
console.log(minMarkHeadman);

let totalHeadman = headman.getTotal();
console.log(totalHeadman);

headman.getInfo();