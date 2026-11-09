//Problem 1
function multiplyValue(value: number, multiplier?: number): number {
    return value * (multiplier ?? 2);
}

console.log(multiplyValue(5));    
console.log(multiplyValue(5, 3)); 

//Problem 2

function processInput(input: string | number | boolean): string | number {
    if (typeof input === "string") {
        return input.trim().toLowerCase();
    }

    if (typeof input === "number") {
        return input * 10;
    }

    return input ? "Active" : "Inactive";
}

console.log(processInput(" HELLO ")); 
console.log(processInput(5));         
console.log(processInput(true));     
console.log(processInput(false));  

// Problem 3
function formatCoordinate(
    location: readonly [number, number, string]
): string {
    const [latitude, longitude, locationName] = location;

    return `Location: ${locationName} (${latitude}, ${longitude})`;
}

console.log(formatCoordinate([23.8103, 90.4125, "Dhaka"]));


//Problem 4

function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
}

console.log(concatenateArrays([1, 2], [3, 4]));


console.log(concatenateArrays(["a", "b"], ["c"]));

//Problem 5

interface Course {
    title: string;
    students: number;
    published: boolean;
}

function getPopularCourses(
    courses: Course[],
    minStudents: number
): Course[] {
    return courses.filter(
        (course) => course.published && course.students >= minStudents
    );
}

const courses: Course[] = [
    { title: "TypeScript", students: 120, published: true },
    { title: "JavaScript", students: 80, published: true },
    { title: "React", students: 200, published: false }
];

console.log(getPopularCourses(courses, 100));

//Problem 6 
function pluckValues1<T, K extends keyof T>(
    items: T[],
    key: K
): T[K][] {
    return items.map((item) => item[key]);
}

const users1 = [
    { name: "Rahim", age: 25 },
    { name: "Karim", age: 30 }
];

console.log(pluckValues1(users1, "name"));


console.log(pluckValues1(users1, "age"));

// Problem 7

function pluckValues<T, K extends keyof T>(
    items: T[],
    key: K
): T[K][] {
    return items.map((item) => item[key]);
}

const users = [
    { name: "Rahim", age: 25 },
    { name: "Karim", age: 30 }
];

console.log(pluckValues(users, "name"));


console.log(pluckValues(users, "age"));


// Problem 8
function validateAgeAsync(age: number): Promise<string> {
    return new Promise((resolve, reject) => {
        if (age < 18) {
            reject(new Error("Access Denied: Must be 18 or older"));
            return;
        }

        setTimeout(() => {
            resolve("Access Granted");
        }, 1000);
    });
}

validateAgeAsync(20)
    .then((message) => console.log(message))
    .catch((error: Error) => console.error(error.message));