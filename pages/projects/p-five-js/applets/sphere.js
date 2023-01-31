var totalTriangles;
var globe;
var superA;
var superB;

function setup() {
    createCanvas(800, 800, WEBGL);

    totalTriangles = 50;
    globe = []; 
    while(globe.push([]) < totalTriangles+1);
    superA = 1;
    superB = 1;

    let radius = 200;
    for (let i = 0; i < totalTriangles+1; i++) {
        let latitude = map(i, 0, totalTriangles, -HALF_PI, HALF_PI);
        let radiusTwo = superShape(latitude, 2, 10, 10, 10);
        for (let j = 0; j < totalTriangles+1; j++) {
            let longitude = map(j, 0, totalTriangles, -PI, PI);
            let radiusOne = superShape(longitude, 8, 60, 100, 30);

            let xPoint = radius * radiusOne * cos(longitude) * radiusTwo * cos(latitude);
            let yPoint = radius * radiusOne * sin(longitude) * radiusTwo * cos(latitude);
            let zPoint = radius * radiusTwo * sin(latitude);

            globe[i][j] = createVector(xPoint, yPoint, zPoint);
        }
    }
}

superShape = (th, m, n1, n2, n3) => {
    let radius = 1;

    let t1 = abs((1/superA) * cos(m * th / 4));
    t1 = pow(t1,n2);

    let t2 = abs((1/superB) * sin(m * th / 4));
    t2 = pow(t2,n3);

    let t3 = t1 + t2;
    radius = pow(t3, -1 / n1);

    return radius;
}

function draw() {
    background(100);
    orbitControl(3, 3);
    rotateX(HALF_PI);

    let locX = mouseX - height / 2;
    let locY = mouseY - width / 2;
    pointLight(255, 255, 255, 10, 10, 100);

    for (let i = 0; i < totalTriangles; i++) {
        fill(255);

        beginShape(TRIANGLE_STRIP);
        for (let j = 0; j < totalTriangles+1; j++) {
            let vertexOne = globe[i][j];
            vertex(vertexOne.x, vertexOne.y, vertexOne.z);
            let vertexTwo = globe[i+1][j];
            vertex(vertexTwo.x, vertexTwo.y, vertexTwo.z);
        }
        endShape();
    }
}