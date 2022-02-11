Rails.application.routes.draw do
  get '*page', to: "static#index", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

  root 'static#index'

  namespace :api do
    namespace :v1, defaults: { format: 'json'} do
      resources :challenges, only: [:index]
    end
  end
end
