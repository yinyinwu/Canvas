class VideoController < ApplicationController
  def select_area
  end
  
  def save_selection
    puts params[:video][:x1]
    head :ok
  end
end
