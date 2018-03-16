Rails.application.routes.draw do
  resources :users
  resources :articles
  resources :places

  post '/login', to: 'user#login'
  get '/article', to: 'article#index'
  get '/place', to: 'place#index'
end
