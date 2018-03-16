class PlacesController < ApplicationController

  def index
    @places = Place.all
    render json: @places, status: 200
  end

  # def create
  #   render json: @place, status: 200
  # end

  def show
    render json: @place, status: 200
  end





end
