require "sinatra"

set :views, Proc.new {File.join(root, '..', "views")}
set :public_folder, Proc.new {File.join(root, '..', "public")}

get "/" do 
	response['Access-Control-Allow-Origin'] = '*'
	erb :index
end
