Portfolio::Application.routes.draw do
 get '/' => 'home#index'
 get '/contact' => 'home#contact'
 get '/work' => 'home#work'
end
