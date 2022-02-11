class Api::V1::ChallengesController < ApplicationController
  def index
    render json: { message: 'It works!' }
  end
end
