let map = document.querySelector("#map");

let files = [
"08092022.gpx",
"11092022.gpx",
"12092022.gpx",
"13092022.gpx"
];

function tostr(x){
  let output = 'https://gpxstudio.github.io/?state=%7B%22urls%22:%5B'
  for (let file of x) {
    output = output + "%22https%3A%2F%2Fraw.githubusercontent.com%2FUP941374%2FGPS%2Fmain%2FGPX%2FSPACERY%2F" + file + "%22,"
  }
  mapsrc = output.slice(0, -1);
  mapsrc = mapsrc + '%5D%7D&embed'
  return mapsrc;
}

map.src = tostr(files);
