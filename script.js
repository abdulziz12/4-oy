import * as turtle from 'truble';
import * as colorsys from 'colorsys';

turtle.bgcolor('black');
turtle.tracer(500);

function draw() {
  let h = 0;
  for (let i = 0; i < 100; i++) {
    const c = colorsys.hsv_to_rgb(h, 1, 1);
    h += 0.5;
    turtle.up();
    turtle.goto(0, 0);
    turtle.down();
    turtle.color('black');
    turtle.fillcolor(c);
    turtle.begin_fill();
    turtle.rt(98);
    turtle.circle(i, 12);
    turtle.fd(290);
    turtle.fd(i);
    turtle.lt(29);
    for (let j = 0; j < 129; j++) {
      turtle.fd(i);
      turtle.circle(j, 299, 2);
    }
    turtle.end_fill();
  }
}

draw();
turtle.done();

