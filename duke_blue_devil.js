var image = new SimpleImage("duke_blue_devil.png");
for (var pixel of image.values()) {  
  //What code goes here?    
  if (pixel.getRed() < 200) {
    pixel.setRed(0);  
    pixel.setGreen(255);  
    pixel.setBlue(100);	    
  }
}
print(image);