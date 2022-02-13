class Api::V1::ChallengesController < ApplicationController
  def index
    render json: { message: 'Challenges retrieved successfully', data: Challenge.all }
  end
end
