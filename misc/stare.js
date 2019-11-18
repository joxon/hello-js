const CANVAS_WIDTH = 640;
const CANVAS_HEIGHT = 480;
const EYE_FRAME_LEFT_X = CANVAS_WIDTH / 2 - 50;
const EYE_FRAME_RIGHT_X = CANVAS_WIDTH / 2 + 50;
const EYE_FRAME_Y = CANVAS_HEIGHT / 2 - 100;
const EYE_FRAME_RADIUS_X = 50;
const EYE_FRAME_RADIUS_Y = 100;
const EYE_BALL_RADIUS = 20;
const WHITE = 255;
const BLACK = 0;

let video;
let poseNet;
let noseX = 0;
let noseY = 0;

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);

  video = createCapture(VIDEO);
  video.hide();

  poseNet = ml5.poseNet(video, () => console.log("model ready"));

  poseNet.on("pose", poses => {
    // poses.length > 1 when there are multiple faces
    if (poses.length > 0) {
      const pose = poses[0].pose;

      // const nX = pose.keypoints[0].position.x;
      // const nY = pose.keypoints[0].position.y;
      // noseX = lerp(noseX, nX, 0.5);
      // noseY = lerp(noseX, nY, 0.5);

      noseX = pose.keypoints[0].position.x;
      noseY = pose.keypoints[0].position.y;
    }
  });
}

// https://processing.org/reference/lerp_.html
// Calculates a number between two numbers at a specific increment. The amt parameter is the amount to interpolate between the two values where 0.0 equal to the first point, 0.1 is very near the first point, 0.5 is half-way in between, etc. The lerp function is convenient for creating motion along a straight path and for drawing dotted lines.

function draw() {
  image(video, 0, 0);

  // eye balls should be bound to eye frames
  const eyeBallLeftX = noseX - 50;
  const eyeBallRightX = noseX + 50;
  const eyeBallY = noseY - 100;

  // left eye frame
  fill(WHITE);
  ellipse(
    EYE_FRAME_LEFT_X,
    EYE_FRAME_Y,
    EYE_FRAME_RADIUS_X,
    EYE_FRAME_RADIUS_Y
  );
  // line(leftEyeX, 0, leftEyeX, CANVAS_WIDTH); // left vertical line

  // left eye ball
  fill(BLACK);
  ellipse(eyeBallLeftX, eyeBallY, EYE_BALL_RADIUS, EYE_BALL_RADIUS);

  // right eye frame
  fill(WHITE);
  ellipse(
    EYE_FRAME_RIGHT_X,
    EYE_FRAME_Y,
    EYE_FRAME_RADIUS_X,
    EYE_FRAME_RADIUS_Y
  );
  // line(rightEyeX, 0, rightEyeX, CANVAS_WIDTH); // right vertical line

  // right eye ball
  fill(BLACK);
  ellipse(eyeBallRightX, eyeBallY, EYE_BALL_RADIUS, EYE_BALL_RADIUS);

  // line(0, eyeBallY, CANVAS_WIDTH, eyeBallY); // eye horizontal line

  // nose
  fill(WHITE);
  ellipse(noseX, noseY, 10);
}
// https://processing.org/reference/fill_.html
// Sets the color used to fill shapes. For example, if you run fill(204, 102, 0), all subsequent shapes will be filled with orange. This color is either specified in terms of the RGB or HSB color depending on the current colorMode(). The default color space is RGB, with each value in the range from 0 to 255.

// https://processing.org/reference/ellipse_.html
// Draws an ellipse (oval) to the screen. An ellipse with equal width and height is a circle. By default, the first two parameters set the location, and the third and fourth parameters set the shape's width and height. The origin may be changed with the ellipseMode() function.

// https://processing.org/reference/line_.html
// line(x1, y1, x2, y2)
