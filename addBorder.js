// a black border that is 10 pixels thick.
function addBorder(image, thickness){
    for (var px of image.values()){
      var x = px.getX();
      var y = px.getY();
      if (x < thickness){
        px = setBlack(px);
      }
      if (x >= image.getWidth()-thickness){
        px = setBlack(px);
      }
      if (y < thickness){
        px = setBlack(px);
      }
      if (y >= image.getHeight()-thickness){
        px = setBlack(px);
      }
    }
    return image;
  }