Rails.application.routes.draw do
  resources :microposts
  resources :users
  # For details on the DSL available within this file, see 'http://guides.rubyonrails.org/routing.html
  get "hello/world", to: 'hello#world'
end
