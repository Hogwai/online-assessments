require 'net/http'
require 'uri'
require 'json'

challenge_token = 'vb20y34ca'

uri = URI('https://coderbyte.com/api/challenges/json/rest-get-simple')
response = Net::HTTP.get(uri)
data = JSON.parse(response)
hobbies = data['hobbies']
formatted_hobbies= hobbies.join(', ')


final_output = formatted_hobbies + challenge_token
final_output = final_output.chars.map.with_index {
  |c, i| i % 4 == 3 ? '_' : c 
}.join

puts final_output