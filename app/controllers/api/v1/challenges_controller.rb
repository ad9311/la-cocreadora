class Api::V1::ChallengesController < ApplicationController
  def index
    render json: { message: 'Ready', data: Challenge.all.sort_by { |i| i[:id] } }
  end

  def update
    challenge = Challenge.find(params[:id])
    challenge.update_columns(rating: params[:challenge][:rating], status: params[:challenge][:status])
    if challenge.save!
      render json: { message: 'La evaluación ha sido enviada con éxito.'}
    else
      render json: { message: 'No se pudo enviar la calificación.'}
    end
  end
end
