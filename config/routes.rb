Rails.application.routes.draw do
  get '*page', to: 'static#index', constraints: lambda { |request|
    !request.xhr? && request.format.html?
  }

  root 'static#index'

  namespace :api do
    namespace :v1, defaults: { format: 'json' } do
      resources :challenges, only: [:index]
    end
  end
end
