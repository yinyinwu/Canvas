class VideoController < ApplicationController
  def select_area
  end
  
  #coords as passed as an array. coords[0] = x1, coords[1] = y1, coords[2] = x2, coords[3] = y2
  #etc...
  def save_selection
    puts "SDFLSDFKJSLKJFS"
    coords = params[:x1]
    head :ok
  end
end
