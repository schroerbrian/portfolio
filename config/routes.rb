Portfolio::Application.routes.draw do
 get '/' => 'home#index'
 get '/contact' => 'home#contact'
end
